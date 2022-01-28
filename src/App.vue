<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/movies">Movies</router-link>
  </div>
  <router-view />
</template>

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
