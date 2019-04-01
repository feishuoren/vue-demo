import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/common/Home.vue'
import Login from './components/pages/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: '404',
      component: () => import('./components/pages/404.vue')
    }
  ]
})
