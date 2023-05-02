<template>
  <div id="app">
    <h1>버튼 박스 제작</h1>
    
    <div id="time">
      <h2 style="line-height:60px;">예약 페이지</h2>
      <h3 style="line-height:20px;"> 시간 선택</h3>
      <button class="btn" v-for="(time,i) in times" :key="i" @click="vis">
        {{ time }}
      </button>
      <br><hr>
      선택 시간 : <sapn v-for="(time,i) in v" :key="i">{{ time }} </sapn>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import data from './assets/데일리 실습_vue_04_1_P.js';


export default {
  name: 'App',
  data(){
    return {
      times : data,
      v:[]
    }
  },
  methods:{
    vis(e) {

      const btns = document.querySelectorAll('.btn')
      btns.forEach((btn) => {
        if (this.v.length <=5){
          if (e.currentTarget == btn) {
          btn.classList.toggle("selected")

          if (this.v.includes(btn.textContent)) {
            for (let i = 0; i<this.v.length; i++) {
              if (this.v[i]==btn.textContent) {
                this.v.splice(i,1)
                break
              }
            }
            
          } else{
            this.v.push(btn.textContent)
          }
          }
        }
        else {
          alert('5타임까지만 신청할 수 있습니다.')
          this.v.length = 0
          btns.forEach((btn) => {
            btn.classList.remove('selected')
          })
          
        }
        

      }) 
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#time {
  box-shadow: 2px 2px 5px 5px rgb(177, 177, 177);
  border: 1px gray;
  width: 500px;
  height: 400px;
  margin: auto;
}
button {
  border: none;
  height: 40px;
  width: 50px;
  margin-left: 10px;
  margin-bottom: 10px;
  background-color: white;
}
.selected {
  background-color: #dae4f1;
  color: #0F4C81;
}



</style>
