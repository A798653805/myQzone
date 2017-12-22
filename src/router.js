import Vue from 'vue'
import Router from 'vue-router'
import Login from './router/login/login.vue'
import Register from './router/register/register.vue'
import Home from './router/home/home.vue'

import AddFriend from './router/addFriend/addFriend.vue' //添加朋友
import FriendList from './router/friendList/friendList.vue' //好友列表
import Message from './router/message/message.vue' //博客
import MessageBoard from './router/messageBoard/messageBoard.vue'  //浏览板
import Mood from './router/mood/mood.vue'
import MyHome from './router/myHome/myHome.vue' //我的主页
import PersonCenter from './router/personCenter/personCenter.vue' //个人中心
import PersonFiles from './router/personFiles/personFiles.vue'  //个人档案
import Photo from './router/photo/photo.vue' //相册

import Neng from './router/neng.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
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
