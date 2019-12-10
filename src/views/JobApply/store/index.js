import Vuex from 'vuex'

const state = {
  animationName: 'first-in'
}

const mutations = {
  setAnimationName(state, name) {
    state.animationName = name;
    console.log(name);
  }
}
export default new Vuex.Store({
  state,
  mutations
});