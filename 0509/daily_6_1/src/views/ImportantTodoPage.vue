<template>
    <div class="right_small_box">
        <h1 style="display: flex; font-size: 30px;">중요 할일</h1>
        <div>

            <button @click="update" style=" display: inline-block; background-color: white; border:none; font-size: 25px;">+</button>

            <input type="text" placeholder="할 일을 작성해주세요!" style="display: inline-block; width: 480px; height: 20px;" v-model="text_data">

        </div>
        <hr>

        <!-- for 문 밖에서 다시 돌기 -->
        <ImportantTodoItemVue
            v-for="item in list"
            :key="item.id"
            :data="item"
        ></ImportantTodoItemVue>

        
    </div>

        

</template>

<script>
import ImportantTodoItemVue from '@/components/ImportantTodoItem.vue';
// import item


export default {
    name:'ImportantTodoPage',
    components : {
        ImportantTodoItemVue,
    },
    computed: {
        list() {
            return this.$store.state.TodoData.list
        }
    },
    methods:{
        update(e){
            e.preventDefault();
            this.$store.dispatch("update", this.text_data);
        },
    }

    

}
</script>

