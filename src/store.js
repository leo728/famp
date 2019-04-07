import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    PageName:''
  },
  mutations: {
      setPageName:(state,title)=>{
          state.PageName = title
      }
  },
  actions: {

  }
})
