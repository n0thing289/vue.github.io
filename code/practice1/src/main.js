import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as icons from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import router from './router/index.js'

import store from './store/store.js'

const app = createApp(App)
app.use(ElementPlus, {locale:zhCn})
for (const [key, component] of Object.entries(icons)) {
    app.component(key, component)
}
app.use(router)
app.use(store)
app.mount('#app')
