<template>
    <div>
        <!-- 부모가 자식에게 데이터 내려줌 todoitem="todo" -->
        <TodoListItem v-for="(todo,index) in todos" :key="index" :todoitem="todo"></TodoListItem>
    </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue'

export default {
    name : "TodoList",
    components: {
        TodoListItem,
    },
    computed: {
        todos() {
            return this.$store.state.todos
        }
    }

}
</script>

<style>

</style>