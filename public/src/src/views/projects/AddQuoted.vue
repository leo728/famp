<template>
    <div class="page">
        <div class="page-header">
            <a-breadcrumb>
                <a-breadcrumb-item>
                    <router-link to="/"><a-icon type="dashboard" /> 管理控制台</router-link></a-breadcrumb-item>
                <a-breadcrumb-item>项目管理</a-breadcrumb-item>
                <a-breadcrumb-item>报价管理</a-breadcrumb-item>
            </a-breadcrumb>
            <h2>新建报价</h2>
        </div>
        <div class="page-content">
            <a-card>
                <a-form-item label="项目名称" :label-col="{ span: 2 }" :wrapper-col="{ span: 12 }">
                    <a-input placeholder="输入项目名称" v-model="quoted.subject"/>
                </a-form-item>
                <a-form-item label="客户信息" :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }">
                    <a-input :style="{width:'300px'}" v-model="quoted.customer" class="mr-5" placeholder="客户名称"/>
                    <a-input :style="{width:'180px'}" v-model="quoted.mobile" placeholder="客户联系方式"/>
                </a-form-item>
                <a-form-item label="制作内容" :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }">
                    <a-row :gutter="4" class="row-striped">
                        <a-col :span="6">制作项目内容</a-col>
                        <a-col :span="4">制作工艺</a-col>
                        <a-col :span="2">规格</a-col>
                        <a-col :span="2">数量</a-col>
                        <a-col :span="2">面积/总数</a-col>
                        <a-col :span="2">单位</a-col>
                        <a-col :span="2">单价</a-col>
                        <a-col :span="2">总价</a-col>
                        <a-col :span="2">操作</a-col>
                    </a-row>
                    <template v-for="(item,index) in quotedItem">
                        <a-row :gutter="4" class="row-striped">
                            <a-col :span="6">{{item.content}}</a-col>
                            <a-col :span="4">{{item.crafts}}</a-col>
                            <a-col :span="2">{{item.spec}}</a-col>
                            <a-col :span="2">{{item.nums}}</a-col>
                            <a-col :span="2">{{item.area}}</a-col>
                            <a-col :span="2">{{item.unit}}</a-col>
                            <a-col :span="2">{{item.price}}</a-col>
                            <a-col :span="2">{{item.total}}</a-col>
                            <a-col :span="2">
                                <a-button type="danger" icon="delete"  @click="delItem(index)" size="small">删除</a-button>
                            </a-col>
                        </a-row>
                    </template>
                    <div :style="{marginTop:'10px'}">
                        <a-popover trigger="click" v-model="popVisible">
                            <template slot="content">
                                <div style="width: 900px">
                                    <a-row :gutter="4">
                                        <a-col :span="7">
                                            <a-input v-model="item.content" placeholder="输入制作内容、项目"/>
                                        </a-col>
                                        <a-col :span="3">
                                            <a-select
                                                    v-model="item.crafts"
                                                    style="width: 100%"
                                                    showSearch
                                                    placeholder="制作工艺"
                                                    :maxTagCount="10"
                                            >
                                                <a-select-option value="Zhejiang">Zhejiang</a-select-option>
                                                <a-select-option value="Jiangsu">Jiangsu</a-select-option>
                                            </a-select>
                                        </a-col>
                                        <a-col :span="2"><a-input placeholder="规格尺寸" v-model="item.spec"/></a-col>
                                        <a-col :span="2"><a-input placeholder="数量" v-model="item.nums"/></a-col>
                                        <a-col :span="2"><a-input placeholder="面积" v-model="item.area"/></a-col>
                                        <a-col :span="2"><a-input placeholder="单位" v-model="item.unit"/></a-col>
                                        <a-col :span="2"><a-input placeholder="单价" v-model="item.price"/></a-col>
                                        <a-col :span="2"><a-input placeholder="总价" v-model="item.total"/></a-col>
                                        <a-col :span="2">
                                            <a-button type="primary"
                                                      @click="addItem"
                                                      :loading="addLoading"
                                                      block>保存</a-button>
                                        </a-col>
                                    </a-row>
                                </div>
                            </template>
                            <a-button type="dashed" icon="plus" block>新建制作项目</a-button>
                        </a-popover>
                    </div>
                </a-form-item>
                <a-form-item>
                <a-row>
                    <a-col :span="2" class="ant-form-item-label"><label>合计金额</label></a-col>
                    <a-col :span="3">
                        <a-input value="0.00"/>
                    </a-col>
                    <a-col :span="2" class="ant-form-item-label"><label>业务员</label></a-col>
                    <a-col :span="3">
                        <a-select
                                showSearch
                                placeholder="选择业务员"
                                style="width: 100%"
                                @change="setUid"
                                :maxTagCount="5"
                        >
                            <a-select-option :value="item.uid" v-for="item in user" :key="item.uid">
                                {{item.username}}
                            </a-select-option>
                        </a-select>
                    </a-col>
                    <a-col :span="2" class="ant-form-item-label"><label>交付时间</label></a-col>
                    <a-col :span="3">
                        <a-date-picker/>
                    </a-col>
                </a-row>
                </a-form-item>
                <a-row style="margin-top: 14px">
                    <a-col :span="8" :offset="2">
                        <a-button type="primary" icon="save" class="mr-5">保存</a-button>
                        <a-button class="mr-5" icon="copy">保存为项目</a-button>
                        <a-button icon="export">导出</a-button>
                    </a-col>
                </a-row>
            </a-card>
            <a-modal
                    title="添加制作项目"
                    :visible="visible"
                    @ok="addItem"
                    :confirmLoading="confirmLoading"
                    @cancel="hideModal"
                    width="600px"
            >
                <div>
                </div>
            </a-modal>
        </div>
    </div>
</template>

<script>
    import utils  from './../../plugins/utils'
    export default {
        data() {
            return {
                visible:false,
                popVisible:false,
                confirmLoading:false,
                addLoading:false,
                quoted:{subject:'',customer:'',mobile:'',item:[],total:'',pm:'',dateline:''},
                item:{content:'',crafts:'',spec:'',nums:'',area:'',price:'',unit:'',total:''},
                quotedItem:utils.getItem('quotedItem'),
                user:[]
            };
        },
        created(){
            this.$axios.get('get_user.html').then((res)=>{
                this.user = res.data.data
            })
        },
        methods:{
            showModal(){
                this.visible = true
            },
            hideModal(){
                this.visible =false
            },
            addItem(){
                this.addLoading = true
                if(!this.item.content || !this.item.crafts ||!this.item.spec || !this.item.nums ||!this.item.nums){
                    this.$message.error('请输入制作内容、制作工艺、规格尺寸、数量、单价');
                    this.addLoading = false
                }else {
                    if(this.quotedItem === null){
                        this.quotedItem = []
                    }
                    if(this.quotedItem.length===0){
                        this.quotedItem.push(this.item)
                    }else {
                        this.quotedItem = this.quotedItem.concat(this.item)
                    }
                    this.addLoading = false
                    this.popVisible = false
                }
                utils.setItem('quotedItem',this.quotedItem)
                this.item = {content:'',crafts:'',spec:'',nums:'',area:'',price:'',unit:'',total:''}
            },
            delItem(e){
                this.quotedItem.splice(e,1);
                utils.setItem('quotedItem',this.quotedItem)
            },
            setUid(){

            }
        }
    };
</script>