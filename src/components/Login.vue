<template>
  <v-container>
      <v-btn v-on:click="oauthLogin">
          Login!
      </v-btn>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",

  mounted: async function () {

    console.log("mounted!");
    const result = await axios.get(`/api`);

    console.log(result);
  },

  data: () => ({
    
  }),
  methods:{
      oauthLogin: function(event){
          const options = {
              method: 'GET',
              url: 'https://id.twitch.tv/oauth2/authorize',
              headers: {
                  "Access-Control-Allow-Origin": "http://localhost:8080"
              },
              params: {
                  client_id: process.env.VUE_APP_CLIENTID || "",
                  redirect_uri: "http://localhost:8080",
                  response_type: "id_token",
                  scope: "open_id",
                  claims: ""
              }
          }
          
          axios.request(options)

          //start with authorization URL
          //add client id
      }
  }
};
</script>
