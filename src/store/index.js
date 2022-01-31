import { createStore } from 'vuex';

export default createStore({
  state: {
    movie: {},
    user: {},
    ownMovies: [],
  },
  mutations: {
    SET_MOVIE(state, movie) {
      state.movie = movie;
    },
    SET_USER(state, user) {
      state.user = user;
      console.log(user);
    },
    ADD_OWNMOVIE(state, movie) {
      if (state.ownMovies.find((e) => e.imdbID === movie.imdbID)) return -1;
      state.ownMovies.push(movie);
      console.log(state.ownMovies);
    },
    REMOVE_OWNMOVIE(state, movie) {
      if (state.ownMovies.find((e) => e.imdbID === movie.imdbID)) {
        state.ownMovies.splice(state.ownMovies.indexOf(movie), 1);
      } else return -1;
    },
  },
  actions: {
    setMovie({ commit }, movie) {
      commit('SET_MOVIE', movie);
    },
    setUser({ commit }, user) {
      commit('SET_USER', user);
    },
    addOwnMovie({ commit }, movie) {
      commit('ADD_OWNMOVIE', movie);
    },
    removeOwnMovie({ commit }, movie) {
      commit('REMOVE_OWNMOVIE', movie);
    },
  },
  getters: {
    GET_MOVIE(state) {
      return state.movie;
    },
    GET_USER(state) {
      return state.user;
    },
    GET_OWNMOVIES(state) {
      return state.ownMovies;
    },
  },
});
