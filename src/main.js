import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

import './assets/css/main.css'
import './assets/css/media-queries.css'


Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

import helper from '@/helpers/index.js'

Vue.config.ignoredElements = [/^ion-/]

Vue.config.productionTip = false

new Vue({
    router,
    store,
    helper,
    render: h => h(App)
}).$mount('#app')