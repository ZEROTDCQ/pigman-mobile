import Vuex from 'vuex'

const state = {
  tuijian: [],
  member: [],
  activities: []
}

const mutations = {
  setActivityData(state, { type, data }) {
    state[type] = data;
  }
}
export default new Vuex.Store({
  state,
  mutations
});