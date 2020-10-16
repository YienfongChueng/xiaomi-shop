<template>
    <div class="register">
        <div class="form">
            <div class="logo">
                <img src="/imgs/logo-mi.png" >
            </div>
            <div class="title">
                注册小米账号
            </div>
            <div class="content">
                <input v-model="username" type="text" class="username" placeholder="请输入用户名">
                <input v-model="password" type="password" class="password" placeholder="请输入密码">
                <input v-model="email" type="email" class="email" placeholder="请输入邮箱">
                <input @click="register" type="button" class="submit active" value="立即注册">
                <input type="radio" checked class="agreen">
                <span>注册账号即代表您同意并愿意遵守小米<b>用户协议</b>和<b>隐私政策</b></span>
            </div>
        </div>
        <div class="footer">
            <div class="first-line">
                <a href="javascript:;">简体</a>
                <span>|</span>
                <a href="javascript:;">繁体</a>
                <span>|</span>
                <a href="javascript:;">English</a>
                <span>|</span>
                <a href="javascript:;">隐私政策</a>
            </div>
            <div>
                小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Register',
    data () {
        return {
            username: '',
            password: '',
            email: '',
        };
    },
    methods: {
        register () {
            const userInfos = {
                username: this.username,
                password: this.password,
                email: this.email,
            };
            this.$api.User.register(userInfos)
                .then(res => {
                    this.$router.push('/login');
                });
        },
    },
};
</script>
<style lang="scss" scoped>
.register {
    .active {
        background: #FF6800;
        color: #fff;
    }
    background: #f9f9f9;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .form {
        background: #fff;
        width: 850px;
        height: 565px;
        margin: 0 auto;
        margin-top: 77px;
        text-align: center;
        .logo {
            width: 50px;
            height: 50px;
            margin: 0 auto;
        }
        .title {
            font-size: 30px;
            color: #343434;
            margin-top: 47px;
        }
        .content {
            width: 350px;
            margin: 0 auto;
            input {
                box-sizing: border-box;
                display: block;
                width: 332px;
                height: 42px;
                line-height: 42px;
                outline: none;
                border: 1px solid #E5E5E5;
                font-size: 14px;
                margin-top: 20px;
                margin-bottom: 20px;
                padding: 0 10px;
            }
            .submit {
                margin-top: 43px;
                margin-bottom: 80px;
            }
            .agreen {
                display: inline-block;
                width: 18px;
                height: 18px;
                vertical-align: middle;
            }
            span {
                padding-left: 10px;
            }
        }
    }
    .footer {
        padding-top: 100px;
        padding-bottom: 40px;
        font-size: 14px;
        color: #343434;
        line-height: 38px;
        text-align: center;
        .first-line {
            a {
                color: #343434;
            }
            a:hover {
                color: #000;
            }
            span {
                padding: 0 7px;
            }
        }
    }
}
</style>
