<template>
    <div class="right_small_box">
        <h1 style="display: flex; font-size: 30px;">모든 할일</h1>
        <div>

            <button @click="update" style=" display: inline-block; background-color: white; border:none; font-size: 25px;">+</button>

            <input type="text" placeholder="할 일을 작성해주세요!" style="display: inline-block; width: 480px; height: 20px;" v-model="text_data">

        </div>
        <hr>
        <div class="a" v-for="e in list" :key=e.id>
            <div class="t">
                <input type="checkbox" class="checkbox" id="myCheckbox">
                <label for="myCheckbox"></label>

                {{ e.content }}
            </div>
        
            <button :class="{important:e.isImportant}" @click="important" id="star" >★</button>
        </div>
    </div>

        

</template>

<script>


export default {
    name:'AllTodo',
    computed: {
        list() {
            return this.$store.state.TodoData.list
        }
    },
    methods:{
        update(e){
            e.preventDefault();
            console.log(this.text_data)
            this.$store.dispatch("update", this.text_data);
            console.log(this.$store.state.TodoData.list)
        },
        important(event) {
            event.preventDefault();
            const d = document.querySelector("#star")
            console.log(d)
            console.log(this.$store.state.TodoData.list)
            
        }

    }

    

}
</script>

<style>
.a {
    display: flex; /* .t 클래스의 내부 요소들을 가로 방향으로 정렬하기 위한 flexbox 설정 */
    align-items: center; /* 체크박스와 .t 클래스의 내부 요소들을 수직 중앙 정렬하기 위한 속성 */
    width: auto;
    height: 60px;
    border: 1px solid gray;
    margin-top: 12px;
    border-radius: 10px;
    line-height: 10px;
}

.t {
    display: flex; /* 내부 요소를 가로 방향으로 정렬하기 위한 flexbox 설정 */
    align-items: center; /* 체크박스와 글자 요소를 수직 중앙 정렬하기 위한 속성 */
}

.span {
    margin-top: 0px;
}

#star {
    display: inline-block; margin-left: auto;
    margin-right: 13px;
    background-color: white;
    border: none;
    font-size: 20px;
}


input[type="checkbox"] {
  -webkit-appearance: none; /* Safari, Chrome 등의 웹 브라우저에서 기본적으로 적용되는 스타일 제거 */
  -moz-appearance: none; /* Firefox 웹 브라우저에서 기본적으로 적용되는 스타일 제거 */
  appearance: none; /* 다른 웹 브라우저에서 기본적으로 적용되는 스타일 제거 */
  width: 20px; /* 체크박스 너비 설정 */
  height: 20px; /* 체크박스 높이 설정 */
  border-radius: 50%; /* 동그라미 모양으로 만들기 위해 박스 모양의 모서리를 모두 둥글게 조정 */
  border: 2px solid #555353; /* 체크박스 테두리 설정 */
  position: relative; /* 체크박스와 체크박스 라벨을 감싸는 컨테이너를 위한 position 속성 설정 */
  margin-right: 10px; /* 체크박스와 체크박스 라벨 사이의 간격 설정 */

  margin-top: 0; /* 기존 margin-top 속성 삭제 */
  display: inline-block; /* 체크박스를 인라인 요소로 설정 */
  vertical-align: middle; /* 체크박스를 수직 중앙 정렬하기 위한 속성 */
  
}

/* 체크박스 선택됐을 때, 안의 색칠된 동그라미 스타일 */
input[type="checkbox"]:checked::before {
  content: "✔"; /* 체크박스 선택됐을 때, 체크박스 내부에 표시될 문자 설정 */
  font-size: 16px; /* 체크박스 내부 문자 크기 설정 */
  color: #10af4d; /* 체크박스 내부 문자 색상 설정 */
  position: absolute; /* 체크박스 내부 문자를 위치시키기 위한 position 속성 설정 */
  top: 50%; /* 체크박스 내부 문자의 수직 위치를 조정 */
  left: 50%; /* 체크박스 내부 문자의 수평 위치를 조정 */
  transform: translate(-50%, -50%); /* 체크박스 내부 문자의 위치를 조정 */
}

/* 체크박스 라벨 스타일 */
label[for="myCheckbox"] {
  font-size: 16px; /* 체크박스 라벨 글꼴 크기 설정 */
  color: #333; /* 체크박스 라벨 글꼴 색상 설정 */
}

.important {
    color: rgb(255, 198, 11);
}



</style>