<template>
  <div class="page">
    <div class="page-header">
      <a-card>
        <div>
          <a-breadcrumb>
            <a-breadcrumb-item>
              <router-link to="/"><a-icon type="dashboard" /> 管理控制台</router-link></a-breadcrumb-item>
            <a-breadcrumb-item>项目管理</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div><h2 style="margin: 10px 0 0">{{PageName}}</h2></div>
      </a-card>
    </div>
    <div class="page-content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import utils from './../../plugins/utils'
export default {
  name: 'Projects',
  data(){
    return {
        PageName : this.$store.state.PageName
    }
  },
  created(){
    this.getStatusLevel();
  },
  methods:{
    getStatusLevel(){
      this.$axios.get('get_projects_level_status').then((res)=>{
          utils.setItem('projectStatus',res.data.data.status)
          utils.setItem('projectLevel',res.data.data.level)
      })
    },
  }
}
</script>
