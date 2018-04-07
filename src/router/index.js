import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login.vue'
import Register from '../pages/register/register.vue'
import Home from '../pages/home/home.vue'

import AddFriend from '../pages/addFriend/addFriend.vue' //添加朋友
import FriendList from '../pages/friendList/friendList.vue' //好友列表
import Message from '../pages/message/message.vue' //博客
import MessageBoard from '../pages/messageBoard/messageBoard.vue'  //浏览板
import Mood from '../pages/mood/mood.vue'
import MyHome from '../pages/myHome/myHome.vue' //我的主页
import PersonCenter from '../pages/personCenter/personCenter.vue' //个人中心
import PersonFiles from '../pages/personFiles/personFiles.vue'  //个人档案
import Photo from '../pages/photo/photo.vue' //相册

import Neng from '../pages/neng.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
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
      children:[
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
          component: Message
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
      ]
    }
  ]
})
