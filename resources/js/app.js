require('./bootstrap');
import Vue from 'vue'
import router from './router'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import $ from "jquery";

window.Vue = require('vue');
Vue.use(BootstrapVue)

// Register Components
Vue.component('app-component', require('./components/AppComponent.vue').default);


const app = new Vue({
  router,
  el: '#app',
});