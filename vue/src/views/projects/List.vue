<template>
    <div>
        <a-card :bodyStyle="{padding:'24px'}">
            <div slot="title">
                <a-row>
                    <a-col :span="12">
                        <AddProject/>
                    </a-col>
                    <a-col :span="12" style="text-align: right">
                        <a-form layout="inline">
                            <a-form-item>
                                <a-button-group>
                                    <a-button v-for="item in status" :key="item.status" @click="setStatus">
                                        {{item.status_name}}
                                    </a-button>
                                </a-button-group>
                            </a-form-item>
                            <a-form-item :style="{marginRight:0}">
                                <a-input-search
                                        placeholder="输入关键字"
                                        style="width: 200px"
                                />
                            </a-form-item>
                        </a-form>
                    </a-col>
                </a-row>
            </div>
            <div>
                <a-list itemLayout="horizontal">
                    <a-list-item v-for="item in lists" :key="item.id">
                        <a slot="actions">详情</a>
                        <a slot="actions">编辑</a>
                        <a slot="actions">更多</a>
                        <a-list-item-meta>
                            <router-link slot="title" to="">{{item.subject}}</router-link>
                            <a-avatar
                                    slot="avatar"
                                    shape="square"
                                    :size="48"
                            >
                                {{item.firstName}}
                            </a-avatar>
                            <div slot="description">
                                <span class="mr-10">客户：{{item.customer}}</span>
                                <span class="mr-10">项目经理：{{item.username}}</span>
                                <span>时间：{{item.dateline_d}} - {{item.end_time_d}}</span>
                            </div>
                        </a-list-item-meta>
                        <div :style="{marginRight: '24px',color:'#f5222d'}">
                            ￥{{item.price}}
                        </div>
                        <div style="width: 170px">
                            <a-progress :percent="70" size="small" status="active" />
                        </div>
                    </a-list-item>
                </a-list>
            </div>
        </a-card>
        <a-pagination
                :defaultCurrent="1"
                :total="total"
                :showTotal="total => `共有 ${total} 个项目`"
                :pageSize="15"
                :style="{textAlign:'center',padding: '24px 0'}"
                showSizeChanger
                showQuickJumper

        />
    </div>
</template>

<script>
    import AddProject from './../../components/AddProjects'
    export default {
        name: "lists",
        components:{
            AddProject
        },
        data(){
            return {
                lists:[],
                total:0,
                status:[],
                level:[]
            }
        },
        created(){
            this.getProjects()
            this.getStatusLevel()
        },
        methods:{
            getProjects(){
               this.$axios.get('get_projects').then((res)=>{
                   this.lists = res.data.data.data
                   this.total = res.data.data.total
               })
            },
            getStatusLevel(){
                this.$axios.get('get_projects_level_status').then((res)=>{
                    this.status = res.data.data.status
                    this.level = res.data.data.level
                })
            },
            setStatus(){

            }
        }
    }
</script>

<style scoped>

</style>