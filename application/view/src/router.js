import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/projects/Projects'
import ProjectsLists from './views/projects/List'
import Quoted from './views/projects/Quoted'
import AddQuoted from './views/projects/AddQuoted'
import Products from './views/projects/Products'
import Member from './views/member/Member'
import Finance from './views/finance/Finance'
import Settings from './views/settings/Settings'
import FinanceLists from './views/finance/lists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{title:'首页概述',icon:'dashboard'},

    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta:{title:'项目管理', icon:'project'},
      children:[
        {
          path:'/projects/lists',
          name:'ProjectsLists',
          component: ProjectsLists,
          meta:{'title':'项目列表', show:1}
        },
        {
          path:'/projects/quoted',
          name:'Quoted',
          component: Quoted,
          meta:{'title':'报价清单', show:1}
        },
        {
          path:'/projects/add_quoted',
          name:'AddQuoted',
          component: AddQuoted,
          meta:{'title':'新建报价', show:0},
        },
        {
          path:'/projects/products',
          name:'Products',
          component:Products,
          meta:{'title':'产品报价', show:1},
        },
      ]
    },
    {
      path: '/finance',
      name: 'Finance',
      component: Finance,
      meta:{'title':'财务管理',icon:'money-collect'},
      children:[
        {
          path:'/finance/lists',
          name:'FinanceLists',
          component:FinanceLists,
          meta:{title:'收支记录',show:1},
        },
        {
          path:'/finance/wake_hour',
          name:'WakeHour',
          meta:{'title':'工时管理',show:1},
        },
        {
          path:'/finance/table',
          name:'WakeTable',
          meta:{'title':'工资表', show:1},
        },
        {
          path:'/finance/fina',
          name:'Fina',
          meta:{'title':'资金管理', show:1},
        },
      ]
    },
    {
      path: '/member',
      name: 'Member',
      component: Member,
      meta:{'title':'部门设置',icon:'cluster'},
      children:[
        {
          path:'/member/staff',
          name:'Staff',
          meta:{'title':'员工列表', show:1},
        },
        {
          path:'/member/department',
          name:'Department',
          meta:{'title':'部门列表', show:1},
        },
      ]
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta:{'title':'全局设置',icon:'setting'},
      children:[
        {
          path:'settings/info',
          name:'Info',
          meta:{'title':'企业信息', show:1},
        },
      ]
    }
  ]
})
