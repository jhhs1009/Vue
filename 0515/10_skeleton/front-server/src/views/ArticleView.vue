<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to="{ name: 'CreateView' }">[CREATE]</router-link>
    <ArticleList />
    <hr>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'ArticleView',
  components: {
    ArticleList,
  },
  computed:{
    isLogin() {
      return this.$store.getters.isLogin // 로그인 여부
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      if (this.isLogin) {
        this.$store.dispatch('getAtricles')
      } else {
        alert('로그인이 필요한 페이지 입니다.')
        this.$router.push({name:'LogInView'})
      }
      this.$store.dispatch('getArticles')

      // 로그인이 되어 있으면 getArticels action 실행
      // 로그인 X라면 login 페이지로 이동
      
    }
  }
}
</script>

<style>

</style>
