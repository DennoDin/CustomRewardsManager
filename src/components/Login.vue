<template>
  <v-container>
    <v-card>
      <v-card-title> Login </v-card-title>
      <v-card-subtitle>
        Please Login to access Twitch API features
      </v-card-subtitle>
      <v-btn color="primary" :href="twitchOAuthRegisterURL">Twitch Login</v-btn>
    </v-card>
  </v-container>
</template>

<script>
// import axios from "axios";

export default {
  name: "Login",

  mounted: async function () {
    const SCOPES = ["openid", "channel:manage:redemptions"];
    const REDIRECT = "http://localhost:8080/redirect";
    const RESPONSE_TYPE = "token+id_token";
    this.twitchOAuthRegisterURL = `https://id.twitch.tv/oauth2/authorize?client_id=${
      process.env.VUE_APP_CLIENTID
    }&redirect_uri=${REDIRECT}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join(
      "%20"
    )}`;

    // console.log("mounted!");
    // const result = await axios.get(`/api`);
    // console.log(result);
  },
  data: () => ({
    twitchOAuthRegisterURL: "",
    fragmentResults: {},
  }),
  methods: {},
};
</script>
