<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <span>TSTKT</span>
    </v-app-bar>

    <v-main>
      <div tag="Login" v-if="!isLoggedIn">
        <Login />
      </div>
      <div v-if="isLoggedIn">
        <Search-Channel />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Login from "./components/Login";
import SearchChannel from "./components/SearchChannel";

export default {
  name: "App",

  components: {
    Login,
    SearchChannel,
  },

  data: () => ({}),
  methods: {},
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
};
</script>
