<template>
  <div class="content">
    <div class="header">
      <h1><i class="iconfont icon-qzone"></i>个人空间</h1>
    </div>
      <div  class="login-box">
        <div class="login-header">
          <div class="remind">
            <h2>登陆</h2>
          </div>
        </div>
        <div class="under-line"></div>
        <div class="login-body"  >
          <el-form v-model="loginForm"  labelWidth="60px" label-position="left" class="form">
            <el-form-item label="用户名" prop="username" >
              <el-input v-model="loginForm.username" class="input" size="small" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="loginForm.password" class="input" size="small" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item class="form-btn">
              <el-button type="primary" @click="">立即登陆</el-button>
              <el-button @click="toRegister">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    <div class="footer">
    </div>
  </div>
</template>

<style lang="less" >
  @import url("./less/login");
</style>

<script>
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        // 组件
        components: {ElButton},
        // 绑定数据
        data() {
            return {
             loginForm:{
               username: '',
               password: ''
             },
            };
        },

        // 方法
        methods: {
          //跳转到注册页面
          toRegister() {
            window.location.href = 'http://localhost:8080/#/register'
          }
        },

        // dom创建
        created() {
          setTimeout(function () {
            this.showFlag = true;
            console.log(this.showFlag);
          },2000);

        },

        // dom挂载完成
        mounted() {

        }
    }
</script>
