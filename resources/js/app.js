require('./bootstrap');
import Vue from 'vue'
import store from './components/store'
import { getToken, setToken, removeToken } from './components/utils/auth';
window.axios = require('axios');
axios.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        console.log(error);
        Promise.reject(error);
    }
);

Vue.component('AppHome', require('./components/AppHome.vue').default);
import router from './components/Router/router.js'
const app = new Vue({
    el: '#app',
    router,
    store
});
