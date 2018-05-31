<template>
  <div class="msgboard-box">
      <div class="title">
        留言板
      </div>
      <div class="text-box">
        <el-input type="textarea" class="input" :rows="3" v-model="content"></el-input>
        <el-button class="sub-msg" size="mini" type="primary" @click="sendMsg">发表</el-button>
      </div>
      <ul>
        <li class="msg-item" v-for="item in msgArr" :key="item._id">
          <div class="msg">
            <span class="name">{{item.user_id.nickname}}:</span>
            <p>{{item.content}}</p>
          </div>
          <!-- <div class="date">2010-10-10</div> -->
        </li>
      </ul>
      <el-button class="msg" type="text" @click="goMsg">查看更多留言</el-button>
    </div>
</template>

<style lang="less">
   .msgboard-box {
    padding: 10px;
    float: left;
    margin-top: 14px;
    width: 240px;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 #ffffff;
    .title {
      padding-bottom: 20px;
      font-weight: 700;
    }
    .text-box {
      overflow: hidden;
      .sub-msg {
        margin-top: 8px;
        float: right;
      }
      textarea {
        resize: none;
      }
    }
    .msg-item {
      overflow: hidden;
      border-bottom: #606266 solid 1px;
      padding: 5px;
      vertical-align: top;
      .msg{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        max-height: 68px;
        line-height: 16px;
        font-size: 10px;
        .name {
          color: #409EFF;
        }
        p {
          display: inline;
        }
      }
      .date {
        font-size: 10px;
        color: #909399;
      }
    }
  }
</style>

<script>
import { verify } from '../../components/utils/verify';
export default {
  data(){
    return {
      msgArr: [],
      content: '',
      target: this.$route.query.friend || '',
    }
  },
  methods:{
    goMsg(){
      this.$router.push({
        name: 'messageBoard'
      })
    },
    getMsg(){
      this.axios.post('/api/msg/getmsg').then(res=>{
        if(verify(res.flag)){
          this.msgArr = res.data.map(item=>item);
          console.log('222222',this.msgArr);
        }
      })
    },
    sendMsg(){
         this.axios.post('/api/msg/sendmsg',{
        target: this.target,
        content: this.content
      }).then(res=>{
        if(verify(res.flag)){
          this.$message({
            message: res.message,
            type: 'success'
          })
          this.getMsg();
        }
      })
    }
  },
  created(){
    this.getMsg();
  }
}
</script>

