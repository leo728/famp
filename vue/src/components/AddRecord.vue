<template>
    <div>
        <a-button icon="plus" @click="showModal">收支</a-button>
        <a-modal
                title="添加收支记录"
                :visible="visible"
                @ok="handleOk"
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
                        <a-input :value="records.title" v-model="records.title"/>
                    </a-form-item>
                    <a-form-item label="选择项目" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }">
                        <a-select
                                showSearch
                                placeholder="选择项目"
                                :maxTagCount="8"
                                @change="setPid"
                        >
                                <a-select-option :value="item.id" v-for="item in projects" :key="item.id">
                                    {{item.subject}}
                                </a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="收付款方" :label-col="{ span: 5 }" :wrapper-col="{ span: 15 }">
                        <a-input :value="records.payee" v-model="records.payee"/>
                    </a-form-item>
                    <a-form-item label="类型" :label-col="{ span: 5 }">
                        <a-radio-group defaultValue="2" buttonStyle="solid" v-model="records.type">
                            <a-radio-button :value="1">收入</a-radio-button>
                            <a-radio-button :value="2">支出</a-radio-button>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item label="金额" :label-col="{span:5}" :wrapper-col="{ span:6 }">
                        <a-input placeholder="项目金额" :value="records.money" v-model="records.money"/>
                    </a-form-item>
                    <a-form-item label="收款方式" :label-col="{ span: 5 }">
                        <a-radio-group defaultValue="2" v-model="records.payment_id" buttonStyle="solid">
                            <a-radio-button :value="item.payment_id" :key="item.payment_id" v-for="item in payment">
                                {{item.payment_name}}
                            </a-radio-button>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item label="日期" :label-col="{ span: 5 }">
                        <a-date-picker @change="setDate"/>
                    </a-form-item>
                    <a-form-item label="经办人" :label-col="{ span: 5 }">
                        <a-select placeholder="选择经办人" @change="setUid" style="width: 120px">
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
                user:[],
                records:{title:'',pid:'',type:'',payee:'',money:'',dateline:'1',payment_id:'',uid:''}
            }
        },
        created(){
            this.$axios.get('get_projects_simple.html').then((res)=>{
                this.projects = res.data.data
            })
            this.$axios.get('get_payment.html').then((res)=>{
                this.payment = res.data.data
            })
            this.$axios.get('get_user.html').then((res)=>{
                this.user = res.data.data
            })
        },
        methods: {
            showModal() {
                this.visible = true
            },
            handleOk() {
                console.log(this.records)
            },
            handleCancel(e) {
                console.log('Clicked cancel button');
                this.visible = false
            },
            setPid(e){
                this.records.pid = e;
            },
            setDate(e,f){
                this.records.dateline = f
            },
            setUid(e){
                this.records.uid =e
            }
        }
    }
</script>

<style scoped>

</style>