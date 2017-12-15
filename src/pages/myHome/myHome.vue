<template>
  <div class="myhome-box">
    <div class="overview-box">
      <div class="overview">
        <ul>
          <li>
            <a href="">
              <span>100</span>
              <p>照片</p>
            </a>
          </li>
          <li>
            <a href="">
              <span>100</span>
              <p>博客</p>
            </a>
          </li>
          <li>
            <a href="">
              <span>100</span>
              <p>心情</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="dynamic-box">
      <ul>
        <li v-for="item in items">
          <dywindow name="小少爷" msg="不想弄" :goodNum="item.goods"></dywindow>
        </li>
      </ul>
    </div>
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
  </div>
</template>

<style lang="less">
  @import url('./less/myHome.less');
</style>

<script>
  import {
    myHome
  } from "./myHome";

  export default myHome

</script>
