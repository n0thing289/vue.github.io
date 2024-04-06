// // 引入Vue, 因为使用Vuex插件的时候需要Vue
// import Vue from 'vue'
// // 引入Vuex
// import Vuex from 'vuex'
// //使用Vuex插件
// Vue.use(Vuex)
// //创建store对象, 是vuex插件的核心对象,管理三个对象
// const store = new Vuex.Store({
//     actions: {//负责执行某个行为的对象

//     },
//     mutations: {//负责更新的对象

//     },
//     state: {//状态对象

//     }
// })
// //导出store
// export default store

//vuex4写法, 原理都是vm以及所有的vc对象上都会多一个新的属性: $store
import { createStore } from 'vuex'
const store = createStore({
    actions:{},
    mutations:{},
    state:{//就是数据对象，具有响应式
        //num:0
    }
})
export default store