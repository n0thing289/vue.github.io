import { createStore } from 'vuex'
const store = createStore({
    actions: {},
    mutations: {},
    state:{
        data: {
            temperature: '--',
            city: '--',
            humidity: '--',
            windpower: '--',
            weather: '',
        },
        //apikey
        apiKey: "56d3b612de58cd35eb39d10ee6340c50",
        //icons
        icons: [//多云, 晴, 雾,阴,小雨,中雨
            {
                name: '多云',
                className: 'qi-101'
            },
            {
                name: '晴',
                className: 'qi-100'
            },
            {
                name: '雾',
                className: 'qi-501'
            },
            {
                name: '阴',
                className: 'qi-104'
            },
            {
                name: '小雨',
                className: 'qi-305'
            },
            {
                name: '中雨',
                className: 'qi-306'
            }
        ]
    },
    getters:{}
})
export default store