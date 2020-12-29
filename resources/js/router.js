import Vue from 'vue';
import VueRouter from 'vue-router';
import Test from './components/Test'

Vue.use(VueRouter);

const routes = [
  {
  path: '/test',
  component: Test
},
];

const router = new VueRouter({
  routes 
});

export default router;