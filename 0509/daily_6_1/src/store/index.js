import Vue from 'vue'
import Vuex from 'vuex'
import TodoData from './modules/todo.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    TodoData: TodoData
  },
  mutations: {
    data(state, data) {
      state.TodoData.list.push({
        id : new Date().getTime(),
        content: data,                   
        dueDateTime: new Date().getFullYear()+'-'+ (parseInt(new Date().getMonth())+1).toString(10) +'-'+ new Date().getDate() + ' T00:00', 
        isCompleted: false,               
        isImportant: false,
      })
    },
    important(state,data) {
      state.TodoData.list = state.TodoData.list.map((li) => {
        if (li.content == data.content) {
          li.isImportant = !data.isImportant
        }
        return li
      })
      
    }
  },
  actions: {
    update(context, data) {
      context.commit('data', data)
    },
    important(context, data) {
      context.commit('important', data)
    }
  }
})

export default store