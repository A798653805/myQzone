<template>
  <div class="blog-box">
    <div class="title-box">
      <div class="title">
        博客
      </div>
    </div>
    <div class="funtion-box">
      <el-button size="mini" type="primary" @click="goNewBlog">新建文章</el-button>
      <el-button class="search-btn" size="mini" type="primary">查询</el-button>
      <el-input class="search" clearable size="mini" placeholder="输入要搜索的博客"></el-input>
    </div>
    <div class="blog-list">
      <div v-for="item in BlogList" :key="item._id" class="blog-item" >
        <div class="info" @click="goBlogContent(item._id)">
          <div class="name">{{item.title}}</div>
          <div class="date">{{item.created_time}}</div>
        </div>
        <div class="operation">
          <el-dropdown @command="operation">
            <span class="el-dropdown-link">
              操作
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="0+' '+item._id">编辑</el-dropdown-item>
              <el-dropdown-item :command="1+' '+item._id">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next" :page-size="15" :total="16">
      </el-pagination>
    </div>
  </div>
</template>

<style lang="less">
  @import url('./less/message.less');

</style>

<script>
  import {
    blog
  } from './message'
  export default blog;

</script>
