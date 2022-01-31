<template>
  <div class="movies-view">
    <div class="header">Listed movies</div>
    <MovieListing :movies="this.movies" />
  </div>
</template>

<script>
import movieList from '../assets/movies.json';
import MovieListing from '../components/MovieListing.vue';

export default {
  name: 'Movies',
  data() {
    return {
      movies: movieList,
    };
  },
  components: {
    MovieListing,
  },
  methods: {
    selectMovie(movie) {
      this.$store.dispatch('setMovie', movie);
      this.$router.push('/movieDetail');
    },
  },
};
</script>

<style scoped lang="scss">
.movies-view {
  width: 100%;
  display: flex;
  flex-direction: column;

  .header {
    text-align: left;
    font-size: 40px;
    width: 80%;
    margin: 20px auto 0 auto;
    padding: 10px;
  }
}
</style>
