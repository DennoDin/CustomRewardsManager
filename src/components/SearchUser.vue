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
export default {
    name: "SearchUser",
    data: () => ({
        searchHandle: ""
    }),
    props: { 
        creds: Object,
    },
    methods:{
        searchUser(userName){
            console.log(userName)
        }
    }
}
</script>
