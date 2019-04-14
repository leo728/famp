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
                    <Login/>
                </a-tab-pane>
                <a-tab-pane tab="注册账户" key="2" forceRender>
                    <Register/>
                </a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>

<script>
    import Login from '../components/Login'
    import Register from '../components/Register'
    export default {
        components:{
            Login,
            Register
        }
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