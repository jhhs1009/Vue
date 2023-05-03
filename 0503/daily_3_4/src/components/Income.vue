<template>
    <div id="app">
        <p>연봉 입력 (만원): <input type="text" v-model="money"></p>
        <p>연봉은 => {{money}}</p>

    </div>
    
</template>

<script>
export default {
    name: 'App',
    data: function() {
        return {
            money : ""  
        }
    },
    methods: {
    }
}

</script>

<style>

</style>