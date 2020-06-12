import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../Router/router'
Vue.use(Vuex)
import { getToken, setToken, removeToken } from '../utils/auth';


export default new Vuex.Store({

    state: {
        user: null,
        token: !!getToken(),

    },
    getters: {
        id: state => state.id,
        user: state => state.user,
        token: state => state.token,
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
    },
    actions: {
        saveToken({ commit, dispatch }, { token }) {
           	setToken(token)
        },
    }
})
