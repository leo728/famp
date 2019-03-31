<template>
    <div>
        <a-button icon="plus" @click="showModal">收支</a-button>
        <a-modal
                title="添加收支记录"
                :visible="visible"
                @ok="submitRecords"
                :confirmLoading="confirmLoading"
                @cancel="handleCancel"
                width="600px"
        >
            <div>
                <a-form :form="form">
                    <a-form-item
                            label="用途描述"
                            :label-col="{ span: 5 }"
                            :wrapper-col="{ span: 19 }"
                    >
                        <a-input v-decorator="['title',
                          {rules: [{ required: true, message: '用途不能为空' }]}]"/>
                    </a-form-item>
                    <a-form-item label="选择项目" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }">
                        <a-select
                                showSearch
                                placeholder="选择项目"
                                :maxTagCount="8"
                                v-decorator="['pid',
                          {rules: [{ required: true, message: '项目不能为空'}]}]">
                                <a-select-option :value="item.id" v-for="item in projects" :key="item.id">
                                    {{item.subject}}
                                </a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="收付款方" :label-col="{ span: 5 }" :wrapper-col="{ span: 15 }">
                        <a-input v-decorator="['payee']" placeholder="输入收付款方"/>
                    </a-form-item>
                    <a-form-item label="类型" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }">
                        <a-radio-group buttonStyle="solid"
                                       v-decorator="['type',
                          {rules: [{ required: true, message: '选择收入还是支出哦' }]}]"
                        >
                            <a-radio-button :value="1">收入</a-radio-button>
                            <a-radio-button :value="2">支出</a-radio-button>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item label="金额" :label-col="{span:5}" :wrapper-col="{ span:6 }">
                        <a-input placeholder="项目金额"
                                 v-decorator="['money',
                                    {rules: [{ required: true, message: '项目金额不能为空' }]}]"/>
                    </a-form-item>
                    <a-form-item label="收款方式" :label-col="{ span: 5 }" :wrapper-col="{ span:19 }">
                        <a-radio-group buttonStyle="solid"
                                       v-decorator="['payment_id',
                          {rules: [{ required: true, message: '选择收入还是收付款方式' }]}]"
                        >
                            <a-radio-button :value="item.payment_id" :key="item.payment_id" v-for="item in payment">
                                {{item.payment_name}}
                            </a-radio-button>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item label="日期" :label-col="{ span: 5 }">
                        <a-date-picker v-decorator="['dateline']"/>
                    </a-form-item>
                    <a-form-item label="经办人" :label-col="{ span: 5 }">
                        <a-select placeholder="选择经办人" v-decorator="['uid']" style="width: 120px">
                            <a-select-option :value="item.uid" v-for="item in user" :key="item.uid">
                                {{item.username}}
                            </a-select-option>
                        </a-select>
                    </a-form-item>

                </a-form>
            </div>
        </a-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: this.$form.createForm(this),
                visible: false,
                confirmLoading: false,
                projects:[],
                payment:[],
                user:[]
            }
        },
        created(){
            this.$axios.get('get_projects_simple.html').then((res)=>{
                this.projects = res.data.data
            });
            this.$axios.get('get_payment.html').then((res)=>{
                this.payment = res.data.data
            });
            this.$axios.get('get_user.html').then((res)=>{
                this.user = res.data.data
            })
        },
        methods: {
            showModal() {
                this.visible = true
            },
            submitRecords() {
                this.confirmLoading = true
                this.form.validateFields(
                    (err) => {
                        if (!err) {
                            this.axios({
                                method:'post',
                                url:'add_records.html',
                                data:this.form.getFieldsValue()
                            }).then((res)=>{
                                if(res.data.code === 200){
                                    this.$message.success(res.data.msg);
                                }else {
                                    this.$message.error(res.data.msg);
                                }
                            })
                        }
                    },
                )
                setTimeout(() => {
                    this.visible = false;
                    this.confirmLoading = false;
                }, 6000);
            },
            handleCancel() {
                this.visible = false
            }
        }
    }
</script>

<style scoped>

</style>