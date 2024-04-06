<template>
    <div class="weather">
        <div class="col">
            <i class="col-weather-icon" :class="getWeatherIconClass"></i>
            <span class="col-span-1">{{ temperature }}°C {{ weather }}</span>
            <span class="col-span-2">{{ city }}</span>
        </div>

        <div class="row">
            <div class="row1">
                <i class="qi-2120"></i>
                <div>
                    <span class="row1-span-1">{{ humidity }}%</span> <br>
                    <span class="row1-span-2">湿度</span>
                </div>
            </div>

            <div class="row2">
                <i class="qi-2051"></i>
                <div>
                    <span class="row2-span-1">{{ windpower }} 米/秒</span> <br>
                    <span class="row2-span-2">风力</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Weather",
    computed:{
        getWeatherIconClass(){
            let weatherIcon = 'qi-qweather'
            this.icons.forEach((obj,index)=>{
                if(obj.name === this.weather){
                    weatherIcon = obj.className
                }
            })
            return weatherIcon
        },
        icons(){ return this.$store.state.icons },
        temperature(){ return this.$store.state.data.temperature },
        city(){ return this.$store.state.data.city },
        humidity(){ return this.$store.state.data.humidity },
        windpower(){ return this.$store.state.data.windpower },
        weather(){ return this.$store.state.data.weather }
    }
}
</script>

<style scoped>
.weather {
    width: 100%;
    height: 400px;
    color: aliceblue;
}

.col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 50px;
}

.row {
    display: flex;
    flex-direction: row;
    /* 两端对齐 */
    justify-content: space-around;
    align-items: center;
}
.row1 {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .row2 {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
/* col */
.col-weather-icon {
    font-size: 100px;
}

.col-span-1 {
    font-size: 50px;
}

.col-span-2 {
    font-size: 30px;
}

/* row1 */
.qi-2120 {
    font-size: 50px;
}

.row1-span-1 {
    font-size: 25px;
}

/* row2 */
.qi-2051 {
    font-size: 50px;
}

.row2-span-1 {
    font-size: 25px;
}
</style>