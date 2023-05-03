<template>
    <div id="app">
        <p>연봉 입력 (만원): <input type="text" v-model.number="money"></p>
        <p>세액감면액 (만원): <input type="text" v-model.number="minus"></p>
        <hr>
        <h2>종합소득금액 : {{ money }} 만원</h2>
        <h2>종합소득공제 : (-) 150  만원</h2>
        <h2>과세표준 : {{ money - 150 }} 만원</h2>
        <Tax :money="money-150" :minus="minus"></Tax>
    </div>
    
</template>

<script>
import Tax from '@/components/Taxrate.vue'

export default {
    name: 'App',
    components : {
        Tax,
    },
    data: function() {
        return {
            money : "" ,
            minus : "" 
        }
    },
    methods: {
    }
}

</script>

<style>

</style>