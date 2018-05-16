<template>
  <div class="friend-box">
    <div class="title-box">
      好友列表
    </div>
    <div class="btn-box">
      <el-button type="primary">添加好友</el-button>
    </div>
    <div class="list-box">
      <div class="list-item">
        <img src="static/imgs/top.jpg" class="avatar" alt="">
        <div class="info">
          <div class="name">哈哈</div>
          <div class="introduce">哈哈哈</div>
        </div>
        <div class="operation">
          <el-button size="mini">删除</el-button>
          <el-button size="mini">访问</el-button>
        </div>
      </div>
      <div class="list-item">
        <img src="static/imgs/top.jpg" class="avatar" alt="">
        <div class="info">
          <div class="name">哈哈</div>
          <div class="introduce" title="哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
        </div>
        <div class="operation">
          <el-button type="text" size="mini">删除</el-button>
          <el-button type="text" size="mini">访问</el-button>
        </div>
      </div>
      <div class="list-item">
        <img src="static/imgs/top.jpg" class="avatar" alt="">
        <div class="info">
          <div class="name">哈哈</div>
          <div class="introduce">哈哈哈</div>
        </div>
        <div class="operation">
          <el-button size="mini">删除</el-button>
          <el-button size="mini">访问</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import url('./less/friendList.less');
</style>

<script>
export default {
  
}
</script>


