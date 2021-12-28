<template>
  <div v-if="track && track.album"  class="content">
    <p>
      <img :src="track.album.images[0].url" alt="">
    </p>
    <p>
      <strong>{{ track.name }}</strong>
      <small> [{{ track.duration_ms | ms-to-mm}}]</small>
    </p>
    <p>
      <audio controls :src="track.preview_url"></audio>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['track'])
  }
}
</script>

<style scoped>
  img {
    width: 240px;
    border-radius: 50%;
  }
</style>
