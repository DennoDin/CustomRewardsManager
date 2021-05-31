<template>
  <div class="home">
    <login/>
    <search-channel/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '../components/Login.vue'
import SearchChannel from '../components/SearchChannel.vue'

export default {
  name: 'Home',
  components: {
    Login,
    SearchChannel
  }
}
</script>
