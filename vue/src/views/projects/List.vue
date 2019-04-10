<template>
    <div class="page">
        <div class="page-header">
                <a-breadcrumb>
                    <a-breadcrumb-item>
                        <router-link to="/"><a-icon type="dashboard" /> 管理控制台</router-link></a-breadcrumb-item>
                    <a-breadcrumb-item>项目管理</a-breadcrumb-item>
                </a-breadcrumb>
            <h2>项目列表</h2>
            <div :style="{marginTop:'15px'}">
                <a-row>
                    <a-col :span="12" :style="{paddingTop:'5px'}">
                        <div class="i-b mr-5"><AddProject/></div>
                        <div class="i-b mr-5"><AddRecord/></div>
                        <div class="i-b">
                            <router-link :to="{path:'/projects/add_quoted'}">
                                <a-button type="primary" icon="plus">报价</a-button>
                            </router-link>
                        </div>
                    </a-col>
                    <a-col :span="12" style="text-align: right">
                        <a-form layout="inline">
                            <a-form-item>
                                <a-radio-group
                                        defaultValue="0"
                                        buttonStyle="solid"
                                        @change="setStatus"
                                        name="status"
                                >
                                    <a-radio-button value="0">全部</a-radio-button>
                                    <a-radio-button
                                            v-for="item in status"
                                            :key="item.status"
                                            :value="item.status">
                                        {{item.status_name}}
                                    </a-radio-button>
                                </a-radio-group>
                            </a-form-item>
                            <a-form-item :style="{marginRight:0}">
                                <a-input-search
                                        placeholder="输入关键字"
                                        v-model="searchKey"
                                        :style="{width: '200px'}"
                                        @search="search"
                                />
                            </a-form-item>
                        </a-form>
                    </a-col>
                </a-row>
            </div>
        </div>
        <div class="page-content">
            <a-card :bodyStyle="{padding:'24px'}" :headStyle="{padding:'0 24px'}">
                <a-list itemLayout="horizontal">
                        <a-list-item v-for="item in lists" :key="item.id">
                            <a slot="actions">详情</a>
                            <a slot="actions">状态</a>
                            <a slot="actions">编辑</a>
                            <a slot="actions" @click="setId">
                                <a-popconfirm
                                        @confirm="delProjects"
                                        @cancel="cancelProject"
                                        placement="left"
                                        okText="确认"
                                        cancelText="取消"
                                        :data-id="item.id"
                                >
                                    <template slot="title">
                                        <div>选中项目：{{item.subject}}</div>
                                        <div>此操作不可逆，请谨慎操作！</div>
                                    </template>
                                    删除
                                </a-popconfirm>
                            </a>
                            <a-list-item-meta>
                                <router-link slot="title" to="">{{item.subject}}</router-link>
                                <a-avatar
                                        slot="avatar"
                                        :size="46"
                                        :class="item.statusValue.color"
                                        shape="square"
                                >
                                    {{item.firstName}}
                                </a-avatar>
                                <div slot="description">
                                    <a-tag>客户：{{item.customer}}</a-tag>
                                    <a-tag>业务员：{{item.username}}</a-tag>
                                    <a-tag>时间：{{item.dateline_d}} - {{item.end_time_d}}</a-tag>
                                </div>
                            </a-list-item-meta>
                            <div :style="{marginRight: '24px',width:'120px'}">
                                <div>金额</div>
                                <span :style="{color:'#f5222d'}">￥{{item.price}}</span>
                            </div>
                            <div :style="{width: '170px'}">
                                <div><a-tag :class="item.statusValue.color">{{item.statusValue.status_name}}</a-tag></div>
                                <a-progress :percent="item.percent" size="small" v-if="item.percent === 100"/>
                                <a-progress :percent="item.percent" size="small" status="active" v-else/>
                            </div>
                        </a-list-item>
                    </a-list>
            </a-card>
            <div :style="{textAlign:'center',padding:'20px 0'}">
                <transition name="fade">
                    <div v-if="moreData">
                        <a-button @click="onLoadMore">加载更多</a-button>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import AddProject from '../../components/AddProjects'
    import AddRecord from '../../components/AddRecord'
    import utils from '../../plugins/utils'
    export default {
        name: "lists",
        components:{
            AddProject,
            AddRecord
        },
        data(){
            return {
                lists:[],
                total:0,
                status:utils.getItem('projectStatus'),
                curStatus:0,
                level: utils.getItem('projectLevel'),
                page:1,
                projectId:0,
                searchKey:'',
                moreData:true
            }
        },
        created(){
            this.getProjects(this.curStatus,this.page)
        },
        methods:{
            getProjects(){
               this.$axios.get('get_projects.html?status='+this.curStatus+'&page='+this.page).then((res)=>{
                   this.lists = res.data.data.data
                   this.total = res.data.data.total
               })
            },
            setStatus({ target }){
                this.curStatus = target.value
                this.page=1
                this.getProjects()
                this.moreData = true
            },
            onLoadMore(){
                this.page++
                this.$axios.get('get_projects.html?status='+this.curStatus+'&page='+this.page).then((res)=>{
                    let resData = res.data.data.data
                    if(resData.length>0){

                        this.lists = this.lists.concat(resData)
                    }else {
                        this.moreData = false
                        this.$message.warning('没有更多数据了，要加油哦，项目有点少了');
                    }
                })
            },
            delProjects(){
                this.$axios.get('delete_projects?id='+this.projectId).then((res)=>{
                    let code = res.data.data.code
                    if(code === 200){
                        this.getProjects()
                        this.$message.success('项目删除成功！');
                    }else {
                        this.$message.error('项目删除失败，项目不存在或是已经删除！');
                    }
                })
            },
            setId({target}){
                this.projectId = target.dataset.id
            },
            cancelProject(){
                this.projectId = 0
            },
            search(){
                if(!this.searchKey){
                    this.$message.warning('没有任何关键字')
                }else {
                    this.axios.get('get_projects.html?subject='+this.searchKey).then((res)=>{
                        if(res.data.code === 200){
                            this.moreData =true
                            this.lists = res.data.data.data
                        }else {
                            this.$message.warning('没有找到任何相关的项目信息');
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>