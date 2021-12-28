<template>
  <main>
    <transition name="move">
      <v-notification v-show="showNotification"> <p slot="body"> No se encontraron resultados</p> </v-notification>
    </transition>
    <transition name="move">
      <v-loader v-show="isLoading"></v-loader>
    </transition>
    <section v-show="!isLoading" class="section">
      <nav class="nav ">
        <div class="container is-flex">
          <input @keyup.enter="search" v-model="searchQuery" type="text" class="input is-large" placeholder="Buscar Canciones">
          <a  @click="search" class="button is-info is-large">Buscar</a>
          <a  class="button is-danger is-large">&times;</a>
        </div>
      </nav>
      <div class="container results ">
        <div class="columns is-multiline ">
          <div class="column is-full">
            <p class="is-size-7">{{searchMessage}}</p>
          </div>
          <div class="column is-4" v-for="track in tracks" :key="track.id">
            <v-track v-blur="track.preview_url" @select="selectTrack" :track="track" :class="{ 'is-active': track.id === selectedTrack }"></v-track>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import trackService from '@/services/track'
import VTrack from '@/components/Track'
import VLoader from '@/components/shared/Loader'
import VNotification from '@/components/shared/Notification'
export default {
  name: 'App',
  components: {
    VTrack,
    VLoader,
    VNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },
  methods: {
    search () {
      if (this.searchQuery === '') {
        return
      }
      this.isLoading = true
      trackService.search(this.searchQuery).then(resp => {
        this.tracks = resp.tracks.items
        this.showNotification = resp.tracks.total === 0
        this.isLoading = false
      })
    },
    selectTrack (id) {
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.results{
  margin-top: 40px;
}
.is-active {
  border: 3px solid #23d160;
}
</style>
