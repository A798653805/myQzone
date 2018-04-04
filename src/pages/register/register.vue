<template>
  <div class="content">
    <div class="header">
      <h1><i class="iconfont icon-qzone"></i>个人空间</h1>
    </div>
    <div  class="register-box">
      <div class="register-header">
        <div class="remind">
          <h2>注册</h2>
        </div>
      </div>
      <div class="under-line"></div>
      <div class="register-body"  >
        <el-form :model="registerForm"  labelWidth="80px" ref="rulesForm" :rules="rules" label-position="left" class="form">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="registerForm.username" class="input" size="small" placeholder="请输入用户名" id="username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registerForm.password" class="input" size="small" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="repassword" id="repwd">
            <el-input type="password" v-model="registerForm.repassword" class="input" size="small" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item class="form-btn">
            <el-button type="primary" class="reg-btn" @click="submitForm('rulesForm')">注册</el-button>
            <el-button @click="returnLogin">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<style lang="less">
  @import url("./less/register");
</style>

<script>
  import {register} from './register';
  export default register;
</script>
