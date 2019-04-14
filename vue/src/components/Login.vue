<template>
    <a-form
            :form="form"
            class="login-form"
            @submit="handleSubmit"
    >
        <a-form-item>
            <a-input
                    v-decorator="['userName',{ rules: [{ required: true, message: '用户名不能为空!' }] }]"
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

</style>