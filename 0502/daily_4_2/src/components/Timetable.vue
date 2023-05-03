<template>
    <div
      id="box"
      style="
        display: flex;
        flex-direction: row;
        height: 450px;
        width: 900px;
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
            @click="time_click">
            {{ time }}
          </button>
          <br>
          <button class="btn3" @click="result">예약 확정</button>
        </div>
      </div>
      <div style="flex-grow: 1; width: 50%; background: #dae4f1">
        <Mylist :teacher="name" :time="v"></Mylist>
      </div>
      </div>
    
</template>

<script>
import data from '@/assets/데일리 실습_vue_04_2_P.js';
import Mylist from '@/components/Mylist.vue'

export default {
  name:'TimeTable',
  components : {
    Mylist
  },
  data(){
        return {
        times : data,
        v:[],
        name : []
        }
    },
  props : {


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
    },

    result: function() {
      if (this.v.length == 0 && this.name.length == 0) {
        alert('아무것도 선택하지 않았습니다. \n선생님과 시간을 선택해주세요.')
      }
      else if (this.v.length == 0) {
        alert('시간을 선택해주세요')
      }
      else if (this.name.length == 0) {
        alert('선생님을 선택해주세요')
      }
      else {
        alert('예약이 확정되었습니다.')
      }
      

      const btns = document.querySelectorAll('.btn')
      const btn2s = document.querySelectorAll('.btn2')
      btns.forEach((btn) => {
        
        btn.classList.remove('selected')
      })
      btn2s.forEach((btn) => {
        
        btn.classList.remove('selected')
      })
      this.v = []
      this.name= []
    }

  }


}
</script>

<style>

</style>