<template>
  <div id="app">
    <h1>App</h1>
    <input type="text" v-model="app_data">
    <p>parentData: {{ get_parent_data }}</p>
    <p>childData: {{ get_child_data }}</p>
    <MyComponent :app_data="app_data" @parent-to-app="get_parent"></MyComponent>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'


export default {
  name: 'App',
  data: function() {
        return {
            app_data : "" ,
            parent_data : "",
            get_parent_data: "",
            get_child_data: ""
        }
    },
  methods: {
    get_parent: function(inputData, inputData2) {
      this.get_parent_data = inputData,
      this.get_child_data = inputData2
    },


  },
  components: {
    MyComponent,

  },
  props :{
    // parent_data:String
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
  margin-top: 60px;
}
</style>
