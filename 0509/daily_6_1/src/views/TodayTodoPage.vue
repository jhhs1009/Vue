<template>
    <div class="right_small_box">
        <h1 style="display: flex; font-size: 30px;">오늘 할일</h1>
        <div>

            <button @click="update" style=" display: inline-block; background-color: white; border:none; font-size: 25px;">+</button>

            <input type="text" placeholder="할 일을 작성해주세요!" style="display: inline-block; width: 480px; height: 20px;" v-model="text_data">

        </div>
        <hr>

        <!-- for 문 밖에서 다시 돌기 -->
        <TodayItem
            v-for="item in list"
            :key="item.id"
            :data="item"
        ></TodayItem>

        
    </div>

        

</template>

<script>
import TodayItem from '@/components/TodayItem.vue';
// import item


export default {
    name:'AllTodo',
    components : {
        TodayItem,
    },
    computed: {
        list() {
            return this.$store.state.TodoData.list
        }
    },
    data() {
        return {
            text_data:''
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
