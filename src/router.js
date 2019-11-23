import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Dashboard from './components/Dashboard.vue'
import SignIn from './components/SignIn.vue'

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
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn
    }
  ]
})