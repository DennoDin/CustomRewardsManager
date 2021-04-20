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
          console.log(event, " oauthLogin");
          //build authentication request URL
          axios.request({
              url: "/oauth2/authorize",
              method: "get",
              baseUrl: "https://id.twitch.tv",
              auth: {
                  username: process.env.VUE_APP_CLIENTID || "", 
                  password: process.env.VUE_APP_CLIENTSECRET || "",
              },
              data: {
                  "grant_type": "id_and_access_token",
                  "scope": "openid"
              }
          }).then(response => {
              console.log("response", response);
          });

          //start with authorization URL
          //add client id
      }
  }
};
</script>
