<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <div class="nav-item">
              <strong>📻 PLatzi Music</strong>
            </div>
            <div class="nav-right nav-menu">
              <a  class="nav-item" @click="selectLang('en')">Ingles</a>
              <a  class="nav-item" @click="selectLang('es')">Español</a>
              <router-link class="nav-item" to="/">{{ $t('search') }}</router-link>
              <router-link class="nav-item" to="about">{{ $t('about') }}</router-link>
              <router-link class="nav-item" to="register">Sign Up</router-link>
          </div>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="tittle">PLatzi Music</h1>
        <h2 class="subtitle">Canciones que estan Vue-Nisimas</h2>
        <v-player></v-player>
      </div>
    </div>
  </section>
</template>

<script>
import VPlayer from '../Player.vue'
export default {
  components: {
    VPlayer
  },
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>
  .nav-left {
    display: flex;
    justify-content: space-between;
  }
  .nav-item{
    margin: 0px 25px;
  }
</style>
