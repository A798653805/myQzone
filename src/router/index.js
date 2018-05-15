import Vue from 'vue'
import Router from 'vue-router'
import {
  Message
} from 'element-ui'
import Cookie from "js-cookie";

import Login from '../pages/login/login.vue'
import Register from '../pages/register/register.vue'
import Home from '../pages/home/home.vue'

import AddFriend from '../pages/addFriend/addFriend.vue' //添加朋友
import FriendList from '../pages/friendList/friendList.vue' //好友列表
import Blog from '../pages/message/message.vue' //博客
import MessageBoard from '../pages/messageBoard/messageBoard.vue'  //浏览板
import Mood from '../pages/mood/mood.vue'
import MyHome from '../pages/myHome/myHome.vue' //我的主页
import PersonCenter from '../pages/personCenter/personCenter.vue' //个人中心
import PersonFiles from '../pages/personFiles/personFiles.vue'  //个人档案
import Photo from '../pages/photo/photo.vue' //相册
import PhotoList from '../pages/photoList/photoList.vue' //相册


import Neng from '../pages/neng.vue'


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/neng',
      name: 'neng',
      component: Neng
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'MyHome',
          component: MyHome
        }, {
          path: 'addFriend',
          name: 'addFriend',
          component: AddFriend
        },
        {
          path: 'friendList',
          name: 'friendList',
          component: FriendList
        },
        {
          path: 'message',
          name: 'message',
          component: Blog
        },
        {
          path: 'messageBoard',
          name: 'messageBoard',
          component: MessageBoard
        },
        {
          path: 'mood',
          name: 'mood',
          component: Mood
        },
        {
          path: 'personCenter',
          name: 'personCenter',
          component: PersonCenter
        },
        {
          path: 'personFiles',
          name: 'personFiles',
          component: PersonFiles
        },
        {
          path: 'photo',
          name: 'photo',
          component: Photo
        },
        {
          path: 'photoList',
          name: 'photoList',
          component: PhotoList
        },
      ]
    }
  ]
})

router.beforeEach((to,from,next)=>{
  var userInfo = sessionStorage.getItem('token');//获取浏览器缓存的用户信息
  if (userInfo) {//如果有就直接到首页咯
    next();
  } else {
    if (to.path == '/login' || to.path == '/register' || to.path == '/neng') {//如果是登录页面路径，就直接next()
      next();
    } else {//不然就跳转到登录；
      next('/login');
      Message.error({
        message: '请先登录'
      });
    }

  }
})

export default router
