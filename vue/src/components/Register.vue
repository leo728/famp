<template>
    <a-form
            :form="form"
            @submit="handleSubmit"
    >
        <a-form-item>
            <a-input size="large"
                     placeholder="您的用户名"
                    v-decorator="[
          'username',
          {
            rules: [{
              required: true, message: '用户名不能为空',
            }]
          }
        ]">
                <a-icon slot="prefix" type="user" />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-input size="large"
                     placeholder="您的密码"
                    v-decorator="[
          'password',
          {
            rules: [{
              required: true, message: '密码不能为空',
            }, {
              validator: validateToNextPassword,
            }],
          }
        ]"
                    type="password"
            >
                <a-icon slot="prefix" type="lock" />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-input size="large"
                     placeholder="重复您的密码"
                    v-decorator="[
          'confirm',
          {
            rules: [{
              required: true, message: '请重复密码',
            }, {
              validator: compareToFirstPassword,
            }],
          }
        ]"
                    type="password"
                    @blur="handleConfirmBlur"
            > <a-icon slot="prefix" type="lock" /></a-input>
        </a-form-item>
        <a-form-item>
            <a-input addonBefore="+86"
                     placeholder="您的手机号码"
                     size="large"
                     v-decorator="[
          'phone',
          {
            rules: [{ required: true, message: '手机号码不能为空' }],
          }
       ]"><a-icon slot="prefix" type="phone" /></a-input>
        </a-form-item>

        <a-form-item>
            <a-row :gutter="8">
                <a-col :span="16">
                    <a-input size="large"
                             placeholder="手机验证码"
                            v-decorator="[
              'captcha',
              {rules: [{ required: true, message: '验证码不能为空' }]}
            ]"
                    ><a-icon slot="prefix" type="key" /></a-input>
                </a-col>
                <a-col :span="8">
                    <a-button type="dashed" size="large" block>获取验证码</a-button>
                </a-col>
            </a-row>
        </a-form-item>
        <a-form-item>
            <a-checkbox
                    v-decorator="['agreement', {valuePropName: 'checked'}]"
            >I have read the <a href="">agreement</a>
            </a-checkbox>
        </a-form-item>
        <a-form-item>
            <a-row>
                <a-col :span="12">
                    <a-button type="primary" size="large" html-type="submit" block>注册</a-button>
                </a-col>
                <a-col :span="10" :offset="2">
                    <a-button html-type="submit" size="large" block>已有账号</a-button>
                </a-col>
            </a-row>

        </a-form-item>
    </a-form>
</template>

<script>
    const residences = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
                value: 'xihu',
                label: 'West Lake',
            }],
        }],
    }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
            }],
        }],
    }];

    export default {
        data () {
            return {
                confirmDirty: false,
                residences,
                autoCompleteResult: [],
                formItemLayout: {
                    labelCol: {
                        xs: { span: 24 },
                        sm: { span: 8 },
                    },
                    wrapperCol: {
                        xs: { span: 24 },
                        sm: { span: 16 },
                    },
                },
                tailFormItemLayout: {
                    wrapperCol: {
                        xs: {
                            span: 24,
                            offset: 0,
                        },
                        sm: {
                            span: 16,
                            offset: 8,
                        },
                    },
                },
            };
        },
        beforeCreate () {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit  (e) {
                e.preventDefault();
                this.form.validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
            handleConfirmBlur  (e) {
                const value = e.target.value;
                this.confirmDirty = this.confirmDirty || !!value;
            },
            compareToFirstPassword  (rule, value, callback) {
                const form = this.form;
                if (value && value !== form.getFieldValue('password')) {
                    callback('Two passwords that you enter is inconsistent!');
                } else {
                    callback();
                }
            },
            validateToNextPassword  (rule, value, callback) {
                const form = this.form;
                if (value && this.confirmDirty) {
                    form.validateFields(['confirm'], { force: true });
                }
                callback();
            },
            handleWebsiteChange  (value) {
                let autoCompleteResult;
                if (!value) {
                    autoCompleteResult = [];
                } else {
                    autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
                }
                this.autoCompleteResult = autoCompleteResult;
            },
        },
    };
</script>