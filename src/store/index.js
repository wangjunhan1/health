import Vue from 'vue'
import Vuex from 'Vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
  /*mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }*/
})
