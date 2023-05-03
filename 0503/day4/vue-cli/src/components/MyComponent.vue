<template>
  <div class="border">
    <h1>This is MyComponent</h1>
    <MyChild static-props="component(부모)에서 child로"
    :dynamic-props="dynamicProps" 
    />
  </div>
</template>

<script>
import MyChild from '@/components/MyChild'

export default {
  name: 'MyComponent',
  components: {
    MyChild,
  },
  data : function () {
    return {
      dynamicProps : "It is a data."
    }
  }
}

</script>

<style>
  .border {
    border: solid;
  }
</style>
