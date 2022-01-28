import { createStore } from 'vuex';

export default createStore({
  state: {
    movie: {},
  },
  mutations: {
    SET_MOVIE(state, movie) {
      state.movie = movie;
    },
  },
  actions: {
    setMovie({ commit }, movie) {
      commit('SET_MOVIE', movie);
    },
  },
  getters: {
    GET_MOVIE(state) {
      return state.movie;
    },
  },
});
