<template>
  <div class="border">
    <br><br><br>
    <h1>AppParent</h1>
    <input type="text" v-model="parent_data" @keypress="childToParent">
    <p>appData: {{ app_data }}</p>
    <p>childData: </p>
    <MyChild :app_data="app_data" :parent_data="parent_data"></MyChild>
    <!-- <MyChild static-props="childData: "
    :dynamic-props="dynamicProps" 
    /> -->
  </div>
</template>

<script>
import MyChild from '@/components/MyChild'

export default {
  name: 'MyComponent',
  data: function() {
        return {
          parent_data : "" ,
        }
    },
  components: {
    MyChild,
  },
  props: {
    app_data:String,
  },
  methods: {
    childToParent: function() {
      this.$emit('child-to-parent', parent_data)
    }
  }
}

</script>

<style>
  /* .border {
    border: solid;
  } */
</style>
