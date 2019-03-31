import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/ant-design-vue.js'

Vue.config.productionTip = false

//设置访问信息
const ProjectName = ' - FAMP小微企业ERP系统'
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + ProjectName
    store.state.PageName = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
