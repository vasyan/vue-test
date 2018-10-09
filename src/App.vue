<template>
  <div id="app" class="pt-16">
    <AppHeader></AppHeader>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/css/main.css'
import AppHeader from './components/Header.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
