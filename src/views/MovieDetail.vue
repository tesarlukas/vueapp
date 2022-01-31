<template>
  <div>{{ getMovie.Title }}</div>
  <div>{{ getMovie.Year }}</div>
  <div>{{ getMovie.Rated }}</div>
  <div>{{ getMovie.Released }}</div>
  <div>{{ getMovie.Runtime }}</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MovieDetail',
  computed: {
    ...mapGetters({
      getMovie: 'GET_MOVIE',
    }),
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
