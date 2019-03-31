<template>
  <a-locale-provider :locale="locale">
  <a-layout id="root">
    <a-layout-sider
            :trigger="null"
            collapsible
            v-model="collapsed"
    >
      <div class="logo" />
      <Menus/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content>
          <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
  </a-locale-provider>
</template>
<script>
  import Menus from './components/Menus';
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
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
  }
</style>
