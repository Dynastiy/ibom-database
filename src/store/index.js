import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';
// import helpers from '@/helpers/index.js'

Vue.use(Vuex);

const getDefaultState = () => {
    return {
        token: '',
        user: {},
        fully_onboarded: '',
    };
};

export default new Vuex.Store({
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        isLoggedIn: state => {
            return state.token;
        },
        getUser: state => {
            return state.user;
        },
        getOnboarding: state => {
            return state.fully_onboarded
        }
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USER: (state, user) => {
            state.user = user;
        },
        SET_ONBOARDING: (state, fully_onboarded) => {
            state.fully_onboarded = fully_onboarded;
        },
        RESET: state => {
            Object.assign(state, getDefaultState());
        }
    },
    actions: {
        login: ({ commit }, { token, user, fully_onboarded }) => {
            commit('SET_TOKEN', token);
            commit('SET_USER', user);
            commit('SET_ONBOARDING', fully_onboarded)

            // set auth header
            Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },
        logout: ({ commit }) => {
            commit('RESET', '');
        }
    }
});