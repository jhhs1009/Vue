<template>
  <div id="app">
    <SideBar></SideBar>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'AppView',
  components: {
    SideBar,

  }
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.box {
  width: 800px;
  /* border: 2px solid black; */
}

.left {
  width: 180px;
  height: 320px;
  border: 2px solid black;
  margin-top: 2%;
  margin-left: 2%;
  border-radius: 10px;
  float:left;
}

.right {
  width: 550px;
  /* height: 320px; */
  border: 2px solid black;
  margin-top: 2%;
  margin-right: 2%;
  border-radius: 10px;
  float:right;
}

a {
    font-size: 20px;
    line-height: 40px;
}

.right_small_box {
  width: 520px;
  /* height: 280px; */
  /* border: 2px solid black; */
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>
