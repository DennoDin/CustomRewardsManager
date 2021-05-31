<template>
  <div class="home">
    <login v-if=!isLoggedIn />
    <search-channel v-if=isLoggedIn />
  </div>
</template>

<script>
import Login from '../components/Login.vue'
import SearchChannel from '../components/SearchChannel.vue'

export default {
  name: 'Home',
  components: {
    Login,
    SearchChannel
  },
  computed: {
    isLoggedIn() { 
      return this.$store.state.isLoggedIn;
      }
  }
}
</script>
