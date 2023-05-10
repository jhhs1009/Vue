<template>
    <div class="app">
        <h1>로또 번호</h1>
        <p>{{ num }}</p>    
    </div>
</template>

<script>
export default {
    name:'TheLotto',
    data(){
        return {
            num:[]
        }
    },
    created() {
        let randomIndexArray = []
        for (let i=0; i<6; i++) {
            let randomNum = Math.floor((Math.random() * 45)+1)
            if (randomIndexArray.indexOf(randomNum) === -1) {
            randomIndexArray.push(randomNum)
            }
        }
        let num = randomIndexArray
        this.num = num
        }

}
</script>

<style>

</style>