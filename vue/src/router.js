import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects'
import Member from './views/Member'
import Finance from './views/Finance'
import Settings from './views/Settings'
import FinanceLists from './views/finance/lists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页概述',
      component: Home,
      icon:'dashboard'
    },
    {
      path: '/projects',
      name: '项目管理',
      component: Projects,
      icon:'project',
      children:[
        {
          path:'/projects/lists',
          name:'项目列表',
          icon:'list'
        },
        {
          path:'/projects/quoted',
          name:'报价清单',
          icon:'file-down'
        },
        {
          path:'/projects/products',
          name:'产品报价',
          icon:'file-down'
        },
      ]
    },
    {
      path: '/finance',
      name: '财务管理',
      component: Finance,
      icon:'money-collect',
      children:[
        {
          path:'/finance/lists',
          name:'收支记录',
          component:FinanceLists,
          icon:''
        },
        {
          path:'/finance/wake_hour',
          name:'工时管理',
          icon:''
        },
        {
          path:'/finance/table',
          name:'工资表',
          icon:''
        },
        {
          path:'/finance/fina',
          name:'资金管理',
          icon:''
        },
      ]
    },
    {
      path: '/member',
      name: '部门设置',
      component: Member,
      icon:'cluster',
      children:[
        {
          path:'/member/staff',
          name:'员工列表',
          icon:''
        },
        {
          path:'/member/department',
          name:'部门列表',
          icon:''
        },
      ]
    },
    {
      path: '/settings',
      name: '全局设置',
      component: Settings,
      icon:'setting',
      children:[
        {
          path:'settings/info',
          name:'基础信息'
        },
      ]
    }
  ]
})
