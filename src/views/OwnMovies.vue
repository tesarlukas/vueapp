<template>
  <div class="own-movies">
    <div>Your movies</div>
    <MovieListing :movies="getOwnMovies" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MovieListing from '../components/MovieListing.vue';

export default {
  name: 'OwnMovies',
  components: {
    MovieListing,
  },
  computed: {
    ...mapGetters({
      getOwnMovies: 'GET_OWNMOVIES',
    }),
  },
};
</script>

<style></style>
