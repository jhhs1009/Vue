<template>
    <div>
        <div class="bar">
            <h1>Add Note</h1>
        </div>
        <hr><br>
        <div>
            <!-- 타이틀 -->
            <span style="float: left; margin-left: 4.6%;">Title: <input type="text" v-model="title"></span>
            <br>

            <p><textarea class="text_box" placeholder="메모를 입력하세요" cols="30" rows="10" v-model="data"></textarea></p>
            <input type="submit" value="submit" class="sub" @click="submit">
            <button @click="back" style="float: right; margin-right:1%">back</button>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddPage',
    data() {
        return {
            data:'',
            title:''
        }
    },
    methods: {
        submit() {
            if (this.title && this.data){
                alert('메모를 저장하였습니다.')
                this.$store.dispatch('data', [this.data, this.title]);
                this.$router.push({name:'home'})
            } else {
                alert('제목과 내용이 있어야 합니다.')
            }
            
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