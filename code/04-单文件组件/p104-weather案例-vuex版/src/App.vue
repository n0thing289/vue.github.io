<template>
  <div class="root">
    <!-- Search.vue -->
    <!-- :apiKey="apiKey" -->
    <Search ></Search>
    
    <!-- Weather.vue -->
    <!-- :icons="icons" -->
    <Weather ></Weather>
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
