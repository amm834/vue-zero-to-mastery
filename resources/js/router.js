import Vue from 'vue';
import VueRouter from 'vue-router';
import Test from './components/Test'
import CategoriesComponent from './components/admin/CategoriesComponent';

Vue.use(VueRouter);

const routes = [{
 path: '/categories',
 component: CategoriesComponent
},
];

const router = new VueRouter({
 routes,
 mode: 'history'
});

export default router;