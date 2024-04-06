<template>
  <div class="root">
    <!-- Search.vue -->
    <Search :apiKey="apiKey"></Search>
    <!-- Weather.vue -->
    <Weather :icons="icons"></Weather>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Weather from './components/Weather.vue'
export default {
  name:"App",
  components:{
    Search:Search,
    Weather:Weather
  },
  data(){
    return {
      apiKey: "56d3b612de58cd35eb39d10ee6340c50",
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
    }
  }
}
</script>

<style scoped>
.root{
  width: 400px;
  height: 500px;
  border: 0px solid black;
  border-radius: 5%;
  background: -webkit-linear-gradient(135deg, #83fbb7, #1d96b4, #0054ad);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(135deg, #83fbb7, #1d96b4, #0054ad);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
