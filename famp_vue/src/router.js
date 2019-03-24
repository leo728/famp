import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects'
import Member from './views/Member'
import Finance from './views/Finance'
import Settings from './views/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{'title':'首页概述','icon':'dashboard'}
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta:{'title':'项目管理','icon':'dashboard'},
      children:[
          {
            path:'',
            name:'',
            meta:{}
          },
      ]
    },
    {
      path: '/member',
      name: 'member',
      component: Member,
      meta:{'title':'部门管理','icon':'dashboard'},
      children:[
        {
          path:'',
          name:'',
          meta:{}
        },
      ]
    },
    {
      path: '/finance',
      name: 'finance',
      component: Finance,
      meta:{'title':'财务管理','icon':'dashboard'},
      children:[
        {
          path:'',
          name:'',
          meta:{}
        },
      ]
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta:{'title':'全局设置','icon':'dashboard'},
      children:[
        {
          path:'',
          name:'',
          meta:{}
        },
      ]
    }
  ]
})
