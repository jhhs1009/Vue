<template>
  <div class="home">
    <div class="bar">
      <h1 style="font-size: 60px; display: flex;">NOTES</h1>
      <button class="plus" @click="add">+</button>
    </div>
    <hr><br>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {

  },
  methods: {
    add() {
      return this.$router.push({name:'add'})
    }
  }
}
</script>

<style>
.plus {
  background-color: darkgray;
  border: none;
  border-radius: 60px;
  width: 45px;
  height: 45px;
}

.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bar h1 {
  font-size: 60px;
  margin: 0;
}

.bar button {
  font-size: 30px;
}

</style>
