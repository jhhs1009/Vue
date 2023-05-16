<template>
  <b-container row="group" class="p-5 create-form">
    <h1>게시물 작성</h1>
    <b-row>
      <label for="input-title">제목</label>
      <b-form-input
        id="input-titile"
        v-model="title"
      ></b-form-input>
    </b-row>

    <b-row>
      <label for="input-content">내용</label>
      <b-form-textarea
        id="textarea-rows"
        rows="8"
        no-resize
        v-model="content"
      ></b-form-textarea>
    </b-row>
    <button @click="getArticles">create</button>
  </b-container>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

export default {
  name:'ArticleCreatePage',
  data() {
    return {
      title:'',
      content:''
    }
  },
  methods: {
    getArticles() {

      if (this.isLogin) {
        console.log(this.title)
      } else {
        alert('로그인이 필요한 서비스 입니다.')
        this.$router.push({name:'login'})
      }
      axios ({
        method:'post',
        url:`${API_URL}/api/v1/articles/`,
        data: {
          title : this.title,
          content : this.content
        },
        headers: {
          Authorization : `Bearer ${this.$store.state.token}`
        }
      })
        .then(() => {
          this.$router.push({name: 'home'})
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created : {
    
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin
    }
  },
  
  

}
</script>

<style>
.create-form {
  background-color: rgb(221, 235, 248);
  box-shadow: 20px 20px 10px 0px rgb(196, 204, 207);
}
</style>