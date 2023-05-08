<template>
  <div
    class="menu-item d-flex justify-content-bw"
    :class="{ selected: option.selected }">

    <p class="size-item d-flex align-items-center justify-content-center">
      {{ option.type }}
    </p>
    <button class='decre' @click="decrease">-</button>
    <p class="size-item d-flex align-items-center justify-content-center">
      {{ option.count }}
    </p>
    <button class='incre' @click="increase">+</button>
  </div>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase() {
      this.$store.dispatch('selectIncreaseOption', this.option)
    },
    decrease() {
      this.$store.dispatch('selectDecreaseOption', this.option)
    },
  },
}
</script>

<style>
.decre {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-top: 6%;
  margin-left: 140px;
}

.incre {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-top: 6%;
}


</style>