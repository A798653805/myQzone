import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Login from '../pages/login/login.vue'
import Register from '../pages/register/register.vue'
import Home from '../pages/home/home.vue'

Vue.use(Router);

export default new Router({
  routes: [
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
      component: Home
    }
  ]
})
