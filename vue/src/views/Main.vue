<template>
    <div id="Home">
        <a-locale-provider :locale="locale">
            <a-layout id="root">
                <a-layout-sider
                        :trigger="null"
                        collapsible
                        v-model="collapsed"
                        width="70"
                >
                    <div class="logo">
                        <a href="">
                            <img src="./../assets/logo.svg" height="40">
                        </a>
                    </div>
                    <Menus/>
                </a-layout-sider>
                <a-layout>
                    <a-layout-header style="background: #fff; padding: 0; display: flex">
                        <div class="header-right" style="">
              <span>
                <a-badge class="top-count" :count="99"  :overflowCount="9">
                <a-icon type="bell"/>
                </a-badge>
              </span>
                            <span>
                <a-tooltip placement="bottom" >
                  <template slot="title">
                      <span>使用帮助</span>
                  </template>
                 <a-icon type="question-circle"/>
                </a-tooltip>
              </span>
                            <span>
                  <a-dropdown placement="bottomRight">
                    <a href="" class="ant-dropdown-link">
                      <img src="./../assets/avatar.jpg" :style="{width:'28px',height:'28px',borderRadius:'30px'}">
                      Serati Ma
                    </a>
                    <a-menu slot="overlay" :style="{top:'0'}">
                      <a-menu-item><router-link :to="{path:'/settings/profile'}">个人信息</router-link></a-menu-item>
                      <a-menu-item><router-link :to="{path:'/settings/reset_pass'}">重置密码</router-link></a-menu-item>
                      <a-menu-item>安全退出</a-menu-item>
                    </a-menu>
                  </a-dropdown>
                </span>
                            <span>
                  <a-dropdown placement="bottomRight" >
                    <a href="javascript:;"><a-icon type="global"/></a>
                    <a-menu slot="overlay" :style="{top:'0'}">
                      <a-menu-item>简体中文</a-menu-item>
                      <a-menu-item>繁体中文</a-menu-item>
                      <a-menu-item>English</a-menu-item>
                    </a-menu>
                  </a-dropdown>
              </span>
                        </div>
                    </a-layout-header>
                    <a-layout-content>
                        <router-view></router-view>
                    </a-layout-content>
                </a-layout>
            </a-layout>
        </a-locale-provider>
    </div>
</template>
<style>
    #root{
        min-height: 100vh;
    }
    #root .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
    }

    #root .trigger:hover {
        color: #1890ff;
    }

    #root .logo {
        height: 60px;
        font-size: 24px;
        text-align: center;
        line-height: 60px;
        margin-bottom: 15px;
    }
    .logo img {
        display: inline-block;
    }
    .logo div{
        font-size: 12px;
        color: #9e9e9e;
    }
    .logo span {
        line-height: 20px;
        padding-left: 7px;
        display: inline-block;
    }
    .ant-layout-sider-collapsed .logo>a>span {
        display: none;
    }
</style>
<script>
    import Menus from './../components/Menus';
    import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
    export default {
        data(){
            return {
                collapsed: false,
                locale: zhCN,
            }
        },
        components:{
            Menus
        }
    }
</script>
