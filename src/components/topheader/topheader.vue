<template>
    <div class="header-box">
        <div class="content">
            <el-menu
                :default-active="activeIndex2"
                class="el-menu-nav"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1" class="p-center">个人中心</el-menu-item>
                <el-submenu index="2" class="el-menu-nav-list">
                    <template slot="title">我的主页</template>
                    <el-menu-item index="2-1">博客</el-menu-item>
                    <el-menu-item index="2-2">相册</el-menu-item>
                    <el-menu-item index="2-3">留言板</el-menu-item>
                    <el-menu-item index="2-3">心情</el-menu-item>
                </el-submenu>
                <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">添加好友</a></el-menu-item>
                <el-menu-item index="4" class="exit">退出</el-menu-item>
            </el-menu>
        </div>
        
    </div>
</template>

<style lang="less">
    @import url('./less/topheader.less');
</style>

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
