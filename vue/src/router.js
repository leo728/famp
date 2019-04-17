import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main'
import Login from './views/Login'

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


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: Main,
            meta: {title: '首页概述', hideInMenu: true, icon: 'dashboard'},
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: () => import('@/views/Home'),
                    meta: {title: '首页概览', hideInMenu: true, icon: 'dashboard'}
                }
            ]

        },
        {
            path: '/projects',
            name: 'Projects',
            component: Main,
            meta: {title: '项目管理', icon: 'project',hideInMenu: false},
            children: [
                {
                    path: '/projects/lists',
                    name: 'ProjectsLists',
                    component: () => import('@/views/projects/List'),
                    meta: {'title': '项目列表', hideInMenu: false}
                },
                {
                    path: '/projects/quoted',
                    name: 'Quoted',
                    component: () => import('@/views/projects/Quoted'),
                    meta: {'title': '报价清单', hideInMenu: false}
                },
                {
                    path: '/projects/add_quoted',
                    name: 'AddQuoted',
                    component: () => import('@/views/projects/AddQuoted'),
                    meta: {'title': '新建报价', hideInMenu: true},
                },
                {
                    path: '/projects/products',
                    name: 'Products',
                    component: () => import('@/views/projects/Products'),
                    meta: {'title': '产品报价', hideInMenu: false},
                },
            ]
        },
        {
            path: '/finance',
            name: 'Finance',
            component: Finance,
            meta: {'title': '财务管理', icon: 'money-collect',hideInMenu: false},
            children: [
                {
                    path: '/finance/lists',
                    name: 'FinanceLists',
                    component: FinanceLists,
                    meta: {title: '收支记录', hideInMenu: false},
                },
                {
                    path: '/finance/wake_hour',
                    name: 'WakeHour',
                    component: WakeHour,
                    meta: {'title': '工时管理', hideInMenu: false},
                },
                {
                    path: '/finance/table',
                    name: 'Table',
                    component: Table,
                    meta: {'title': '工资表', hideInMenu: false},
                },
                {
                    path: '/finance/fina',
                    name: 'Fina',
                    component: Fina,
                    meta: {'title': '资金管理', hideInMenu: false},
                },
            ]
        },
        {
            path: '/member',
            name: 'Member',
            component: Member,
            meta: {'title': '部门设置', icon: 'cluster',hideInMenu: false},
            children: [
                {
                    path: '/member/staff',
                    name: 'Staff',
                    component: Staff,
                    meta: {'title': '员工列表', hideInMenu: false},
                },
                {
                    path: '/member/department',
                    name: 'Department',
                    component: Department,
                    meta: {'title': '部门列表', hideInMenu: false},
                },
            ]
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settings,
            meta: {'title': '全局设置', icon: 'setting',hideInMenu: false},
            children: [
                {
                    path: '/settings/info',
                    name: 'Info',
                    component: SettingsInfo,
                    meta: {'title': '企业信息', hideInMenu: false},
                },
                {
                    path: '/settings/profile',
                    name: 'profile',
                    component: Profile,
                    meta: {'title': '个人信息', hideInMenu: true},
                },
                {
                    path: '/settings/reset_pass',
                    name: 'ResetPass',
                    component: ResetPass,
                    meta: {'title': '修改密码', hideInMenu: false},
                },
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {title: '登录/注册 - FAMP小微企业ERP系统', hideInMenu: true, icon:'setting'}
        }
    ]
})
