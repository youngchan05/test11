import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Metting from '@/views/Metting'
import MettingList from '@/views/MettingList'
import MettingDetail from '@/views/MettingDetail'
import MettingBelong from '@/views/MettingBelong'
import MettingStep2 from '@/views/MettingStep2'
import RegisterStep01 from '@/views/RegisterStep01'
import RegisterStep02 from '@/views/RegisterStep02'
import RegisterStep03 from '@/views/RegisterStep03'
import RegisterStep04 from '@/views/RegisterStep04'
import BoardDetail from '@/views/BoardDetail'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Metting',
    name: 'Metting',
    component: Metting
  },
  {
    path: '/MettingList',
    name: 'MettingList',
    component: MettingList
  },
  {
    path: '/MettingBelong',
    name: 'MettingBelong',
    component: MettingBelong
  },
  {
    path: '/MettingDetail',
    name: 'MettingDetail',
    component: MettingDetail
  },
  {
    path: '/MettingStep2',
    name: 'MettingStep2',
    component: MettingStep2
  },
  {
    path: '/RegisterStep01',
    name: 'RegisterStep01',
    component: RegisterStep01
  },
  {
    path: '/RegisterStep02',
    name: 'RegisterStep02',
    component: RegisterStep02
  },
  {
    path: '/RegisterStep03',
    name: 'RegisterStep03',
    component: RegisterStep03
  },
  {
    path: '/RegisterStep04',
    name: 'RegisterStep04',
    component: RegisterStep04
  },
  {
    path: '/BoardDetail',
    name: 'BoardDetail',
    component: BoardDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
