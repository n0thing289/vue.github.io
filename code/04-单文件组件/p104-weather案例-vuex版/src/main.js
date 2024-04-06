import { createApp } from 'vue'
import App from './App.vue'
import 'qweather-icons/font/qweather-icons.css'//导入和风样式

import store from './vuex/store.js'
let app = createApp(App)
app.use(store)
app.mount('#app')
