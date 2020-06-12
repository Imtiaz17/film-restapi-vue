import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VuexPersist from 'vuex-persist'
import router from '../Router/router'
Vue.use(Vuex)
import { getToken, setToken, removeToken } from '../utils/auth';

const vuexLocalStorage = new VuexPersist({
    key: 'vuex',
    storage: window.localStorage,
    reducer: (state) => ({
        user: state.user,
        loggedIn: state.loggedIn,
    })
})

export default new Vuex.Store({

    state: {
        user: null,
        loggedIn: !!getToken(),

    },
    getters: {
        user: state => state.user,
        loggedIn: state => state.loggedIn,
    },

    mutations: {
        SAVE_USER(state, data) {
            state.loggedIn = true
            state.user = data
        },
        REMOVE_USER(state) {
            state.loggedIn = false
            state.user = null
        }
    },
    plugins: [vuexLocalStorage.plugin],
    actions: {
        async saveToken({ commit, dispatch }, { token }) {
            setToken(token)
            await axios.get('api/user')
                .then(res => {
                    commit('SAVE_USER', res.data)
                })
            router.push('/films')
        },
        removeuser({ commit, dispatch }) {
            removeToken()
            commit('REMOVE_USER')
        }
    }
})
