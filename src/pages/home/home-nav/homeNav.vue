<template>
  <div class="nav">
      <div class="content">
        <el-menu :default-active="activeIndex2" mode="horizontal" @select="handleSelect" background-color="transparent" text-color="#fff"
          active-text-color="#ffffff" :router="true">
          <el-menu-item index="1" route="/home">我的主页</el-menu-item>
          <el-menu-item index="2" route="/home/message">博客</el-menu-item>
          <el-menu-item index="3" route="/home/photo">相册</el-menu-item>
          <el-menu-item index="4" route="/home/messageBoard">留言板</el-menu-item>
          <el-menu-item index="5" route="/home/mood">心情</el-menu-item>
          <el-menu-item index="6" route="/home/friendList">好友列表</el-menu-item>
          <el-menu-item index="7" route="/home/personFiles">个人档案</el-menu-item>
          <el-menu-item index="8" route="/home/personCenter">个人中心</el-menu-item>
        </el-menu>
      </div>
    </div>
</template>

<style lang="less">

</style>

<script>
export {default} from './homeNav.js'
</script>



