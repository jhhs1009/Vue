<template>
  <div>
    <h2>여기는 child2</h2>
  </div>
</template>

<script>
import EventBus from '@/EventBus';

export default {
    name: "ChildComponent2",
    methods : {

    },
    created() {
        EventBus.$on("fromC1", (message) => {
            alert(`C1에서 온 메시지 : ${message}`)
        }),
        console.log("C2 CREATED")
    },
    mounted() {
        console.log("C2 MOUNT")
    }
}
</script>

<style>

</style>