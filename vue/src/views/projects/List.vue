<template>
    <div>
        <a-card :bodyStyle="{padding:'24px'}">
            <div>
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
                                        @search=""
                                />
                            </a-form-item>
                        </a-form>
                    </a-col>
                </a-row>
                <a-divider />
            </div>
            <div>
                <a-list itemLayout="horizontal">
                    <a-list-item v-for="item in lists">
                        <a slot="actions">详情</a>
                        <a slot="actions">编辑</a>
                        <a slot="actions">更多</a>
                        <a-list-item-meta>
                            <router-link slot="title" to="">{{item.subject}}</router-link>
                            <a-avatar
                                    slot="avatar"
                                    shape="square"
                                    :size="48"
                                    :class="item.statusValue.color"
                            >
                                {{item.firstName}}
                            </a-avatar>
                            <div slot="description">demoo</div>
                        </a-list-item-meta>
                        <div style="width: 170px">
                            <a-progress :percent="70" size="small" status="active" />
                        </div>
                        <div>content</div>
                    </a-list-item>
                </a-list>
            </div>
        </a-card>
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
                   this.data = res.data.total
               })
            },
            getStatusLevel(){
                this.$axios.get('get_projects_level_status').then((res)=>{
                    this.status = res.data.data.status
                    this.level = res.data.data.level
                })
            },
            setStatus(e){
                console.log(e)
            }
        }
    }
</script>

<style scoped>

</style>