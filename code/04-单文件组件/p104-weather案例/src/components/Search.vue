<template>
    <div class="search">
        <div class="in">
            <input type="text" v-model.trim="cityName" @focus="cityName = ''" @keydown.enter="search()">
            <img src="/fdj.png" @click="search()"></img>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import mitter from './eventBus.js'
export default {
    name: "Search",
    data() {
        return {
            cityName: '请输入城市名字',
            originWeatherObj: ''
        }
    },
    props: ['apiKey'],
    methods: {
        async getCityCode() {
            if (this.cityName === '') return
            let adcode = ''
            await axios.get('https://restapi.amap.com/v3/config/district', {
                params: {
                    key: this.apiKey,
                    keywords: this.cityName,
                }
            }).then(
                response => {
                    // console.log(response.data);
                    if (response.data.status === "1") {
                        adcode = response.data.districts[0].adcode
                    }
                }
            )
            return new Promise((resolve, reject) => {
                resolve(adcode)
            })
        },
        async search() {
            //获取adcode
            let adcode = await this.getCityCode()
            if (adcode === undefined) return
            //根据adcide查询天气
            await axios.get('https://restapi.amap.com/v3/weather/weatherInfo', {
                params: {
                    key: this.apiKey,
                    city: adcode,
                    extensions: 'base',
                    output: 'JSON'
                }
            }).then(
                response => {
                    // console.log(response.data);
                    if (response.data.status === "1") {
                        this.originWeatherObj = response.data.lives[0]
                        mitter.emit("getWeatherData", this.originWeatherObj)
                    }
                }
            )
        }
    }
}
</script>

<style scoped>
.search {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.in {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}

/* 输入框 */
input {
    /* 胶囊样式的方法就是 把圆角值设置成高度的一半 */
    width: 230px;
    height: 40px;
    border: 0px;
    border-radius: 25px;
    font-size: larger;
    /* 解决输入框光标太边 text-indent*/
    text-indent: 16px;

    margin-right: 14px;


}

/* 图片 */
img {
    width: 43px;
    height: 43px;
    border: 0px;
    border-radius: 100%;
}

img:hover {
    /* drop-shadow 滤镜可以给元素或图片非透明区域添加投影 
    将背景透明的 PNG 图标施加一个不带模糊的投影，就等同于生成了另外一个颜色的图标 */
    cursor: pointer;
    opacity: 0.6;
    /* filter: drop-shadow(8px 8px 4px red) */
}
</style>
