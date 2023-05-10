<template>
    <div>
        <div class="bar">
            <h1>Add Note</h1>
        </div>
        <hr><br>
        <div>
            <p><textarea class="text_box" placeholder="메모를 입력하세요" cols="30" rows="10"></textarea></p>
            <input type="submit" value="submit" class="sub" @click="submit" v-model="data">
            <button @click="back" style="float: right; margin-right:1%">back</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddPage',
    data() {
        return {
            data:''
        }
    },
    methods: {
        submit() {

            this.$router.push({name:'home'})
        },
        back() {
            this.$router.push({name:'home'})
        }
    }


}
</script>

<style>
.text_box {
    width: 90%;
    height: 200px;
    resize: none;
}
.sub {
    float: right;
    margin-right: 5%;
}
</style>