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
                    <a-row :style="{borderBottom:'1px solid #e8e8e8',paddingBottom:'5px'}">
                        <a-col :span="6">制作项目内容</a-col>
                        <a-col :span="2">制作工艺</a-col>
                        <a-col :span="2">规格</a-col>
                        <a-col :span="2">数量</a-col>
                        <a-col :span="2">面积/总数</a-col>
                        <a-col :span="2">单价</a-col>
                        <a-col :span="2">总价</a-col>
                        <a-col :span="4">备注</a-col>
                        <a-col :span="2">操作</a-col>
                    </a-row>
                    <div :style="{marginTop:'15px'}">
                        <a-button type="dashed" icon="plus" @click="showModal" block>新增项</a-button>
                    </div>
                </a-form-item>
                <a-form-item label="合计金额" :label-col="{ span: 2 }" :wrapper-col="{ span: 3 }">
                    <a-input addonBefore="￥" value="0.00" addonAfter="元"/>
                </a-form-item>
                <a-form-item label="业务员" defaultValue="1" :label-col="{ span: 2 }" :wrapper-col="{ span: 3 }">
                    <a-select
                            showSearch
                            placeholder="选择业务员"
                            style="width: 200px"
                            @change="setUid"
                            :maxTagCount="5"
                    >
                        <a-select-option :value="item.uid" v-for="item in user" :key="item.uid">
                            {{item.username}}
                        </a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="交付时间" width="200px" :label-col="{ span: 2 }" :wrapper-col="{ span: 3 }">
                    <a-date-picker/>
                </a-form-item>
                <a-form-item label="保存" :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }">
                    <a-button type="primary" icon="save" class="mr-5">保存</a-button>
                    <a-button class="mr-5" icon="copy">保存为项目</a-button>
                    <a-button icon="export">导出</a-button>
                </a-form-item>
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
                    <a-form layout="vertical">
                        <a-form-item>
                            <a-input placeholder="输入制作内容、项目"/>
                        </a-form-item>
                        <a-form-item>
                            <a-input-group compact>
                                <a-select defaultValue="Zhejiang" :style="{width:'30%'}">
                                    <a-select-option value="Zhejiang">Zhejiang</a-select-option>
                                    <a-select-option value="Jiangsu">Jiangsu</a-select-option>
                                </a-select>
                                <a-input style="width: 14%"/>
                                <a-input style="width: 14%"/>
                                <a-input style="width: 14%"/>
                                <a-input style="width: 14%"/>
                                <a-input style="width: 14%"/>
                            </a-input-group>
                        </a-form-item>
                        <a-form-item>
                            <a-textarea placeholder="输入备注信息" :rows="3"/>
                        </a-form-item>
                    </a-form>
                </div>
            </a-modal>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible:false,
                confirmLoading:false,
                quoted:{subject:'',customer:'',mobile:'',item:[],total:'',pm:'',dateline:''},
                item:{content:'',crafts:'',spec:'',nums:'',area:'',price:'',unit:'',total:'',remarks:''},
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

            },
            delitem(){

            },
            setUid(){

            }
        }
    };
</script>