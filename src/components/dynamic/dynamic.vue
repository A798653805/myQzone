<template>
  <div class="dy-window">
    <div class="dy-header">
      <div class="title-box">
        <p class="name">{{name}}</p>
        <p class="data">10月11日 16:40</p>
        <el-button class="del" type="text">删除</el-button>
      </div>
    </div>
    <div class="dy-body">
      <div class="message">
        <p>{{msg}}</p>
      </div>
      <div class="btn">
        <el-button type="text" @click="touchNice">点赞</el-button>
        <el-button type="text" @click="autoFocus">评论</el-button>
      </div>
      <div class="line"></div>
    </div>
    <div class="dy-footer ">
      <div class="nice-list">
        <p class="msg">{{niceNum}}个人觉得很赞</p>
      </div>
      <ul>
        <li>
          <comment
            msg="呀就是这个样子呀就是这个样子呀就是这个样子呀就是这个样子呀"
            name="小公主"
            ref="comment"
            :autosizeFlag="autosizeFlag"
          ></comment>
        </li>
      </ul>

    </div>
  </div>
</template>

<style lang="less">
  @import url('../../../static/less/common.less');
  @import url('./less/dynamic.less');

</style>

<script>
  import {
    dynamic
  } from './dynamic.js'

  export default dynamic

</script>
