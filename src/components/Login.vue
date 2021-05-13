<template>
  <v-container>
      <v-btn :href=twitchOAuthRegisterURL>Login A Href</v-btn>
  </v-container>
</template>

<script>
// import axios from "axios";

export default {
  name: "Login",

  mounted: async function () {
    this.twitchOAuthRegisterURL = `https://id.twitch.tv/oauth2/authorize?client_id=${process.env.VUE_APP_CLIENTID}&redirect_uri=http://localhost:8080&response_type=id_token&scope=openid`

    // console.log("mounted!");
    // const result = await axios.get(`/api`);
    // console.log(result);

    this.token = window.location.hash.substring(10);
  },

  data: () => ({
    twitchOAuthRegisterURL: "",
    token: "",
  }),
  methods:{
  }
};
</script>
