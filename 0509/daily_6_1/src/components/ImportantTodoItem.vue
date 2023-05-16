<template>
    <div >
        <div class="a" v-if="data.isImportant">
            <div class="t" >
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
    name: "ImportantTodoItem",
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