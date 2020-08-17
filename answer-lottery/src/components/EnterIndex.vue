<template>
  <div class="answerWrapper">
    <div class="title">
      <h3>欢迎进入答题抽奖</h3>
    </div>
    <div class="enterAnswer">
      <div class="flag"></div>
      <span @click="openSort">
        <div class="dance">
          <div class="first"></div>
          <div class="second"></div>
          <div class="third"></div>
        </div>
      </span>
      <span><router-link to="/answer">start</router-link></span>
    </div>
    <el-dialog
      title="积分排行"
      :visible.sync="showSortDialog"
      top="20vh"
      width="80%"
      custom-class="rank"
    >
      当前有积分<span>{{myObj.integral}}</span>分, 答题积分<span>{{myObj.int_answer}}</span>分,分享积分<span>{{myObj.int_share}}</span>分,
      邀请积分<span>{{myObj.int_invite}}</span>分,分享朋友圈<span>{{myObj.int_group}}</span>分.
      <hr>
      当前积分排名: <span>{{myObj.intRank}}</span>,总积分排名: <span>{{myObj.intSumRank}}</span>
      <hr>
      如您有任何疑问,欢迎致电咨询0871-67676767或者直接发送邮件至someone@test.com,再次感谢对本次活动的大力支持!
      <span slot="footer" class="dialog-footer">
<!--          <el-button @click="showSortDialog = false">取 消</el-button>-->
<!--          <el-button type="primary" @click="showSortDialog = false">确 定</el-button>-->
      </span>
    </el-dialog>
    <div class="notes" @click="showNotes">
      <i class="el-icon-question" style="color: red"></i>活动说明
    </div>
    <el-dialog
      title="活动说明"
      :visible.sync="showNoteDialog"
      class="activeDecalre"
      top="10vh"
      width="80%">
        <span>
          一、活动时间 活动从2020年7月起至9月止，共五期。
        第一期（7月10日—7月17日）：已截止
        第二期（7月20日—7月31日）：已截止
        第三期（8月1日—8月10日）
        第四期（8月11日—8月21日）
        第五期（8月22日—8月31日）
        2020年9月1日：对五期活动总积分排名前100名参与者参与抽取大奖，并从中选取幸运大奖，奖金1000元。
        二、活动奖品：
        微信随机现金小红包（0.5元~8元）、中红包（9元~30元）、大红包（30~100）、超级大红包（1000元）。
        三、活动规则
        （一）答题抽奖
        每期活动，每位用户可参加1次答题抽奖活动，由系统随机抽取5题，全部答对可获得1次抽奖机会，中奖率100%。
        （二）分享抽奖
        每期活动，每位用户通过微信分享活动链接到朋友圈可获得1次抽奖机会，中奖率100%。
        （三）积分抽奖
        1、参与答题每答对1题得2积分；
        2、将本活动连接推送给好友或分享到朋友圈，每邀请成功一人得1积分，邀请积分无上限！
        3、每期积分排名前50的参与者将可参与抽取微信随机“中红包”机会，中奖比例100%。
        4、每期活动积分可以累计，五期活动总积分排名前100名可参与抽取微信随机“大红包”，中奖比例100%，并从中抽取数名幸运大奖，中奖者获得超级大红包1000元（幸运大奖名额根据活动参与人数确定，参与人数越多幸运大奖名额越多！）
        四、主办单位：中共安宁市委、安宁市人民政府
        五、承办单位：安宁市委依法治市办、安宁市司法局
        六、其他事项：
        1、微信红包即时到账，由于网络问题可能会有所延迟，若红包半小时后未能到账可在个人中心点击意见反馈，我们将及时为您核实处理。
        2、如您发现题目存在问题可以点击错题反馈，通过后台核实无误，每题系统将奖励5积分；恶意上报者后台一经发现立即移入活动黑名单。
        3、第1期活动从2020年7月10日—7月17日，主办方将投入1.6万元微信现金红包，派送完即止，先到先得。后面几期活动红包金额根据第1期活动情况而定，每期活动投入固定金额，派送完即止，先到先得。
        4、本活动仅限昆明市安宁市内人员参加，旨在激发市民学法热情。承办方不会对个人隐私泄露，也不是对公民学法成绩的测试，对恶意套取红包行为，我们将严厉打击。
        5、本活动解释权归主办方所有。
        </span>
      <span slot="footer" class="dialog-footer">
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
        showSortDialog: false,
        myObj:{
          integral:2,
          int_answer:23,
          int_share:20,
          int_invite:5,
          int_group:0,
          intRank:123,
          intSumRank:234,
        }
      }
    },
    mounted() {

    },
    methods: {
      openSort() {
        this.showSortDialog = true;
      },
      showNotes() {
        this.showNoteDialog = true;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    text-decoration: none;
  }
  .first{
    height: 3vh;
    width: 20%;
    background: white;
    margin-top: auto;
  }
  .second{
    height: 4vh;
    width: 20%;
    background: lawngreen;
    margin-top: auto;
  }
  .third{
    height: 5vh;
    width: 20%;
    background: blue;
    margin-top: auto;
  }
  .dance{
    display: flex;
    justify-content: center;
    width: 80%;
    height: 5vh;
    margin: 2px auto;
    /*background: #000;*/
  }
  .activeDecalre span{
    table-layout: fixed;
    word-break: normal;
  }
  .rank{
    font-size: 20px;
    border-radius: 5px;
  }
  .rank hr{
    margin: 10px auto;
  }
  .rank span{
    color: #ee0000;
  }
  .flag {
    width: 90px;
    height: 60px;
    /*background: #ff0077;*/
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597644824114&di=53200bf3c3621069614bdc33bd5dfd20&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F00%2F94%2F83%2F58dce2b7eefe7_610.jpg");
    background-repeat: no-repeat;
    border-radius: 30px;
    background-size: 100% 100%;
    fill: #2c3e50;
  }

  .enterAnswer {
    width: 100%;
    height: 60px;
    margin: 0 0 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .enterAnswer span:nth-child(2){
    color: yellow;
    background: #ff3455;
    box-shadow: 2px 3px 4px #000000;
  }
  .enterAnswer span:nth-child(3){
    color: springgreen;
    background: #ff5522;
    font-size: 25px;
    text-shadow: 1px 1px 1px #ffffff;
    box-shadow: 2px 3px 3px #000000;
  }

  .enterAnswer span {
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
    left: 30%;
    top: 70%;
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
    background: rgba(55,33,11,.1);
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
