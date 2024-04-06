import { createApp } from 'vue'

import App from './App.vue'

import store from './vuex/store.js'

const vm = createApp(App)
vm.use(store)
vm.mount('#app')
