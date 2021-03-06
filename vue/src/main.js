import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/ant-design-vue.js'

Vue.config.productionTip = false;

//设置访问信息
let ProjectName = ' - FAMP小微企业ERP系统';
router.beforeEach((to, from, next) => {
  if(to.path === '/login'){
    next()
  }else {
    if(!sessionStorage.getItem('token')){
      next({path:'/login'})
    }else {
      if (to.meta.title) {
        document.title = to.meta.title + ProjectName
      }
      next()
    }
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
