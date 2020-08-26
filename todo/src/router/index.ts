import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import itemList from '@/views/ItemList.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/:status?',
    name: 'item-list',
    component: itemList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
