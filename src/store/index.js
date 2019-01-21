import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  time: null
}

const mutations = {
  setTime (state, payload) {
    state.time = payload
  }
}

export default new Vuex.Store({
  state,
  mutations
})