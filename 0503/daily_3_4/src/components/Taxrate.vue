<template>
    <div id="app">
        <hr>
        <div v-if="money<=1200">
            <h2>산출세액 : {{ money * 0.06}} 만원</h2>
            <h2>세액감면 : (-) {{ minus }} 만원</h2>
            <Final :res="money * 0.06" :minus="minus"></Final>
        </div>

        <div v-else-if="1200<money<=4600">
            <h2>산출세액 : {{ Math.round(money * 0.15 -108)}} 만원</h2>
            <h2>세액감면 : (-) {{ minus }} 만원</h2>
            <Final :res="Math.round(money * 0.15 -108)" :minus="minus"></Final>
        </div>

        <div v-else-if="4600<money<=8800">
            <h2>산출세액 : {{ Math.round(money * 0.24 - 522)}} 만원</h2>
            <h2>세액감면 : (-) {{ minus }} 만원</h2>
            <Final :res="Math.round(money * 0.24 - 522)" :minus="minus"></Final>
        </div>

        <div v-else-if="8800<money<=15000">
            <h2>산출세액 : {{ Math.round(money * 0.35 - 1490)}} 만원</h2>
            <h2>세액감면 : (-) {{ minus }} 만원</h2>
            <Final :res="Math.round(money * 0.35 - 1490)" :minus="minus"></Final>
        </div>

        <div v-else-if="15000<money<=30000">
            <h2>산출세액 : {{ Math.round(money * 0.38 -1940) }} 만원</h2>
            <h2>세액감면 : (-) {{ minus }} 만원</h2>
            <Final :res="Math.round(money * 0.38 -1940)" :minus="minus"></Final>
        </div>

        <div v-else-if="30000<money<=50000">
            <h2>산출세액 : {{ Math.round(money * 0.40 - 2540) }} 만원</h2>
            <h2>세액감면 : (-) {{ minus }} 만원</h2>
            <Final :res="Math.round(money * 0.40 - 2540)" :minus="minus"></Final>
        </div>

        <div v-else-if="50000<money<=100000">
            <h2>산출세액 : {{ Math.round(money * 0.42 - 3540) }} 만원</h2>
            <h2>세액감면 : (-) {{ minus }} 만원</h2>
            <Final :res="Math.round(money * 0.42 - 3540)" :minus="minus"></Final>
        </div>

        <div v-else-if="100000<money">
            <h2>산출세액 : {{ Math.round(money * 0.45 - 6540) }} 만원</h2>
            <h2>세액감면 : (-) {{ minus }} 만원</h2>
            <Final :res="Math.round(money * 0.45 - 6540)" :minus="minus"></Final>
        </div>   
    </div>
    
</template>

<script>
import Final from '@/components/Finaltax.vue'

export default {
    name: 'App',
    components: {
        Final
    },
    data: function() {
        return {
        }
    },
    props : {
        money:Number,
        minus:Number
    },
    methods: {
    },
    
}

</script>

<style>

</style>