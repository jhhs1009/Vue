<template>
  <div class="home">
    <div class="bar">
      <h1 style="font-size: 60px; display: flex;">NOTES</h1>
      <button class="plus" @click="add">+</button>
    </div>
      <hr><br>

    <div id='memo' :class="colors(li.color)" v-for="(li,idx) in list"
      :key="idx">
      <p class="d-flex justify-content"><strong>Title : {{ li.title }}</strong></p>
      <p class="d-flex justify-content">{{ li.content }}</p>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {

  },
  computed: {
    list() {
      return this.$store.state.note;
    }
  },
  methods: {
    colors(color) {
      return color
    },
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
#memo {
  width: 300px;
  display: inline-block;
  justify-content: space-between;
  /* align-items: center; */
  margin-right: 2%;
  margin-top: 2%;
  padding: 5px;
  border-radius: 10px;
}

.pink {
  background-color: rgb(255, 203, 212);
}

.yellow {
  background-color: rgb(255, 255, 144);
}

.sky {
  background-color: rgb(197, 255, 255);
}


.d-flex {
  display: flex;
}
.justify-content {
  justify-content:space-between
}
</style>
