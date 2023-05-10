<template>
    <div>
        <img v-if="imgSrc" :src="imgSrc" alt="">
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'DogView',
    data() {
        return {
            imgSrc: null,
        }
    },
    methods: {
        getDogImage() {
            const breed = this.$route.params.breed
            const dogImageSearchURL=`https://dog.ceo/api/breed/${breed}/images/random`
        
        axios({
            method: 'get',
            url: dogImageSearchURL
        })
        .then((response) => {
            console.log(response)
            const dogimgSrc = response.data.message
            this.imgSrc = dogimgSrc
        })
        .catch((error) => {
            console.log(error)
        })
    }
    },
    created() {
        this.getDogImage()
    }


}
</script>

<style>

</style>