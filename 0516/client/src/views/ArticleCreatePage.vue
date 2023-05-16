<template>
  <div>
    <button @click="getArticles">dd</button>
  </div>
</template>

<script>

export default {
  name:'ArticleCreatePage',
  data() {
    return {
      username:'',
      password:''
    }
  },

  created : {
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin
    }
  },
  methods: {
    getArticles() {
      if (this.isLogin) {
        console.log('로그인 됨')
      } else {
        alert('로그인이 필요한 서비스 입니다.')
        this.$router.push({name:'login'})
      }
    }
  }
  

}
</script>

<style>

</style>