<template>
    <div class="home">
        <div class="header-box">
            <div class="content">
                <h1>我的空间 的空间</h1>
                <p>我的介绍</p>
                <el-button type="text" class="exit-btn">退出登录</el-button>
            </div>
        </div>
        <div class="nav">
            <div class="content">
                <el-menu
                    :default-active="activeIndex2"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="transparent"
                    text-color="#fff"
                    active-text-color="#ffffff"
                    :router="true">
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
        <div class="body">
            <div class="content">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>


export default {
   data() {
        return {
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less">
    @import url('./less/home.less');
  
</style>
