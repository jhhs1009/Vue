<template>
  <div 
  class="menu-item d-flex justify-content-bw align-items-center" 
  :class="{selected: menu.selected}"
  @click="selectMenu">
    <img :src="menu.image" alt="">
    <span>{{ menu.title }}  </span>
    <span>{{ menu.price }}원</span>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
  methods: {
    selectMenu() {
      this.$store.commit("updateMenuList", this.menu)
    }
  }
}
</script>

<style>
.justify-content-bw {
  justify-content: space-between;
}

.align-items-center {
  align-content: center;
}

.menu-img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}
.menu-item {
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  padding: 5px;
}
.selected {
  background-color: forestgreen;
  color: white;
}


</style>