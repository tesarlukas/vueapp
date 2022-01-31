import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Movies from '../views/Movies.vue';
import MovieDetail from '../views/MovieDetail.vue';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies,
  },
  {
    path: '/movieDetail',
    name: 'MovieDetail',
    component: MovieDetail,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
