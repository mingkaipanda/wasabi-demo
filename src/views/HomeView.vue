<template>
  <NavBar />
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" :style="{backgroundColor: this.$store.backgroundColor}"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/rates/shared/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBar
  }
}
</script>
