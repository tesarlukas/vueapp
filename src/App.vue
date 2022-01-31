<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/movies">Movies</router-link> |
    <router-link v-if="getUser.username !== 'admin'" to="/login"
      >Login</router-link
    >
    <router-link v-if="getUser.username === 'admin'" to="/ownMovies"
      >Your movies</router-link
    >
  </div>
  <router-view />
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters({ getUser: 'GET_USER' }),
  },
};
</script>

<style lang="scss">
@import './assets/styles/global.scss';

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-secondary);
}

#nav {
  width: 100%;
  background-color: var(--color-secondary);
  display: flex;
  padding: 20px 30px;
  box-sizing: border-box;
}

#nav a {
  font-weight: bold;
  color: var(--color-primary);
  text-decoration: none;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: var(--color-primary);
  text-decoration: underline;
}
</style>
