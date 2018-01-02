<template>
  <div class="msgboard-box">
      <div class="title">
        留言板
      </div>
      <div class="text-box">
        <el-input type="textarea" class="input" :rows="3"></el-input>
        <el-button class="sub-msg" size="mini" type="primary">发表</el-button>
      </div>
      <ul>
        <li class="msg-item">
          <div class="msg">
            <span class="name">下没声:</span>
            <p>你是我的加快速度副教授积分时代峻峰考虑到开了房间</p>
          </div>
          <div class="date">2010-10-10</div>
        </li>
        <li class="msg-item">
          <div class="msg">
            <span class="name">下没声:</span>
            <p>你是我的加快速度副教授积分时代峻峰考虑到开了房间</p>
          </div>
          <div class="date">2010-10-10</div>
        </li>
        <li class="msg-item">
          <div class="msg">
            <span class="name">下没声:</span>
            <p>你是我的加快速度副教授积分时代峻峰考虑到开了房间</p>
          </div>
          <div class="date">2010-10-10</div>
        </li>
      </ul>
      <el-button class="msg" type="text">查看更多留言</el-button>
    </div>
</template>

<style lang="less">
  @import url('./messageBoard.less');
</style>

<script>
export {default} from './messageBoard.js'
</script>

