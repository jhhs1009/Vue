<template>
    <div>
        
        <h2>상담 신청 현황</h2>
        <br>
        <h3>상담 선생님</h3>
        성함 : <span v-for="(teacher,i) in teacher" :key="i">{{ teacher }} </span>
        <hr style="width: 90%; height: 2px; background-color: #0f4c81; border: 0;">
        <h3>예약 현황</h3>
        시간들 : <sapn v-for="(time,i) in time" :key="i">{{ time }} </sapn>
        <hr style="width: 90%; height: 2px; background-color: #0f4c81; border: 0;">
        <br>
        <img src="@/assets/ssafy-logo.png" alt="">
    </div>
</template>

<script>


export default {
    name : 'MyList',
    props: {
        time : String,
        teacher : String
    },
    methods:{
    
  }

}
</script>

<style>

</style>