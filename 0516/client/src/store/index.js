import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '../router'

Vue.use(Vuex)

const API_URL = 'http://127.0.0.1:8000'
export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    token : null
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },
  mutations: {
    SIGN_UP(state, token){
      state.token = token
    },
    SAVE_TOKEN (state, token) {
      state.token = token
      router.push({name: 'home'})
    }
  },
  actions: {
    signUp(context, payload) {
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2

      axios({
        method: 'post',
        url: `${API_URL}/auth/signup/`,
        data : {
          username, password1, password2
        }
      })
        .then(res => {
          context.commit('SAVE_TOKEN', res.data.access)
        })
        .catch(err => console.log(err))
    },
    login(context, payload) {
      const username = payload.username
      const password = payload.password

      axios({
        method: 'post',
        url: `${API_URL}/auth/login/`,
        data : {
          username, password
        }
      })
        .then(res => {
          context.commit('SAVE_TOKEN', res.data.access)
        })
        .catch(err => console.log(err))
    }
  },
  
  modules: {
  }
})
