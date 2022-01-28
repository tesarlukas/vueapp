<template>
  <div>{{ getMovie.Title }}</div>
  <div>{{ getMovie.Year }}</div>
  <div>{{ getMovie.Rated }}</div>
  <div>{{ getMovie.Released }}</div>
  <div>{{ getMovie.Runtime }}</div>
</template>

<script>
export default {
  name: 'MovieDetail',
  computed: {
    getMovie() {
      return this.$store.getters.GET_MOVIE;
    },
  },
};
</script>

<style lang="scss" scoped></style>
