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
      <register-input></register-input>
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
