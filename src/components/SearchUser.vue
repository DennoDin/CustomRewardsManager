<template>
    <div class="pa-md-5">
        <v-card class="pa-md-5">
            <v-card-title>Search for Twitch ID</v-card-title>
            <v-text-field v-model="searchHandle" input label="Enter User ID"/>
            <v-btn v-on:click="searchUser(searchHandle)">Search</v-btn>
        </v-card>
        <v-container fluid pa-md-5>
            <v-row v-if="matchFound" class="pa-md-5">
                <v-card :href="`https://twitch.tv/${perfectMatch.display_name}`">
                    <v-card-title>
                        {{perfectMatch.display_name}}
                    </v-card-title>
                    <v-card-subtitle>
                        {{perfectMatch.isLive ? `Live! ${perfectMatch.game_name} : ${perfectMatch.title}` : "Offline"}}
                    </v-card-subtitle>
                    <v-img contain :src="perfectMatch.thumbnail_url" max-width="200px" position="25% 25%">
                    </v-img>
                </v-card>
            </v-row>
            <div v-if="searchResults.length > 0" class="pa-md-1">
                Close Matches:
                <v-row>
                    <v-col v-for="channel of searchResults" :key="channel.display_name" cols="auto">
                        <v-card height="150px" min-width="200px">
                            <v-card-title v-text="channel.display_name"></v-card-title>
                            <v-img :src="channel.thumbnail_url" max-width="75px"></v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>
<script>
import axios from "axios"

export default {
    name: "SearchUser",
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
        searchUser(userName){
            if(!userName){
                console.error("No username provided");
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
        }
    }
}
</script>
