<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span 
          @click="updateTodoStatus(todo)" 
          :class="{ 'is-completed': todo.is_completed }"
        >
        {{ todo.title }}
        </span>
        <button @click="deleteTodo(todo)" class="todo-btn">X</button>
      </li>
    </ul>
    <!-- <button @click="getTodos">Get Todos</button> -->
    <!-- <router-link :to="{name:'TodoList'}" @click="getTodos">Get Todo</router-link> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TodoList',
  data: function () {
    return {
      todos: null,
    }
  },
  created() {
    axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/todos/',
      })
        .then(res => {
          console.log(res)
          this.todos = res.data
        })
        .catch(err => {
          console.log(err)
        })
  },
  methods: {
    getTodos: function () {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/todos/',
      })
        .then(res => {
          console.log(res)
          this.todos = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteTodo: function (todo) {
      // 3번 문제
      console.log(todo)
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/todos/${todo.id}`,
      })
        .then(()=> {
          // alert('삭제 완료')
          this.getTodos()
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateTodoStatus: function (todo) {
      // 4번 문제
      axios.put(
        `http://127.0.0.1:8000/todos/${todo.id}/`,
        {title : todo.title, is_completed: !todo.is_completed}
      )
        .then(()=> {
          this.getTodos()
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped>
  .todo-btn {
    margin-left: 10px;
  }

  .is-completed {
    text-decoration: line-through;
    color: rgb(112, 112, 112);
  }
</style>
