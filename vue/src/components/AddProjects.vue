<template>
    <div class="add-projects-modal">
        <a-button @click="showModal" type="primary" icon="plus">项目</a-button>
        <a-modal
                title="新建项目"
                v-model="visible"
                @ok="handleOk"
                width="650px"
        >
            <div>
                <a-form :form="form">
                    <a-form-item
                            label="项目名称"
                            :label-col="{ span: 5 }"
                            :wrapper-col="{ span: 19 }"
                    >
                        <a-input v-decorator="['subject',
                            {rules: [{ required: true, message: '请输入项目信息' }]}
                            ]"
                        />
                    </a-form-item>
                    <a-form-item label="客户信息" :label-col="{ span: 5 }">
                        <a-input v-decorator="['customer',{rules: [{ required: true, message: '客户名称不能为空' }]}]"
                                 :style="{width:'40%',marginRight:'15px'}"/>
                        <a-input id="mobile" :style="{width:'30%'}"/>
                    </a-form-item>
                    <a-form-item label="项目金额" :label-col="{span:5}" :wrapper-col="{ span: 3 }">
                        <a-input placeholder="项目金额" id="price" defaultValue="0.00"/>
                    </a-form-item>
                    <a-form-item label="项目紧急程度" :label-col="{ span: 5 }">
                        <a-radio-group defaultValue="2" buttonStyle="solid">
                            <a-radio-button :value="item.level" v-for="item in level" :key="item.level">
                                {{item.level_name}}
                            </a-radio-button>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item label="项目周期" :label-col="{ span: 5 }">
                        <a-range-picker @change="setDate"/>
                    </a-form-item>
                    <a-form-item label="业务员" :label-col="{ span: 5 }">
                        <a-select
                                showSearch
                                placeholder="选择业务员"
                                optionFilterProp="children"
                                style="width: 200px"
                                :maxTagCount="8"
                                @change="pmSet"
                                :filterOption="filterOption"
                        >
                            <a-select-option value="jack">Jack</a-select-option>
                            <a-select-option value="lucy">Lucy</a-select-option>
                            <a-select-option value="tom">Tom</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="项目状态" :label-col="{ span: 5 }">
                        <a-select defaultValue="已接单" style="width: 120px">
                            <a-select-option :value="item.status" v-for="item in status" :key="item.status">
                                {{item.status_name}}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="项目描述" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }">
                        <a-textarea placeholder="详情描述和其他备注信息" :rows="2"/>
                    </a-form-item>

                </a-form>
            </div>
        </a-modal>
    </div>
</template>

<script>
    import utils from '../plugins/utils';

    export default {
        name: "AddProjects",
        data() {
            return {
                visible: false,
                form: this.$form.createForm(this),
                status:utils.cache('projectStatus'),
                level:utils.cache('projectLevel'),
                user: utils.cache('userList')
            }
        },
        methods: {
            showModal() {
                this.visible = true
            },
            handleOk() {
                this.visible = false
            },
            setDate() {
            },
            pmSet(){

            },
            filterOption(input, option) {
                return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        }
    }
</script>

<style scoped>

</style>