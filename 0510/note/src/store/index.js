import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    note: []
  },
  getters: {
  },
  mutations: {
    data(state,[data,title]) {
      const colors = ["pink", "yellow", "sky"];
      state.note.push({
        content: data,
        title: title,
        color: colors[Math.floor(Math.random() * colors.length)]
      })

    }
  },
  actions: {
    data(context, [data, title]) {
      context.commit('data', [data, title])
    }
  },
  modules: {
  }
})
