<template>
  <div class="answerWrapper">
    <div class="title">
      <h3>欢迎进入答题抽奖</h3>
    </div>
    <div class="enterAnswer">
      <span style="background:transparent;">LOGO</span>
      <span>排行</span>
      <span>进入</span>
    </div>
    <div class="notes" @click="showNotes">
      <i class="el-icon-question" style="color: red"></i>活动说明
    </div>
    <el-dialog
      title="活动提示"
      :visible.sync="showNoteDialog"
      height="600px"
      width="80%">
      <span>活动时间</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="showNoteDialog = false">取 消</el-button>
    <el-button type="primary" @click="showNoteDialog = false">确 定</el-button>
  </span>
    </el-dialog>
    <div class="main">
      <div class="upper">
        <div class="center">
          <span>開</span>
        </div>
      </div>
    </div>
    <div class="answerArea">
      <p>主办方: xx市人民政府</p>
      <p>承办方: xx市委依法办,xx市司法局</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EnterIndex',
    data() {
      return {
        showNoteDialog: false,
      }
    },
    methods: {
      showNotes() {
        this.showNoteDialog = true;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .enterAnswer {
    width: 100%;
    height: 60px;
    margin: 0 0 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .enterAnswer span{
    height: 40px;
    width: 70px;
    line-height: 40px;
    font-size: 20px;
    background: pink;
    border-radius: 3px;
  }
  .answerArea p {
    float: left;
    margin: 5px 10px;
  }

  .center {
    width: 20vh;
    height: 20vh;
    background: yellow;
    position: absolute;
    border-radius: 50%;
    left: 12vh;
    top: 28vh;
    cursor: pointer;
  }

  .center span {
    line-height: 20vh;
    font-size: 60px;
    margin: 30px auto;
  }

  .upper {
    /*width: ;*/
    position: relative;
    height: 40vh;
    border-radius: 3vh 3vh 40% 40%;
    background: #ff3333;
    border-bottom: 1px solid #880000;
  }

  .main {
    width: 80%;
    height: 60vh;
    margin: 4vh auto;
    background: #ee0000;
    border-radius: 3vh;
  }

  .notes {
    height: 20px;
    font-size: 20px;
    margin-left: auto;
    margin-right: 20px;
    margin-top: 20px;
    line-height: 20px;
  }

  .title {
    width: 60%;
    height: 30px;
    margin: 10px auto;
    line-height: 30px;
    font-size: 16px;
    background: #ffff44;
    border-radius: 5px;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .answerWrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #ddffff, #00dddd);
  }
</style>
