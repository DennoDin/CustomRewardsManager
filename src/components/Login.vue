<template>
  <v-container>
    <v-card>
      <v-card-title>
        Login
      </v-card-title>
      <v-card-subtitle>
        Please Login to access Twitch API features
      </v-card-subtitle>
      <v-btn color="primary" :href=twitchOAuthRegisterURL>Twitch Login</v-btn>
    </v-card>
  </v-container>
</template>

<script>
// import axios from "axios";

export default {
  name: "Login",

  mounted: async function () {
    const SCOPES = ["openid", "channel:manage:redemptions"];
    const REDIRECT = "http://localhost:8080/redirect"
    const RESPONSE_TYPE = "token+id_token"
    this.twitchOAuthRegisterURL = `https://id.twitch.tv/oauth2/authorize?client_id=${process.env.VUE_APP_CLIENTID}&redirect_uri=${REDIRECT}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join("%20")}`

    // console.log("mounted!");
    // const result = await axios.get(`/api`);
    // console.log(result);

    const urlFragment = new URLSearchParams(window.location.hash.substring(1));
    for(let pair of urlFragment.entries()) {
      this.fragmentResults[pair[0]] =  pair[1];
    }
    if(this.fragmentResults.token_type && this.fragmentResults.token_type === 'bearer'){
      this.fragmentResults.token_type = "Bearer"
    }
    if(Object.keys(this.fragmentResults).length){
      this.updateCredentials(this.fragmentResults)
    }
  },
  data: () => ({
    twitchOAuthRegisterURL: "",
    fragmentResults: {},
  }),
  methods:{
    updateCredentials(returnedCreds){
      this.$store.commit('saveCredentials', returnedCreds)
      this.$store.commit('toggleLogin')
    }
  }
};
</script>
