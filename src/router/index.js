import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Movies from '../views/Movies.vue';

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
