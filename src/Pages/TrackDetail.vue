<template>
  <div class="container" v-if="track.id && track">
    <v-loader v-show="isLoading"></v-loader>
    <div class="columns">
      <div class="column is-4  has-text-centered">
        <figure class="media-left">
          <p class="imag">
            <img :src="track.album.images[0].url" alt="">
          </p>
          <p class="button-bar">
            <a class="button is-primary is-large">
              <span class="icon" @click="selectTrack">Play</span>
            </a>
          </p>
        </figure>
      </div>
      <div class="column is-8">
        <div class="panel">
          <div class="panel-heading">
            <h1 class="title">{{getTitleTrack}}</h1>
          </div>
          <div class="panel-block">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <ul v-for="(t, k) in track" :key="k">
                    <li>
                      <strong>{{ k }}:&nbsp;</strong>
                      <span> {{t}}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <nav class="level">
                <div class="level-left">
                  <a  class="level-item"></a>
                </div>
              </nav>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VLoader from '@/components/shared/Loader'
import trackMixin from '@/mixins/track.js'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  mixins: [trackMixin],
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    VLoader
  },
  computed: {
    ...mapState(['track']),
    ...mapGetters(['getTitleTrack'])
  },
  created () {
    const id = this.$route.params.id
    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id }).then(() => {
        console.log('track loaded....')
      })
    }
  },
  methods: {
    ...mapActions(['getTrackById'])
  },
  watch: {
    track () {
      if (this.track === {}) {
        this.isLoading = true
      } else {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
  .columns{
    margin:20px;
  }
  .button-bar{
    margin-top:20px;
  }
</style>
