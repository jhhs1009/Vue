<template>
  <div class="menu-item d-flex justify-content-bw align-items-center"
  :class="{selected: size.selected}"
  @click="selectSize">
    <span>{{ size.name }}</span>
    <span>{{ size.price }}원</span>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
  methods: {
    selectSize() {
      this.$store.commit("updateSizeList", this.size)
    }
  }
}
</script>

<style>

</style>