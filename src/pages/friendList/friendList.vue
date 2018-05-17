<template>
  <div class="friend-box">
    <div class="title-box">
      好友列表
    </div>
    <div class="btn-box">
      <el-button type="primary" @click="openFriendDialog">添加好友</el-button>
      <el-button @click="dialogMessageVisible = true">消息提醒</el-button>
    </div>
    <div class="list-box">
      <div class="list-item" v-for="item in friendArr" :key="item.friend_id._id">
        <img src="static/imgs/top.jpg" class="avatar" alt="">
        <div class="info">
          <div class="name">{{item.friend_id.nickname}}</div>
          <div class="introduce" title="哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈">{{item.friend_id.introduction}}</div>
        </div>
        <div class="operation">
          <el-button type="text" size="mini" @click="delFriend(item.friend_id._id)">删除</el-button>
          <el-button type="text" size="mini">访问</el-button>
        </div>
      </div>
    </div>
    <el-dialog title="添加好友" :visible.sync="dialogVisible" :center="true">
      <el-form :model="form">
        <el-form-item label="好友账号" prop="username">
          <el-input v-model="form.username"></el-input>
          <el-button type="primary" @click="findFriend">查找</el-button>
        </el-form-item>
      </el-form>
      <div class="new-friend-info">
        <div class="list-item" v-show="exis">
          <img src="static/imgs/top.jpg" class="avatar" alt="">
          <div class="info">
            <div class="name">{{friendInfo.nickname}}</div>
            <div class="introduce">{{friendInfo.introduction}}</div>
          </div>
          <div class="operation">
            <el-button size="mini" @click="addFriend">添加</el-button>
          </div>
        </div>
        <div class="nodata" v-show="!exis">
          没有相关数据
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary">完 成</el-button>
      </div>
    </el-dialog>
    <el-dialog title="好友请求" :visible.sync="dialogMessageVisible" :center="true">
      <div class="new-friend-info">
        <div class="list-item" v-show="exis" v-for="item in messageArr" :key="item._id">
          <img src="static/imgs/top.jpg" class="avatar" alt="">
          <div class="info">
            <div class="name">{{item.user_id.nickname}}</div>
            <div class="introduce">{{item.user_id.introduction}}</div>
          </div>
          <div class="operation">
            <el-button size="mini" type="primary" @click="handleMessage(1,item._id)">同意</el-button>
            <el-button size="mini" type="primary" @click="handleMessage(0,item._id)">拒绝</el-button>
          </div>
        </div>
        <div class="nodata" v-show="!exis">
          没有相关数据
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogMessageVisible = false">取 消</el-button>
        <el-button type="primary">完 成</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="less">
  @import url('./less/friendList.less');

</style>

<script>
  import {
    verify
  } from "../../components/utils/verify";
  export default {
    data() {
      return {
        dialogVisible: false,
        dialogMessageVisible: false,
        exis: false,
        form: {
          username: ''
        },
        friendInfo: {
        },
        messageArr: [],
        friendArr:[]
      }
    },
    methods: {
      openFriendDialog() {
        this.dialogVisible = true;
        this.exis = false;
      },
      closeFriendDialog() {
        this.form.username = '';
        this.dialogVisible = false;
      },
      openMessageDialog() {
        this.dialogVisible = true;
     
        if(this.messageArr.length>0){
             this.exis = true;
        }else{
          this.exis = false
        }
       
      },
      closeMessageDialog() {
        this.form.username = '';
        this.dialogVisible = false;
      },
      findFriend() {
        if (this.form.username.length >= 6 && this.form.username.length <= 14) {
          this.axios.get(`/api/friend/findfriend?username=${this.form.username}`).then(res => {
            if (verify(res)) {
              if (res.data) {
                this.exis = true;
                this.friendInfo = res.data;
              }else{
                this.$message({
                  message: '没有相关信息',
                  type: 'error'
                })
                this.exis = false
              }
            }
          })
        } else {
          this.$message({
            message: '请输入6-14位的账号',
            type: 'error'
          })
        }
      },
      addFriend() {
        this.axios.post('/api/friend/addfriend', {
          friendId: this.friendInfo._id
        }).then(res => {
          if (verify(res.flag)) {
            this.$message({
              message: '成功发送请求',
              type: 'success'
            })
          }
        })
      },
      getMessage(){
        this.axios.post('/api/friend/getmessage').then(res=>{
          if(verify(res.flag)){
            if(res.data){
              this.messageArr = res.data.map(item=>item);
              this.exis = true;
            }else{
              this.exis = false;
            }
          }
        });
      },
      handleMessage(status,id){
        this.axios.post('/api/friend/handlemessage',{
          status: status,
          id: id
        }).then(res=>{
          if(verify(res.flag)){
            this.$message({
              message: res.message,
              type: 'success'
            })
          }
        })
        this.getMessage();
      },
      getFriend(){
        this.axios.post('/api/friend/getfriend').then(res=>{
          if(res.data){
            this.exis = true;
            this.friendArr = res.data.map(item=>item);
          }
        })
      },
      delFriend(id){
        this.axios.post('/api/friend/delfriend',{
          friendId: id
        }).then(res=>{
          if(verify(res.flag)){
            this.$message({
              message: res.message,
              type: 'success'
            });
            this.getFriend();
          }
        })
      }
    },
    created(){
       this.getMessage();
       this.getFriend();
    }
  }

</script>
