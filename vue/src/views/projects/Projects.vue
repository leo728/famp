<template>
  <div class="page">
    <div class="page-header">
      <a-card>
        <div>
          <a-breadcrumb>
            <a-breadcrumb-item>
              <router-link to="/"><a-icon type="dashboard" /> 管理控制台</router-link></a-breadcrumb-item>
            <a-breadcrumb-item>项目管理</a-breadcrumb-item>
            <a-breadcrumb-item>项目列表</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div><h2 style="margin: 10px 0 0">项目列表</h2></div>
      </a-card>
    </div>
    <div class="page-content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
