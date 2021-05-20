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
    this.twitchOAuthRegisterURL = `https://id.twitch.tv/oauth2/authorize?client_id=${process.env.VUE_APP_CLIENTID}&redirect_uri=http://localhost:8080&response_type=token+id_token&scope=openid`

    // console.log("mounted!");
    // const result = await axios.get(`/api`);
    // console.log(result);

    const urlFragment = new URLSearchParams(window.location.hash.substring(1));
    for(let pair of urlFragment.entries()) {
      this.fragmentResults[pair[0]] =  pair[1];
    }
    this.updateCreds(this.fragmentResults)
  },
  props:['updateCreds'],
  data: () => ({
    twitchOAuthRegisterURL: "",
    fragmentResults: {},
  }),
  methods:{
  }
};
</script>
