import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Index from './views/Index.vue'
import Login from './views/Login'

import Projects from './views/projects/Projects'
import ProjectsLists from './views/projects/List'
import Quoted from './views/projects/Quoted'
import AddQuoted from './views/projects/AddQuoted'
import Products from './views/projects/Products'

import Member from './views/member/Member'
import Staff from './views/member/Staff'
import Department from './views/member/Department'

import Finance from './views/finance/Finance'
import FinanceLists from './views/finance/lists'
import WakeHour from './views/finance/WakeHour'
import Table from './views/finance/Table'
import Fina from './views/finance/Fina'

import Settings from './views/settings/Settings'
import SettingsInfo from './views/settings/Info'
import Profile from './views/settings/Profile'
import ResetPass from './views/settings/ResetPass'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
            meta: {title: 'FAMP小微企业ERP系统', icon: 'dashboard'},
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: Index,
                    meta: {title: '首页概述', icon: 'dashboard'},

                },
                {
                    path: '/projects',
                    name: 'Projects',
                    component: Projects,
                    meta: {title: '项目管理', icon: 'project'},
                    children: [
                        {
                            path: '/projects/lists',
                            name: 'ProjectsLists',
                            component: ProjectsLists,
                            meta: {'title': '项目列表', show: 1}
                        },
                        {
                            path: '/projects/quoted',
                            name: 'Quoted',
                            component: Quoted,
                            meta: {'title': '报价清单', show: 1}
                        },
                        {
                            path: '/projects/add_quoted',
                            name: 'AddQuoted',
                            component: AddQuoted,
                            meta: {'title': '新建报价', show: 0},
                        },
                        {
                            path: '/projects/products',
                            name: 'Products',
                            component: Products,
                            meta: {'title': '产品报价', show: 1},
                        },
                    ]
                },
                {
                    path: '/finance',
                    name: 'Finance',
                    component: Finance,
                    meta: {'title': '财务管理', icon: 'money-collect'},
                    children: [
                        {
                            path: '/finance/lists',
                            name: 'FinanceLists',
                            component: FinanceLists,
                            meta: {title: '收支记录', show: 1},
                        },
                        {
                            path: '/finance/wake_hour',
                            name: 'WakeHour',
                            component: WakeHour,
                            meta: {'title': '工时管理', show: 1},
                        },
                        {
                            path: '/finance/table',
                            name: 'Table',
                            component: Table,
                            meta: {'title': '工资表', show: 1},
                        },
                        {
                            path: '/finance/fina',
                            name: 'Fina',
                            component: Fina,
                            meta: {'title': '资金管理', show: 1},
                        },
                    ]
                },
                {
                    path: '/member',
                    name: 'Member',
                    component: Member,
                    meta: {'title': '部门设置', icon: 'cluster'},
                    children: [
                        {
                            path: '/member/staff',
                            name: 'Staff',
                            component: Staff,
                            meta: {'title': '员工列表', show: 1},
                        },
                        {
                            path: '/member/department',
                            name: 'Department',
                            component: Department,
                            meta: {'title': '部门列表', show: 1},
                        },
                    ]
                },
                {
                    path: '/settings',
                    name: 'Settings',
                    component: Settings,
                    meta: {'title': '全局设置', icon: 'setting'},
                    children: [
                        {
                            path: '/settings/info',
                            name: 'Info',
                            component: SettingsInfo,
                            meta: {'title': '企业信息', show: 1},
                        },
                        {
                            path: '/settings/profile',
                            name: 'profile',
                            component: Profile,
                            meta: {'title': '个人信息', show: 0},
                        },
                        {
                            path: '/settings/reset_pass',
                            name: 'ResetPass',
                            component: ResetPass,
                            meta: {'title': '修改密码', show: 1},
                        },
                    ]
                }
            ]
        },
        {
            path: '/login',
            name:'Login',
            component: Login,
            meta: {title: 'FAMP小微企业ERP系统'}
        }
    ]
})
