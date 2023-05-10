<template>
    <div class="wrap">
        <h2>3단계</h2>
        <div class="detail d-flex">
            <div class="prev d-flex align-items-center">
                <span class='btn' @click="toHome">이전</span></div>
            <div><img src="../assets/happlower.png" alt="" class="image"></div>
            <div class="next d-flex align-items-center"><span class='btn' @click="toNext">다음</span></div>
        </div>
        <h2>해플라워</h2>
    </div>
</template>

<script>
export default {
    name: "Ssafling",
    methods: {
        toHome() {
            alert('이전 진화 단계로 돌아갈 수 없습니다.')
        },
        toNext() {
            alert('Home으로 돌아갑니다.')
            this.$router.push({name:'home'})
        }
    }

}
</script>

<style>

</style>