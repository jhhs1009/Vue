<template>
    <div>부모에서 지어준 이름 : {{ name }}
    <button @click="giveMeMoney">부모한테 돈주라고 하기</button>
    <button @click="sendToC2('나 용돈 5만원 받았다.')">다른 아이한테 메시지 전달</button>
    </div>
</template>

<script>
import EventBus from '@/EventBus.js';

export default {
    name : "ChildComponent",
    props: {
        name : String,
    },
    methods : {
        giveMeMoney() {
            this.$emit('money')
        },
        sendToC2() {
            EventBus.$emit("fromC1")
        }
    },
    created() {
    console.log("C1 CREATED")
    },
    mounted() {
        console.log("C1 MOUNT")
    }
}
</script>

<style>

</style>