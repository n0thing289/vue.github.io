import { createStore } from 'vuex'
const store = createStore({
    actions: {},
    mutations: {},
    state: {
        forms: [
            {
                name: 'admin',
                sex: '男',
                age: 18,
                birth: '2023-1-1',
                isSingle: '否',
                interest: ['看美女'],
                receiveOrtherLand: '接受',
                desc: '我是猛1'
            }
        ]
    },
    getters: {}
})
export default store