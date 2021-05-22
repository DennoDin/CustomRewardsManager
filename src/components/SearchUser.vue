<template>
    <div>
        <v-card>
            <v-card-title>Search for Twitch ID</v-card-title>
            <v-text-field v-model="searchHandle" input label="Enter User ID"/>
            <v-btn v-on:click="searchUser(searchHandle)">Search</v-btn>
        </v-card>
    </div>
</template>
<script>
import axios from "axios"

export default {
    name: "SearchUser",
    data: () => ({
        searchHandle: "",
        searchResults: [],
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
                }
            });
        }
    }
}
</script>
