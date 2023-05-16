<template>
    <b-container role="group" class="p-5 signup-form">
      <h1>회원가입</h1>
      <b-row>
        <label for="input-username">ID</label>
        <b-form-input 
          id="input-username" 
          placeholder="아이디를 입력하세요" 
          v-model="username" 
          :state = 'nameState'
          aria-describedby="input-live-feedback"
          trim>
        </b-form-input>
        <b-form-invalid-feedback id='input-username-feedback' class="text-right">
          알파벳/숫자 3글자 이상
        </b-form-invalid-feedback>
      </b-row>

      <b-row>
        <label for="input-password1">비밀번호</label>
        <b-form-input 
          id="input-password1" 
          placeholder="PASSWORD1" 
          v-model="password1" 
          :state = 'passwordState'
          aria-describedby="input-live-feedback"
          trim
          type="password">
        </b-form-input>
        <b-form-invalid-feedback id='input-password-feedback' class="text-right">
          비밀번호 5글자 이상
        </b-form-invalid-feedback>
      </b-row>

      <b-row>
        <label for="input-password2">비밀번호 확인</label>
        <b-form-input 
          id="input-password2" 
          placeholder="PASSWORD2" 
          v-model="password2" 
          :state = 'passwordCorrect'
          aria-describedby="input-live-feedback"
          trim
          type="password">
        </b-form-input>
        <b-form-invalid-feedback id='input-password-feedback' class="text-right">
          비밀번호 일치여부
        </b-form-invalid-feedback>

        <br> <br>
        <b-button variant='success' @click="signup">회원가입</b-button>
      </b-row>
    </b-container>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'SignUpView',
  data() {
    return {
      username:"",
      password1:"",
      password2:"",
    }
  },

  computed : {
    nameState() {
      return this.username.length>=3 ? true : false
    },
    passwordState() {
      return this.password1.length>=5 ? true: false
    },
    passwordCorrect() {
      if (this.password1.length !=0 && this.password2.length!=0 && this.password1 === this.password2) {
        return true
      } else {
        return false
      }
      
    }
  },
  methods: {
    signup() {
      const username = this.username
      const password1 = this.password1
      const password2 = this.password2
      
      const payload = {
        username,password1, password2
      }
      this.$store.dispatch('signUp', payload)
    //   axios ({
    //     method: 'post',
    //     url: 'http://127.0.0.1:8000/auth/signup/',
    //     data : {
    //       username : this.username,
    //       password1 : this.password1,
    //       password2 : this.password2,
    //     },
    //   })
    //     .then((res) => {
    //       console.log(res.data)
    //       return this.$router.push({name:'home'})
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // }

  }
}
}
</script>

<style>
.signup-form {
  background-color: rgb(221, 235, 248);
  box-shadow: 20px 20px 10px 0px rgb(196, 204, 207);
}

</style>