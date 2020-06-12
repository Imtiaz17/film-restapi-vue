require('./bootstrap');

import Vue from 'vue'

import store from './components/store'

window.EventBus= new Vue();

Vue.component('AppHome', require('./components/AppHome.vue').default);
import router from './components/Router/router.js'
const app = new Vue({
    el: '#app',
    router,
    store
});