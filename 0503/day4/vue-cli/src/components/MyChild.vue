<template>
  <div>
    <!-- <h3>This is child component</h3>
    <p>{{ staticProps }}</p>
    <p>{{ myProps }}</p>
    <button @click="childToParent">클릭</button> -->
    <br><br><br>
    <h1>AppChild</h1>
    <input type="text" v-model="child_data">
    <p>appData: {{ app_data }}</p>
    <p>parentData: {{ parent_data }}</p>
    <p>childData: {{ child_data }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyChild',
  data: function() {
        return {
          child_data : "" ,
        }
    },
  props: {
    app_data: String,
    parent_data:String
  },
  methods: {
    // childToParent: function() {
    //   this.$emit('child-to-parent')
    // }
  }
}
</script>

<style>
  
</style>
