<template>
  <div class="app">
    <h1>점심메뉴</h1>
    <button @click="random_lunch">Pick Lunch</button>
    <p>{{ data }}</p>
    <br>
    <h2>로또를 뽑아보자</h2>
    <button @click="random_lotto">Pick Lotto</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      data:'',
      num:[]
    }
  },
  methods: {
    random_lunch() {
      const name = ['떡볶이','국밥','짜장면','마라탕','보쌈','잔치국수']
      const random = Math.floor(Math.random() * name.length)
      let data = name[random]
      this.data = data
    },
    random_lotto() {
      return this.$router.push({name:'lotto'})
    }
  }
}
</script>
