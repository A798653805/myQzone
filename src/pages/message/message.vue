<template>
  <div class="blog-box">
    <div class="title-box">
      <div class="title">
        博客
      </div>
    </div>
    <div class="search-box">
      <el-input class="search" clearable size="mini" placeholder="输入要搜索的博客"></el-input>
    </div>
    <div class="blog-list">
      <ul>
        <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
        </li> 
        <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
          <div class="menu"></div>
        </li>
         <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
        </li>
         <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
        </li>
         <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
        </li>
         <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
        <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
        </li>
        <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
        </li>
        <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
        </li>
        <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
        </li>
        <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
        </li>
        <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
        </li>
        <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
        </li>
        <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
        </li>
        <li class="blog-item">
          <div class="name">你是大傻子</div>
          <div class="date">10月10日</div>
        </li>
      </ul>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next" page-size="15" :total="50">
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
