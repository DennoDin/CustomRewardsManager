<template>
    <div class="pa-md-5">
        <v-card class="pa-md-5">
            <v-card-title>Search for Twitch ID</v-card-title>
            <v-text-field v-model="searchHandle" input label="Enter User ID"/>
            <v-btn v-on:click="searchChannel(searchHandle)">Search</v-btn>
        </v-card>
        <v-container fluid pa-md-5>
            <v-row v-if="matchFound" class="pa-md-5">
                <channel-card
                    :isPerfectMatch="true"
                    :key="perfectMatch.display_name"
                    :displayName="perfectMatch.display_name"
                    :handle="perfectMatch.broadcaster_login"
                    :isLive="perfectMatch.is_live"
                    :gameName="perfectMatch.game_name"
                    :streamTitle="perfectMatch.title"
                    :img="perfectMatch.thumbnail_url"
                    :dimensions="{maxWidth:`300px`}"
                />
            </v-row>
            <div v-if="searchResults.length > 0" class="pa-md-1">
                Close Matches:
                <v-row>
                    <v-col v-for="channel of searchResults"
                        :key="channel.display_name"
                        cols="auto"
                    >
                        <channel-card
                            :displayName="channel.display_name"
                            :handle="channel.broadcaster_login"
                            :img="channel.thumbnail_url"
                            :dimensions="{height:`150px`, minWidth:`200px`, maxWidth:`75px`}"
                        />
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>
<script>
import axios from "axios"
import ChannelCard from "./ChannelCard"

export default {
    name: "SearchChannel",
    components: {
        ChannelCard,
    },
    data: () => ({
        searchHandle: "",
        searchResults: [],
        matchFound: false,
        perfectMatch: {},
    }),
    props: { 
        creds: Object,
    },
    methods:{
        searchChannel(userName){
            if(!userName){
                console.error("No username provided");
                this.resetData();
                return;
            }
            const options = {
                method: 'GET',
                url: 'https://api.twitch.tv/helix/search/channels',
                params: { query: userName },
                headers: {
                    'client-id': process.env.VUE_APP_CLIENTID,
                    Authorization: `${this.creds.token_type} ${this.creds.access_token}`
                }
            }

            axios.request(options)
            .then((response)=> {
                this.searchResults = response.data.data;
                
                const pMIndex = this.searchResults.findIndex(channel => channel.display_name.toLowerCase() === this.searchHandle.toLowerCase())
                if (pMIndex > -1){
                    this.perfectMatch = this.searchResults.splice(pMIndex, 1)[0];
                    this.matchFound = true
                } else {
                    this.perfectMatch = {};
                    this.matchFound = false;
                }
            });
        },
        resetData(){
            this.searchHandle = "";
            this.searchResults = [];
            this.matchFound = false;
            this.perfectMatch = {};
        }
    }
}
</script>
