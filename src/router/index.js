import Vue from 'vue'
import VueRouter from 'vue-router'
import { getnotedetail } from '../components/NetWork/request'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    component:() => import(/* webpackChunkName:"Home" */ '../views/Home.vue')
  },
  {
    path:'/sendSms',
    name:'sendSms',
    component:() => import(/* webpackChunkName:"LeaveMessage" */ '../views/sendSms.vue')
  },
  {
    path:'/message',
    name:'message',
    component:() => import(/* webpackChunkName:"LeaveMessage" */ '../views/LeaveMessage.vue')
  },
  {
    path:'/login',
    name:'login',
    component:() => import(/* webpackChunkName:"Login" */ '../views/Login.vue')
  },
  {
    path:'/logined',
    name:'logined',
    component:() => import(/* webpackChunkName:"Logined" */ '../components/LoginComponents/Logined.vue')
  },
  {
    path:'/photos',
    name:'photos',
    component:() => import(/* webpackChunkName:"Photos" */ '../views/Photos.vue')
  },
  {
    path:'/profile',
    name:'profile',
    component:() => import(/* webpackChunkName:"Profile" */ '../views/Profile.vue')
  },
  {
    path:'/category',
    name:'category',
    component:() => import(/* webpackChunkName:"category" */ '../views/category.vue')
  },
  {
    path:'/article',
    name:'card',
    component:() => import(/* webpackChunkName:"Card" */ '../components/HomeComponents/Card.vue')
  },
  {
    path:'/demo',
    name:'demo',
    component:() => import(/* webpackChunkName:"Demo" */ '../views/Demo.vue')
  },
  {
    path:'/detail/:id',
    name:'detail',
    component:() => import (/* webpackChunkName:"detail" */ '../components/HomeComponents/detail')
  },
  {
    path:'/admin',
    name:'admin',
    component:() => import (/* webpackChunkName:"admin" */ '../admin/adminLogin.vue')
  },
  {
    path:'/admin/login',
    name:'adminlogin',
    component:() => import (/* webpackChunkName:"adminLogin" */ '../admin/adminLogin.vue')
  },
  {
    path:'/admin/article',
    name:'admin',
    component:() => import (/* webpackChunkName:"articleEditor" */ '../admin/articleEditor.vue'),
    children:[
      {
        path:'/admin/article/upload/demo',
        name:'sendDemo',
        component:() => import(/* webpackChunkName:"sendDemo" */ '../admin/sendDemo.vue')
      },
      {
        path:'/admin/article/upload/photos',
        name:'uploadphoto',
        component:() => import (/* webpackChunkName:"sendcontent" */ '../admin/sendcontent.vue')
      },
      {
        path:'/admin/article/upload/images',
        name:'images',
        component:() => import (/* webpackChunkName:"ImageUpload" */ '../admin/ImageUpload.vue')
      },
      {
        path:'/admin/article/upload/articlePublish',
        name:'articlePublish',
        component:() => import (/* webpackChunkName:"articlePublish" */ '../admin/articlePublish.vue')
      },
      {
        path:'/admin/article/upload/articleManage',
        name:'articleManage',
        component:() => import (/* webpackChunkName:"articleManage" */ '../admin/articleManage.vue')
      },
      {
        path:'/admin/article/upload/users',
        name:'UserManage',
        component:() => import (/* webpackChunkName:"UserManage" */ '../admin/UserManage.vue')
      },
      {
        path:'/admin/article/upload/articleupdate/:id',
        name:'articleupdate',
        component:() => import (/* webpackChunkName:"updateArticle" */ '../admin/updateArticle.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* 重定向不报错 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

router.beforeEach((to,from,next) => {
  /* 全局导航守卫 */
  if(to.path === "/login") {
    if(localStorage.getItem('username')) {
      router.replace({name:'logined'})
    }
  }else if(to.path.includes("/admin/article") || to.path.includes("/admin/login")){
    /* 管理系统守卫 */
    getnotedetail('/user/adminIslogined').then(res => {
      if(res.data.err === 0) {
        next()
      } else {
        router.push({ name: 'adminlogin'})
      }
    })
  }
  const color = "rgb("+(~~(Math.random()*255))+","+(~~(Math.random()*255))+","+(~~(Math.random()*255))+")"
  console.log(
      "%c _______   ______   .______       _______  __   __       _______ \n" +
      "|   ____| /  __  \\  |   _  \\     |   ____||  | |  |     |   ____|\n" +
      "|  |__   |  |  |  | |  |_)  |    |  |__   |  | |  |     |  |__   \n" +
      "|   __|  |  |  |  | |      /     |   __|  |  | |  |     |   __|  \n" +
      "|  |     |  `--'  | |  |\\  \\----.|  |____ |  | |  `----.|  |____ \n" +
      "|__|      \\______/  | _| `._____||_______||__| |_______||_______|","color:"+color+";font-size:20px"
  )
  next()
})
export default router
