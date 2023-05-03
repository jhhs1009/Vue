<template>
  <div id="app">
    <h1>App</h1>
    <input type="text" v-model="app_data">
    <p>parentData: {{ parent_data }}</p>
    <p>childData: </p>
    <MyComponent :app_data="app_data" @child-to-parent="parentGetEvent"></MyComponent>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'


export default {
  name: 'App',
  data: function() {
        return {
            app_data : "" ,
            parent_data : ""
        }
    },
  methods: {
    parentGetEvent: function(inputData){
      {{inputData}}
    }

  },
  components: {
    MyComponent,

  },
  props :{
    parent_data:String
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
