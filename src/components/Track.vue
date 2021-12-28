<template>
  <div class="card" v-if="track && track.album">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="track.album.images[0].url" alt="">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
            <p class="title is-6">
              <strong>{{track.name}}</strong>
            </p>
            <p class="subtitle is-6">
              {{track.artists[0].name}}
            </p>
          </div>
           <div class="content">
        <small>{{track.duration_ms | ms-to-mm}}</small>
        <nav class="level">
          <div class="level-left">
            <button  class="level-item button is-primary"> <span @click="selectTrack" class="icon is-small"> Play</span></button>
            <button class="level-item is-warning button"> <span @click="goToTrack(track.id)" class="icon is-small"> Mundo</span> </button>
          </div>
        </nav>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import trackMixin from '@/mixins/track.js'
export default {
  mixins: [trackMixin],
  name: 'Track',
  props: {
    track: Object
  },
  methods: {
    goToTrack (id) {
      this.$router.push({ name: 'track', params: { id } })
    }
  }
}
</script>

<style scoped>
  .level-item{
    margin: 0px 20px;
  }
</style>
