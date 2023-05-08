<template>
  <li class="d-flex justify-content-bw order-item">
    <div class="d-flex">
      <img class="menu-img" :src="order.menu.image" alt="" />
      <div class="d-flex flex-column">
        <p>{{ order.menu.title }}</p>
        <p>사이즈: {{ order.size.name }}</p>
      </div>
    </div>
    <div>
      <p>가격: {{ totalPrice }}원</p> 
      <p>샷 {{ order.option[0].count }}회 | 바닐라 시럽 {{ order.option[1].count }}회 | 카라멜 시럽 {{ order.option[2].count }}회</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "OrderListItem",
  props: {
    order: Object,
  },
  computed: {
    totalPrice() {
      let res = 0
			for (let i = 0; i<this.order.option.length; i++) {
				res += this.order.option[i].price * this.order.option[i].count
			}
      return this.order.menu.price + this.order.size.price + res;
    },
  },
};
</script>

<style>
.order-item {
  padding: 10px;
}

.flex-column {
  flex-direction: column;
}
</style>