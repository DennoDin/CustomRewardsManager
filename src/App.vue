<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <span>TSTKT</span>
    </v-app-bar>

    <v-main>
      <div tag="Login" v-if=!authenticated>
        <Login/>
      </div>
      <div v-if=authenticated>
        <Search-User/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Login from './components/Login';
import SearchUser from './components/SearchUser'

export default {
  name: 'App',

  components: {
    Login,
    SearchUser,
  },

  data: () => ({
    authenticated: false,
  }),
};
</script>
