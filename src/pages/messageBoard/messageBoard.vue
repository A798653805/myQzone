<template>
  <div class="messageboard-box">
      <div class="title">
        留言板
      </div>
      <div class="leave-note">
        <el-input type="textarea" v-model="content" placeholder="请输入留言内容" :rows="4"></el-input>
        <el-button type="primary" class="leave-note-btn" @click="sendMsg">留言</el-button>
      </div>
      <div class="messageboard">
        <div class="msgitem" v-for="item in msgArr" :key="item._id">
          <div class="user-name">{{item.user_id.nickname}}：</div>
          <div class="user-msg">{{item.content}}</div>
          <el-button size="mini" type="danger" @click="delMsg(item._id)" class="del-button">删除</el-button>
        </div>
      </div>
  </div>
</template>

<style lang="less">
@import url('./message.less');
</style>

<script>
 import {
    verify
  } from '../../components/utils/verify';
export default {
  data(){
    return {
      target: this.$route.query.friend || '',
      content: '',
      msgArr: []
    }
  },
  methods:{
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
    },
    getMsg(){
      this.axios.post('/api/msg/getmsg').then(res=>{
        if(verify(res.flag)){
          this.msgArr = res.data.map(item=>item);
        }
      })
    },
    delMsg(id){
      this.axios.post('/api/msg/delmsg',{
        id: id
      }).then(res=>{
        if(verify(res.flag)){
          this.$message({
            message: res.message,
            type: 'success'
          });
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
