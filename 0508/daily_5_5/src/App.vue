<template>
  <div id="app">
    <h1 class="d-flex justify-content-center" style="margin-top: 100px">
      Coffee Order App
    </h1>
    <div class="order-board d-flex justify-content-bw">
      <menu-list></menu-list>
      <size-list></size-list>
      <!-- 옵션 -->
      <option-list></option-list>
    </div>
    <OrderList></OrderList>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList.vue";
import SizeList from "@/components/SizeList.vue";
import OrderList from "@/components/OrderList.vue";
// 옵션 선택
import OptionList from "@/components/OptionList.vue";

export default {
  name: "App",
  components: {
    MenuList,
    SizeList,
    OrderList,
    // 옵션
    OptionList,
  },
  created() {
    const data = localStorage.getItem('orderdata')
    this.$store.dispatch('data', JSON.parse(data)) 
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

.justify-content-center {
  justify-content: center;
}

.order-board {
  margin-top: 100px;
  background-color: lightgray;
  padding: 20px;
  border-radius: 10px;
}
</style>
