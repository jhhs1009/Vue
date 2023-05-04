<template>
  <div class="border">
    <br><br><br>
    <h1>AppParent</h1>
    <input type="text" v-model="parent_data" @input="ParentToApp">
    <p>appData: {{ app_data }}</p>
    <p>childData: {{ get_child_data }}</p>
    <MyChild :app_data="app_data" :parent_data="parent_data" @child-to-parent="get_child"></MyChild>
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
          get_child_data: ""
        }
    },
  components: {
    MyChild,
  },
  props: {
    app_data:String,
  },
  methods: {
    get_child: function(inputData) {
      this.get_child_data = inputData
      this.$emit('parent-to-app', this.parent_data, this.get_child_data)
    },

    ParentToApp: function() {
      this.$emit('parent-to-app', this.parent_data, this.get_child_data)
    }
  }
}

</script>

<style>
  /* .border {
    border: solid;
  } */
</style>
