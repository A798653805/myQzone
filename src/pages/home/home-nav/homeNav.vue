<template>
  <div class="nav">
      <div class="content">
        <el-menu :default-active="activeIndex2" mode="horizontal" @select="handleSelect" background-color="transparent" text-color="#fff"
          active-text-color="#ffffff" :router="true">
          <el-menu-item index="/home" route="/home">我的主页</el-menu-item>
          <el-menu-item index="/home/message" route="/home/message">日志</el-menu-item>
          <el-menu-item index="/home/photo" route="/home/photo">相册</el-menu-item>
          <el-menu-item index="/home/messageBoard" route="/home/messageBoard">留言板</el-menu-item>
          <el-menu-item index="/home/mood" route="/home/mood">说说</el-menu-item>
          <el-menu-item index="/home/friendList" route="/home/friendList">好友列表</el-menu-item>
          <el-menu-item index="/home/personFiles" route="/home/personFiles">个人档案</el-menu-item>
          <el-menu-item index="/home/personCenter" route="/home/personCenter">个人中心</el-menu-item>
        </el-menu>
      </div>
    </div>
</template>

<style lang="less">

</style>

<script>
export {default} from './homeNav.js'
</script>



