<template>
    <div class="sidebar-menus">
            <a-menu
                    :defaultSelectedKeys="['1']"
                    :defaultOpenKeys="['/projects']"
                    mode="inline"
                    theme="dark"
                    :inlineCollapsed="collapsed"
            >
                <a-menu-item class="nav-item">
                    <router-link :to="{path:'/'}">
                        <a-icon type="dashboard" style="font-size: 22px;margin-right: 0" />
                        <div>首页</div>
                    </router-link>
                </a-menu-item>
                <template v-for="vo in menus">
                    <template v-if="!vo.meta.hideInMenu">
                        <a-menu-item :key="vo.path" class="nav-item">
                            <router-link :to="vo.path">
                                <a-icon :type="vo.meta.icon" style="font-size: 22px;margin-right: 0" />
                                <div>{{vo.meta.title}}</div>
                            </router-link>
                        </a-menu-item>
                    </template>
                </template>
            </a-menu>
        </div>
</template>

<script>
    import router from '../router'
    export default {
        name: "Menus",
        data() {
            return {
                menus:[],
                collapsed: false,
            };
        },
        created(){
            //console.log(router.options)
            this.menus = router.options.routes
        }
    }
</script>

<style scoped>
    .nav-item{
        margin:0 0 5px 0 !important;
        padding:7px 0 !important;
        text-align: center;
        height: 60px !important;
        line-height: 20px !important;
    }
</style>