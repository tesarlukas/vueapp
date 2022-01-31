import { createStore } from 'vuex';

export default createStore({
  state: {
    movie: {},
    user: {},
  },
  mutations: {
    SET_MOVIE(state, movie) {
      state.movie = movie;
    },
    SET_USER(state, user) {
      state.user = user;
      console.log(user);
    },
  },
  actions: {
    setMovie({ commit }, movie) {
      commit('SET_MOVIE', movie);
    },
    setUser({ commit }, user) {
      commit('SET_USER', user);
    },
  },
  getters: {
    GET_MOVIE(state) {
      return state.movie;
    },
    GET_USER(state) {
      return state.user;
    },
  },
});
