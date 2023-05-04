<template>
  <div>
    <button id="size" @click="sizeList">2. 사이즈를 고르세요.</button>

    <SizeListItem v-for="size in sizeList" :key="size.name" :size="size"></SizeListItem>
  </div>
</template>

<script>
import SizeListItem from './SizeListItem.vue';

export default {
  name: 'SizeList',
  components: {
    SizeListItem,
  },
  methods: {
    onSelectMenu: function () {},
  },
  computed: {
    sizeList: function () {
      return this.$store.state.sizeList
    },
  },
}
</script>

<style>
#size {
  background-color: white;
  border: none;
  font-size: 30px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 10px;
}
</style>