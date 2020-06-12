require('./bootstrap');

window.Vue = require('vue');

window.EventBus= new Vue();

Vue.component('AppHome', require('./components/AppHome.vue').default);
import router from './components/Router/router.js'
const app = new Vue({
    el: '#app',
    router
});