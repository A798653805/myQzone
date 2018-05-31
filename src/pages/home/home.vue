<template>
  <div class="home">
    <div class="header-box">
      <div class="content">
        <h1>{{nickname}} 的空间</h1>
        <p class="introduction">{{introduction}}</p>
        <el-button type="text" class="exit-btn" @click="checkoutlogin">
          <i class="iconfont icon-exit" ></i>退出登录
        </el-button>
      </div>
    </div>
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
        </el-menu>
      </div>
    </div>
    <div class="body-box">
      <div class="content">
        <div class="wrap-box">
          <div class="wrap-container">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { verify } from '../../components/utils/verify';
  export default {
    data() {
      return {
        activeIndex2: '1',
        nickname: '',
        introduction: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        sessionStorage.setItem('index',key);
        this.activeIndex2 = sessionStorage.getItem('index');
      },
      getName(){
        this.axios.post('/api/users/getname').then((res)=>{
         if(verify(res.flag)){
           this.nickname = res.nickname;
           this.introduction = res.introduction;
         }
        })
      },
      checkoutlogin(){
        this.$router.push({
          path: '/#/login'
        })
        sessionStorage.clear();
      }
    },
    created(){
      this.getName();
      sessionStorage.setItem('index',1);
      this.activeIndex2 = sessionStorage.getItem('index');
    }
  }

</script>

<style lang="less">
  @import url('./less/home.less');

</style>
