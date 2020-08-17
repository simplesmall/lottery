<template>
  <div>
    <div class="answerWrapper">
      <!--  返回按钮及第几题提示    -->
      <div class="header">
        <div class="back" @click="back"><i class="el-icon-arrow-left" style="font-size: 24px"></i></div>
        <div class="title">第一关</div>
      </div>
      <!--  问题区域    -->
      <div class="question">
        十八届三中全会通过的《中共中央关于全面深化改革若干重大问题的决定》强调要完善党的（ ）
        <div class="isSingle" :style="questionType">多选</div>
      </div>
      <!--  供选择的选项区域  -->
      <div class="chooseList">
        <div v-for="(item,index) in question.answer" :key="index">
          <div class="answerItem">
            <input type="checkbox" :name="item" :value="item.bandage" :id="item" v-model="checkedList">
            <label :for="item">{{item.bandage}}.{{item.content}}</label>
          </div>
        </div>
        <div style="margin-top: 30px;">已选答案： <span v-for="(item,ind) in checkedList" :key="ind">{{item}}</span></div>
      </div>
      <!--  答案对错及解析显示页面    -->
      <div class="upload">
        <div class="prev">上一题</div>
        <div class="error"><i class="el-icon-edit"></i>题目报错</div>
        <div class="ensure">确认提交</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Answer",
    data() {
      return {
        checkedList: [],
        question: {
          content: '',
          type: 0,
          answer: [
            {bandage: 'A', content: '领导班子'},
            {bandage: 'B', content: '领导体制'},
            {bandage: 'C', content: '执政方式'},
            {bandage: 'D', content: '领导体制和执政体制'},
          ]
        }
      }
    },
    computed: {
      questionType: function () {
        let radio = 'background: red;';
        let check = 'background: #fff;'
        return this.question.type == 1 ? check : radio;
      }
    },
    methods: {
      back() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .ensure{
    width: 25%;
    height: 40px;
    line-height: 40px;
    margin: auto 0;
    background: #57c0ff;
    color: white;
    border-radius: 20px;
  }
  .error{
    width: 25%;
    height: 20px;
    font-size: 14px;
    background: #e9f9ff;
    margin: auto 0;
    line-height: 20px;
    border-radius: 10px;
  }
  .prev{
    background: #e9f9ff;
    width: 25%;
    line-height: 40px;
    margin:auto 0;
    border-radius: 20px;
    height: 40px;
    color: #90d6fe;
  }
  .upload {
    width: 100%;
    height: 50px;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    line-height: 50px;
  }

  .answerItem {
    width: 80%;
    height: 40px;
    background: white;
    padding-left: 20px;
    margin: 15px auto;
    border-radius: 12px;
    line-height: 40px;
    text-align: left;
  }

  .answerItem input[type='checkbox']:checked {
    border: 1px solid red;
  }

  .chooseList {
    background: #e2f4ff;
    flex: 1;
  }

  .isSingle {
    position: absolute;
    width: 50px;
    height: 20px;
    right: 40px;
    bottom: 10px;
    border-radius: 10px;
    text-align: center;
  }

  .question {
    position: relative;
    width: 100%;
    padding-top: 20px;
    min-height: 25vh;
    background: #ebebeb;
    max-height: 25vh;
    overflow: hidden;
    text-align: start;
  }

  .answerWrapper {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    /*background: linear-gradient(to bottom, #f0f0f0, #ff5566);*/
  }

  .header {
    width: 100%;
    height: 8vh;
    background: #ebebee;
    display: flex;
    flex-direction: row;
    line-height: 8vh;
    border-bottom: 1px solid darkgray;
    font-size: 24px;
  }

  .back {
    width: 8vh;
    height: 8vh;
    /*background: yellow;*/
  }

  .title {
    width: 100%;
    margin: 0 auto;
    color: red;
  }
</style>
