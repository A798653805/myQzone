<template>
  <div class="friend-box">
    <div class="title-box">
      好友列表
    </div>
    <div class="btn-box">
      <el-button type="primary" @click="dialogVisible = true">添加好友</el-button>
      <el-button @click="dialogMessageVisible = true">消息提醒</el-button>
    </div>
    <div class="list-box">
      <div class="list-item">
        <img src="static/imgs/top.jpg" class="avatar" alt="">
        <div class="info">
          <div class="name">哈哈</div>
          <div class="introduce" title="哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
        </div>
        <div class="operation">
          <el-button type="text" size="mini">删除</el-button>
          <el-button type="text" size="mini">访问</el-button>
        </div>
      </div>
    </div>
    <el-dialog title="添加好友" :visible.sync="dialogVisible" :center="true">
      <el-form :model="form">
        <el-form-item label="好友账号" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
      </el-form>
      <div class="new-friend-info">
        <div class="list-item" v-show="exis">
          <img src="static/imgs/top.jpg" class="avatar" alt="">
          <div class="info">
            <div class="name">哈哈</div>
            <div class="introduce">哈哈哈</div>
          </div>
          <div class="operation">
            <el-button size="mini">添加</el-button>
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
        <div class="list-item" v-show="exis">
          <img src="static/imgs/top.jpg" class="avatar" alt="">
          <div class="info">
            <div class="name">哈哈</div>
            <div class="introduce">哈哈哈</div>
          </div>
          <div class="operation">
            <el-button size="mini" type="primary">同意</el-button>
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
  export default {
    data(){
      return{
        dialogVisible: false,
        dialogMessageVisible: false,
        exis: false,
        form: {
          username: ''
        }
      }
    }
  }

</script>
