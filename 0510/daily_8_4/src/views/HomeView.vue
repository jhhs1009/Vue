<template>
  <div>
    <h1>Cat Image</h1>
      <img style="width: 500px;" v-if="imgSrc" :src="imgSrc" alt="">
      <br>
      <button @click="getCatImage">Get Cat</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CatView',
  data() {
      return {
          imgSrc: null,
      }
  },
  methods: {
      getCatImage() {
          const catImageSearchURL=`https://api.thecatapi.com/v1/images/search`
      
      axios({
          method: 'get',
          url: catImageSearchURL
      })
      .then((response) => {
          const catimgSrc = response.data[0].url
          this.imgSrc = catimgSrc
      })
      .catch((error) => {
          console.log(error)
      })
  }
  },
  created() {
      this.getCatImage()
  }


}
</script>

<style>

</style>