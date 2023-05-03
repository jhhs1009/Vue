<template>
    <div id="app">
        <hr>
        <h2>결정세액 : {{ res-minus }}</h2>
    </div>
    
</template>

<script>
export default {
    name: 'App',
    data: function() {
        return {
        }
    },
    props : {
        res:Number,
        minus:Number
    },
    methods: {
    },
    
}

</script>

<style>

</style>