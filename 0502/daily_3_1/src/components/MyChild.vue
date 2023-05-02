<template>
    <div>
        <h2>첫 번째 박스</h2>
        <div class="global">
        <div class="box scoped-box"></div>
    </div>
    <h2>두 번째 박스</h2>
    <div class="global">
    <div class="box scoped-box"></div>
    </div>
    </div>
</template>

<script>
export default {
    name:'MyChild'

}
</script>

<style>

</style>