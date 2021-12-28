import Vuex from 'vuex'
import Vue from 'vue'
import trackService from '@/services/track'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    track: {}
  },
  getters: {
    getTitleTrack (state, getters) {
      if (!state.track.name) { return '' }
      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  },
  mutations: {
    setTrack (state, track) {
      state.track = track
    }
  },
  actions: {
    getTrackById (context, payload) {
      return trackService.getById(payload.id).then(res => {
        context.commit('setTrack', res)
        return res
      })
    }
  }
})

export default store
