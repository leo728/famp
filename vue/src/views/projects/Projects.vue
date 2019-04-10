<template>
    <router-view></router-view>
</template>

<script>
  import utils from '../../plugins/utils'
export default {
  name: 'Projects',
  data(){
    return {
        PageName : this.$store.state.PageName
    }
  },
  created(){
    this.getStatusLevel();
    this.getUser()
  },
  methods:{
      getStatusLevel() {
          this.$axios.get('get_projects_level_status').then((res) => {
              utils.setItem('projectStatus', res.data.data.status)
              utils.setItem('projectLevel', res.data.data.level)
          })
      },
      getUser() {
          this.$axios.get('get_user.html').then((res)=>{
              utils.setItem('userList',res.data.data)
          });
      }
  }
}
</script>
