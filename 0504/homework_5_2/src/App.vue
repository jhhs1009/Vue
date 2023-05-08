// App.vue

<template>
  <div id="app">
    <p>Counter: {{ counter }}</p>
    <p>Counter x2: {{ counterDouble }}</p>
    <p></p>
    <button @click="increase">increase +</button>
    <button @click="decrease">decrease -</button>
  </div>
</template>

<script>
export default {
  name: 'App', 
  // data: function() {
  //   return {
  //     // counter: 0,
  //   }
  // },
  methods: {
    increase: function () {
      this.$store.dispatch('increase', 1)

    },
    decrease: function () {
      this.$store.dispatch('decrease', 1)
    },
  },
  computed: {
    counter() {
      return this.$store.state.counter
    },
    counterDouble: function () {
      return this.$store.getters.counterDouble
    },
  },
}
</script>

<style>
</style>