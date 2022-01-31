<template>
  <div class="movies">
    <div
      @click="selectMovie(movie)"
      v-for="(movie, i) in movies"
      :key="i"
      class="movie"
    >
      <img :src="movie.Images[0]" alt="" class="image" />
      <div class="title">{{ movie.Title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieListing',
  props: {
    movies: [],
  },
  methods: {
    selectMovie(movie) {
      this.$store.dispatch('setMovie', movie);
      this.$router.push('/movieDetail');
    },
  },
};
</script>

<style lang="scss">
.movies {
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  .movie {
    display: flex;
    margin: auto;
    width: calc(25% - 20px);
    flex-direction: column;
    margin: 10px;
    border-radius: 10px;
    background-color: var(--color-secondary);

    .image {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }

    .title {
      text-align: left;
      font-size: 35px;
      padding: 20px;
      color: white;
    }
  }
}
</style>
