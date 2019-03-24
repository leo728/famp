<template>
    <div class="sidebar-menus">
            <a-menu
                    :defaultSelectedKeys="['1']"
                    :defaultOpenKeys="['sub1']"
                    mode="inline"
                    theme="dark"
                    :inlineCollapsed="collapsed"
            >
                <a-menu-item :key="vo.name" v-for="vo in menus">
                    <router-link :to="vo.path">
                        <a-icon :type="vo.meta.icon" />
                        <span>{{vo.meta.title}}</span>
                    </router-link>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
                    <a-menu-item key="5">Option 5</a-menu-item>
                    <a-menu-item key="6">Option 6</a-menu-item>
                    <a-menu-item key="7">Option 7</a-menu-item>
                    <a-menu-item key="8">Option 8</a-menu-item>
                </a-sub-menu>
            </a-menu>
        </div>
</template>

<script>
    import router from './../router'
    export default {
        name: "Menus",
        data() {
            return {
                menus:[],
                collapsed: false,
            };
        },
        created(){
            this.menus = router.options.routes
        }
    }
</script>

<style scoped>

</style>