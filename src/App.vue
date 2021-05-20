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
      <div tag="Login" v-if=!isAuthenticated>
        <Login v-bind:updateCreds="updateCreds"/>
      </div>
      <div v-if=isAuthenticated>
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
    isAuthenticated: false,
    credentials: {},  //store credentials in cookies at a later point
  }),
  methods:{
    updateCreds(returnedCredentials){
      if(Object.keys(returnedCredentials).length > 0){
        Object.assign(this.credentials, returnedCredentials)
        this.isAuthenticated = true;
      }
    }
  }
};
</script>
