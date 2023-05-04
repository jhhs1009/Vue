<template>
  <div class="menu-list">
    <button id="drink" @click="selectMenu">1. 음료를 고르세요.</button>
    
    <MenuListItem v-for="menu in menuList" :key="menu.title" :menu="menu"></MenuListItem>
  </div>
</template>

<script>
import MenuListItem from './MenuListItem.vue';

export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList: function () {
      return this.$store.state.menuList
  },
  },
  methods: {
    selectMenu: function () {
      // this.$store.dispatch("selectMenu",1)
    },
  },
}
</script>

<style>
#drink {
  background-color: white;
  border: none;
  font-size: 30px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 10px;
}

</style>