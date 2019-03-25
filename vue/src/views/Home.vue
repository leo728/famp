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
            <div v-if="noTitleKey === 'projects'" style="height: 320px;position: relative">
                <div class="spin-container" v-show="spinning">
                    <a-spin tip="数据加载中..." :spinning="spinning"></a-spin>
                </div>
                <OverView/>
            </div>
            <p v-else="noTitleKey === 'finance'" style="height: 320px;position: relative">app content</p>
        </a-card>
    </div>
</template>
<style>
    .spin-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255,255,255,.5);
        z-index: 33;
        text-align: center;
        box-sizing: border-box;
        padding-top: 120px;
    }
</style>
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
                noTitleKey:'projects',
                spinning:true
            }
        },
        components: {
            OverView,
            DataView,
        },
        created(){
            setTimeout(this.setSpin,2000)
        },
        methods:{
            onTabChange (key, type) {
                this[type] = key
                this.spinning = true
                setTimeout(this.setSpin,2000)
            },
            setSpin(){
                this.spinning = false
            }
        }
    }
</script>
