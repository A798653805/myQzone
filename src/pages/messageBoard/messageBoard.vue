<template>
  <div class="messageboard-box">
      <div class="title">
        留言板
      </div>
      <div class="leave-note">
        <el-input type="textarea" placeholder="请输入留言内容" :rows="4"></el-input>
        <el-button type="primary" class="leave-note-btn">留言</el-button>
      </div>
      <div class="messageboard">
        <div class="msgitem">
          
        </div>
      </div>
  </div>
</template>

<style lang="less">
@import url('./message.less');
</style>
