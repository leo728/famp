<template>
    <div class="home">
        <DataView/>
        <a-card
                style="width:100%;margin-top: 16px"
                :tabList="tabListNoTitle"
                :activeTabKey="noTitleKey"
                :bordered="false"
                @tabChange="key => onTabChange(key, 'noTitleKey')"
        >
            <div v-if="noTitleKey === 'projects'">
                <OverView/>
            </div>
            <p v-else="noTitleKey === 'finance'">app content</p>
        </a-card>
    </div>
</template>

<script>
    import OverView from '../components/OverView'
    import DataView from './../components/DataView'

    export default {
        name: "home",
        data(){
            return {
                tabListNoTitle: [{
                    key: 'projects',
                    tab: '项目概览',
                }, {
                    key: 'finance',
                    tab: '收支概览',
                }],
                noTitleKey:'projects'
            }
        },
        components: {
            OverView,
            DataView
        },
        methods:{
            onTabChange (key, type) {
                this[type] = key
            },
        }
    }
</script>
