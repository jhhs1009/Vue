<template>
  <div id="app">
    <h1>SSAFY 상담 예약 시스템</h1>
    <C2></C2>
  </div>
</template>

<script>
// import data from './assets/데일리 실습_vue_04_2_P.js';
// import C1 from '@/components/Mylist.vue';
import C2 from '@/components/Timetable.vue';



export default {
  name: 'App',
  components: {
    // C1,
    C2
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#box {
  box-shadow: 2px 2px 5px 5px rgb(177, 177, 177);
  border: 1px gray;
  width: 500px;
  height: 400px;
  margin: auto;
}
#small_box {
  width: 400px;
  margin: auto;
}
.btn3:hover {
  background-color: #dae4f1;
  color: #0f4c81;
}

.btn {
  border: none;
  height: 40px;
  width: 50px;
  margin-left: 0px;
  margin-bottom: 10px;
  background-color: white;
}

.btn2 {
  border: 1px solid #0f4c81;
  height: 40px;
  width: 60px;
  margin-left: 10px;
  margin-bottom: 10px;
  background-color: white;
}

.btn3 {
  border: 1px solid #0f4c81;
  height: 40px;
  width: 80px;
  margin-left: 10px;
  margin-bottom: 10px;
  background-color: white;
}

.selected {
  background-color: #dae4f1;
  color: #0f4c81;
}
</style>
