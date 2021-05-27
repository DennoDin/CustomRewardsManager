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
      <div tag="Login" v-if=!isLoggedIn>
        <Login v-bind:updateCreds="updateCreds"/>
      </div>
      <div v-if=isLoggedIn>
        <Search-Channel v-bind:creds="credentials"/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Login from './components/Login';
import SearchChannel from './components/SearchChannel'

export default {
  name: 'App',

  components: {
    Login,
    SearchChannel,
  },

  data: () => ({
    isAuthenticated: false,
    credentials: {},  //store credentials in cookies at a later point
  }),
  methods:{
    updateCreds(returnedCredentials){
      if(Object.keys(returnedCredentials).length > 0){
        Object.assign(this.credentials, returnedCredentials)
        this.isAuthenticated = true;
      }
      if(this.credentials.token_type === "bearer"){
        this.credentials.token_type = "Bearer"
      }
    }
  },
  computed:{
    isLoggedIn(){
      return this.$store.state.isLoggedIn
    }
  }
};
</script>
