<template>
  <div id="app">
    <h1>SSAFY 상담 예약 시스템</h1>

    <div
      id="box"
      style="
        display: flex;
        flex-direction: row;
        height: 450px;
        width: 800px;
        margin: auto;
      "
    >
      <div style="flex-grow: 1; width: 50%; background: white">
        <h2>예약 페이지</h2>
        <h3>선생님 선택</h3>
        <button class="btn2" @click="teacher_click">Eric</button>
        <button class="btn2" @click="teacher_click">Tony</button>
        <br>
        <hr style="width: 90%; height: 2px; background-color: #0f4c81; border: 0;">
        <h3>시간 선택</h3>
        <div id="small_box">
          <button
            class="btn"
            v-for="(time, i) in times"
            :key="i"
            @click="time_click"
          >
            {{ time }}
          </button>
        </div>
      </div>
      <div style="flex-grow: 1; width: 50%; background: #dae4f1">
        <h2>상담 신청 현황</h2>
        <br>
        <h3>상담 선생님</h3>
        성함 : <span v-for="(name,i) in name" :key="i">{{ name }} </span>
        <hr style="width: 90%; height: 2px; background-color: #0f4c81; border: 0;">
        <h3>예약 현황</h3>
        시간들 : <sapn v-for="(time,i) in v" :key="i">{{ time }} </sapn>
        <hr style="width: 90%; height: 2px; background-color: #0f4c81; border: 0;">
        <br>
        <img src="./assets/ssafy-logo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>

import data from './assets/데일리 실습_vue_04_2_P.js';


export default {
  name: 'App',
  data(){
    return {
      times : data,
      v:[],
      name : []
    }
  },
  methods:{
    time_click(e) {
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
    },

    teacher_click(event) {
      const btns = document.querySelectorAll('.btn2')
      btns.forEach((btn) => {
        if (event.currentTarget == btn) {
          btn.classList.toggle("selected")
          

          if (this.name.includes(btn.textContent)) {
            for (let i = 0; i<this.name.length; i++) {
              if (this.name[i]==btn.textContent) {
                this.name.splice(i,1)
                break
              }
            }

          } else{
            this.name.push(btn.textContent)
          }
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
#box {
  box-shadow: 2px 2px 5px 5px rgb(177, 177, 177);
  border: 1px gray;
  width: 500px;
  height: 400px;
  margin: auto;
}
#small_box {
  width: 400px;
}
.btn {
  border: none;
  height: 40px;
  width: 50px;
  margin-left: 10px;
  margin-bottom: 10px;
  background-color: white;
}

.btn2 {
  border: 1px solid #0f4c81;
  height: 40px;
  width: 50px;
  margin-left: 10px;
  margin-bottom: 10px;
  background-color: white;
}

.selected {
  background-color: #dae4f1;
  color: #0f4c81;
}
</style>
