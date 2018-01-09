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
          <div class="operation">
            <el-dropdown>
              <span class="el-dropdown-link">
                操作
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>编辑</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="date">10月10日</div>
        </li>
        
      </ul>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next" :page-size="15" :total="16">
      </el-pagination>
    </div>
  </div>
</template>


<style lang="less">
  @import url('./message.less');

</style>

<script>
  export {
    default
  }
  from './message.js'

</script>
