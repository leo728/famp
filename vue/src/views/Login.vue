<template>
    <div class="login-bg">
        <div :style="{width:'380px',margin:'0 auto'}">
            <div class="login-brand">
                <div class="logo">
                    <img src="../assets/logo.png" width="60">
                </div>
                <div class="logo-title">FAMP小微企业ERP系统</div>
            </div>
            <a-tabs defaultActiveKey="1" size="large" :tabBarStyle="{textAlign:'center'}">
                <a-tab-pane tab="登录" key="1">
                    <a-form
                            :form="form"
                            class="login-form"
                            @submit="handleSubmit"
                    >
                        <a-form-item>
                            <a-input
                                    v-decorator="['userName',{ rules: [{ required: true, message: '入用户名不能为空!' }] }]"
                                    placeholder="用户名或是手机号码"
                                    size="large"
                            >
                                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-input v-decorator="['password',{ rules: [{ required: true, message: '密码不能为空!' }] }]"
                                     type="password"
                                     placeholder="通行证密码"
                                     size="large"
                            >
                                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-checkbox v-decorator="['remember',
                      {
                        valuePropName: 'checked',
                        initialValue: true,}]">
                                记住登录状态
                            </a-checkbox>
                            <a href="javascript:;" :style="{float:'right'}"> 忘记密码？</a>
                        </a-form-item>
                        <a-form-item>
                            <a-button type="primary" size="large" html-type="submit" block>登录</a-button>
                        </a-form-item>
                        <a-form-item>
                            其他登录方式：
                            <a-avatar size="small" icon="qq" class="mr-10"/>
                            <a-avatar size="small" icon="wechat" />
                            <a href="" :style="{float:'right'}">注册账号</a>
                        </a-form-item>
                    </a-form>
                </a-tab-pane>
                <a-tab-pane tab="注册账户" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        beforeCreate () {
            this.form = this.$form.createForm(this);
        },
        created(){
            this.login()
        },
        methods: {
            handleSubmit (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
            login(){
                sessionStorage.setItem('token','ae58Cx98HZdv90')
            }
        },
    }
</script>

<style scoped>
    .logo{
        display: inline-block;
        width: 70px;
        height: 70px;
        text-align: center;
        border-radius: 7px;
        border:1px solid #1890ff;
        overflow: hidden;
        line-height: 64px;
    }
    .logo>img {
        display: inline-block;
        margin-top: 2px;
    }
    .login-brand{
        margin-top: 20%;
        text-align: center;
    }
    .logo-title {
        font-size: 30px;
        color: #666;
    }
    .ant-tabs-tab{
        width: 50% !important;
        margin: 0 !important;
    }
    .login-bg{
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: auto;
        background: #f0f2f5;
    }
</style>