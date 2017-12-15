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
              <el-button type="text">评论</el-button>
          </div>
          <div class="line"></div>
      </div>
      <div class="dy-footer ">
          <div class="nice-list">
              <p class="msg">{{goodNum}}个人觉得很赞</p>
          </div>
          <div class="comment-box">
              <div class="comments">
                  <div class="comments-left">
                        <p class="name">小公主:</p>
                        <p class="date">16:40</p>
                  </div>
                  <div class="comments-rig">
                      就是这个样子呀就是这个样子呀就是这个样子呀就是这个样子呀就是这个样子呀就是这个样子呀就是这个样子呀
                  </div>
                  <el-button type="text" class="reply-btn" @click="replyFlage=true">回复</el-button>
              </div>
              <el-input type="textarea" v-model="msg" size="small" :rows="rows" :autosize="false" @focus="showStatus" @blur="replyStatus" ></el-input>
              <el-button class="btn" v-if="subFlage&&!replyFlage" type="primary">发表</el-button>
              <el-button class="btn" v-if="replyFlage" type="primary">回复</el-button>
          </div>
      </div>
  </div>
</template>

<style lang="less">
    @import url('../../../static/less/common.less');
    @import url('./less/dynamic.less');
</style>

<script>
import {dynamic} from './dynamic.js'
export default dynamic
</script>
