<template>
    <div class="wrap">
        <h2>시작</h2>
        <div class="detail d-flex">
            <div class="prev d-flex align-items-center">
                <span class='btn' @click="toHome">이전</span></div>
            <div><img src="../assets/happeed.png" alt="" class="image"></div>
            <div class="next d-flex align-items-center"><span class='btn' @click="toNext">다음</span></div>
        </div>
        <h2>해피드</h2>
    </div>
</template>

<script>
export default {
    name: "Nocolor",
    methods: {
        toHome() {
            this.$router.push({name: "home"})
        },
        toNext() {
            this.$router.push({name: 'ssafling'})
        }
    }

}
</script>

<style>
.wrap {
    margin-top: 50px;
    text-align: center;
    border: 1px solid gray;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgb(182, 184, 187) 6px 6px;
}
.image {
    width: 200px;
}
.d-flex {
    display: flex;
}
.btn {
    border: 1px solid gray;
    border-radius: 3px;
    padding: 10px;
    background-color: rgb(253, 255, 239);
}
.align-items-center {
    align-items: center;
}
</style>