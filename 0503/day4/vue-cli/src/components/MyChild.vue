<template>
  <div>
    <h3>This is child component</h3>
    <p>{{ staticProps }}</p>
    <p>{{ myProps }}</p>
    <button @click="childToParent">클릭</button>
  </div>
</template>

<script>
export default {
  name: 'MyChild',
  props: {
    staticProps: String,
    dynamicProps : String,
  },
  methods: {
    childToParent: function() {
      this.$emit('child-to-parent')
    }
  }
}
</script>

<style>
  
</style>
