import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main'
import Login from './views/Login'

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
                    path: '',
                    name: 'Home',
                    component: () => import('./views/Home'),
                    meta: {title: '首页', hideInMenu: true, icon: 'dashboard'}
                }
            ]

        },
        {
            path: '/projects',
            name: 'Projects',
            component: Main,
            meta: {title: '项目', icon: 'project',hideInMenu: false},
            children: [
                {
                    path: '/',
                    name: 'ProjectsLists',
                    component: () => import('./views/projects/Index'),
                    meta: {'title': '项目列表', hideInMenu: false}
                },
                {
                    path: '/projects/quoted',
                    name: 'Quoted',
                    component: () => import('./views/projects/Quoted'),
                    meta: {'title': '报价清单', hideInMenu: false}
                },
                {
                    path: '/projects/add_quoted',
                    name: 'AddQuoted',
                    component: () => import('./views/projects/AddQuoted'),
                    meta: {'title': '新建报价', hideInMenu: true},
                }
            ]
        },
        {
            path: '/projects/quoted',
            name: 'Quoted',
            component: () => import('./views/projects/Quoted'),
            meta: {'title': '报价',icon:'calculator',hideInMenu: false}
        },
        {
            path: '/projects/products',
            name: 'Products',
            component: () => import('./views/projects/Products'),
            meta: {'title': '产品',icon:'appstore', hideInMenu: false},
        },
        {
            path: '/finance',
            name: 'Finance',
            component: Main,
            meta: {'title': '财务', icon: 'money-collect',hideInMenu: false},
            children: [
                {
                    path: 'index',
                    name: 'FinanceLists',
                    component: ()=> import('./views/finance/Index'),
                    meta: {title: '收支记录', hideInMenu: false},
                },
                {
                    path: 'wake_hour',
                    name: 'WakeHour',
                    component:()=> import('./views/finance/WakeHour'),
                    meta: {'title': '工时管理', hideInMenu: false},
                },
                {
                    path: 'table',
                    name: 'Table',
                    component:()=> import('./views/finance/Table'),
                    meta: {'title': '工资表', hideInMenu: false},
                },
                {
                    path: 'fina',
                    name: 'Fina',
                    component: ()=> import('./views/finance/Fina'),
                    meta: {'title': '资金管理', hideInMenu: false},
                },
            ]
        },
        {
            path: '/member',
            name: 'Member',
            component: Main,
            meta: {'title': '部门', icon: 'cluster',hideInMenu: false},
            children: [
                {
                    path: 'staff',
                    name: 'Staff',
                    component: ()=> import('./views/member/Staff'),
                    meta: {'title': '员工列表', hideInMenu: false},
                },
                {
                    path: 'department',
                    name: 'Department',
                    component:  ()=> import('./views/member/Department'),
                    meta: {'title': '部门列表', hideInMenu: false},
                },
            ]
        },
        {
            path: '/documents',
            name: '',
            component: Main,
            meta: {title: '文档', hideInMenu: false, icon: 'folder-open'},
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: () => import('./views/Home'),
                    meta: {title: '首页', hideInMenu: true, icon: 'dashboard'}
                }
            ]

        },
        {
            path: '/settings',
            name: 'Settings',
            component: Main,
            meta: {'title': '设置', icon: 'setting',hideInMenu: true},
            children: [
                {
                    path: 'info',
                    name: 'Info',
                    component:  ()=> import('./views/settings/Info'),
                    meta: {'title': '企业信息', hideInMenu: false},
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: ()=> import('./views/settings/Profile'),
                    meta: {'title': '个人信息', hideInMenu: true},
                },
                {
                    path: 'reset_pass',
                    name: 'ResetPass',
                    component: ()=> import('./views/settings/ResetPass'),
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
