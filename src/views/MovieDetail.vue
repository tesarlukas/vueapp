<template>
  <div class="movie-detail">
    <div class="info">
      <div class="title row">{{ getMovie.Title }}</div>
      <div class="row">Released: {{ getMovie.Released }}</div>
      <div class="row">Runtime: {{ getMovie.Runtime }}</div>
      <div class="row">Genres: {{ getMovie.Genre }}</div>
      <div class="row">Director: {{ getMovie.Director }}</div>
      <div class="row">Writers: {{ getMovie.Writer }}</div>
      <div class="row">Country: {{ getMovie.Country }}</div>
      <div class="plot row">Plot: {{ getMovie.Plot }}</div>
    </div>
    <div class="gallery">
      <img v-for="(image, i) in getMovie.Images" :key="i" :src="image" alt="" />
    </div>
  </div>
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
};
</script>

<style lang="scss" scoped>
.movie-detail {
  height: 100%;
  width: 80%;
  margin: 120px auto;
  display: flex;
}

.info {
  width: 50%;
  background-color: var(--color-secondary);
  color: #ffffff;
  padding: 40px;
  box-sizing: border-box;
  font-size: 20px;
}

.row {
  display: flex;
}

.info .row {
  text-align: left;
}

.plot {
  margin-top: 20px;
}

.gallery {
  width: 50%;
  display: flex;
  flex-wrap: wrap;

  img {
    width: 50%;
    height: 50%;
    object-fit: cover;
  }
}
</style>
