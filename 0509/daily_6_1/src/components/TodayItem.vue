<template>
    <div >
        <div class="a" v-if="new Date().getFullYear()+'-'+ (parseInt(new Date().getMonth())+1).toString(10) +'-'+ new Date().getDate() === data.dueDateTime.substring(0,9)">
            <div class="t">
                <input type="checkbox" class="checkbox" id="myCheckbox">
                <label for="myCheckbox"></label>

                {{ data.content }}
            </div>
            
            <button :class="{important:data.isImportant}" @click="important" id="star" >★</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodayItem",
    props: {
        data: Object,
    },
    methods: {
        important() {
            this.$store.dispatch('important', this.data)
        }
    }
}
</script>

<style>

</style>