<template>
  <div class="login-body">
    <el-form :model="loginForm" labelWidth="55px" ref="rulesForm" :rules="rules" label-position="left" class="form">
      <el-form-item label="用户名" prop="username">
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
</template>

<style lang="less">
  @import url('./loginInput.less');

</style>

<script>
  export {
    default
  } from './loginInput.js'

</script>
