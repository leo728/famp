<template>
    <div class="sidebar-menus">
            <a-menu
                    :defaultSelectedKeys="['1']"
                    :defaultOpenKeys="['/projects']"
                    mode="inline"
                    theme="dark"
                    :inlineCollapsed="collapsed"
            >
                <template v-for="vo in menus">
                <a-menu-item :key="vo.path" v-if="!vo.children" style="margin:0">
                    <router-link :to="vo.path">
                        <a-icon :type="vo.meta.icon" style="font-size: 18px;" />
                        <span>{{vo.meta.title}}</span>
                    </router-link>
                </a-menu-item>
                <a-sub-menu :key="vo.path" v-else>
                    <span slot="title">
                        <a-icon :type="vo.meta.icon" style="font-size: 18px;" />
                        <span>{{vo.meta.title}}</span>
                    </span>
                    <a-menu-item v-if="v.meta.show" :key="v.path" v-for="v in vo.children">
                        <router-link :to="v.path">
                        {{v.meta.title}}
                        </router-link>
                    </a-menu-item>
                </a-sub-menu>
                </template>
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