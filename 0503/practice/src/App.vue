<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <child-component name="JH" @money="giveMoney"></child-component>
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue';
import ChildComponent2 from './components/ChildComponent2.vue';

export default {
  name: 'App',
  components: {
    ChildComponent,
    ChildComponent2,
  },
  methods: {
    giveMoney() {
      alert('용돈 500원')
    }
  },
  created() {
    console.log("APP CREATED")
  },
  mounted() {
    console.log("APP MOUNT")
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
