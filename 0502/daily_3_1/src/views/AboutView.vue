<template>
  <div class="about">
    <h1>About</h1>
        <h2>첫 번째 박스</h2>
        <div class="global">
        <div class="box scoped-box"></div>
    </div>
    <h2>두 번째 박스</h2>
    <div class="global">
    <div class="box scoped-box"></div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'App_2',
  components: {

  }
}
</script>

<style scoped>
.box {
  border: solid;
  width: 70px;
  height: 70px;
  margin: auto;
  background-color: pink;
}
</style>

