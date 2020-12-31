require('./bootstrap');
import Vue from 'vue'
import router from './router'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios';
import Swal from 'sweetalert2'

window.Swal = Swal;
window.Vue = require('vue');
// Server Path 
window.baseURL = 'http://localhost:8000/api';
window.serverPath = 'http://localhost:8000';

// Pagination
Vue.component('pagination', require('laravel-vue-pagination'));

window.axios = axios;
Vue.use(BootstrapVue)

// Register Components
Vue.component('app-component', require('./components/AppComponent.vue').default);


const app = new Vue({
  router,
  el: '#app',
});