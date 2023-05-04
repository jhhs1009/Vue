<template>
  <div id="app">
    <h1 class="d-flex justify-content-center" id="main">Coffee Order App</h1>
    <br>
    <div style="display: flex; flex-direction: row;">
      <div style="flex-grow: 1;width: 50%; background-color: lightgrey;"><MenuList></MenuList></div>
      <div style="flex-grow: 1; width: 50%; background: lightgrey;">
      <SizeList></SizeList></div>
    </div>
  
  </div>  
</template>

<script>
import MenuList from '@/components/MenuList.vue'
import SizeList from '@/components/SizeList.vue'

export default {
  name: 'App',
  components: {
    MenuList,
    SizeList
  },
  methods: {
  },


}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}
#app {
  width: 800px;
  margin:auto;
}
#main {
  text-align: center;
}

ul {
  list-style: none;
}

.d-flex {
  display: flex;
}
.justify-content-center {
  justify-content: center;
}
</style>
