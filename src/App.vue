<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VFooter from './components/layout/Footer'
import VHeader from './components/layout/Header'
export default {
  name: 'App',
  components: {
    VFooter,
    VHeader

  }
}
</script>

<style lang="scss">

@import './scss/main.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.results{
  margin-top: 40px;
}
.is-active {
  border: 3px solid #23d160;
}
</style>
