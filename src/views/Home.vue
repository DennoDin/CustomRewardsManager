<template>
  <div class="home">
    <login/>
    <search-channel/>
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
  }
}
</script>
