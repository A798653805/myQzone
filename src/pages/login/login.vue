<template>
  <div class="content">
    <div class="header">
      <h1><i class="iconfont icon-kongjian"></i>个人空间</h1>
    </div>
      <div  class="login-box">
        <div class="login-header">
          <div class="remind">
            <h2>登陆</h2>
          </div>
        </div>
        <div class="under-line"></div>
        <div class="login-body"  >
          <el-form :model="loginForm"  labelWidth="55px" ref="rulesForm" :rules="rules" label-position="left" class="form">
            <el-form-item label="用户名" prop="username" >
              <el-input v-model="loginForm.username" class="input" size="small" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="loginForm.password" class="input" size="small" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item class="form-btn">
              <el-button type="primary" @click="submitForm('rulesForm')">登陆</el-button>
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
  import {login} from './login';
  export default login;
</script>
