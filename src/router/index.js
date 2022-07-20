// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHistory} from 'vue-router'

// 对页面的懒加载
const Home = () => import('../views/home/Home')
const Category =() =>import('../views/category/Category')
const Shopcart = () => import('../views/shopcart/Shopcart')
const Profile = () => import('../views/profile/Profile')

// 安装插件
// Vue.use(VueRouter)
const routerHistory = createWebHistory()

// 在这里配置路由相关映射关系
const routes =[
  {
    path:'',            // 重定向
    redirect: '/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/category',
    component: Category
  },
  {
    path:'/shopcart',
    component: Shopcart
  },
  {
    path:'/profile',
    component: Profile
  }
]

const router = createRouter({
  routes,
  history:routerHistory
})


export default router