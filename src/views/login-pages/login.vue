<template>
    <div class="login">
        <div class="header">
            <div class="container">
                <div class="logo">
                    <img src="/imgs/login-logo.png">
                </div>
            </div>
        </div>
        <div class="body">
            <div class="container">
                <div class="form">
                    <div class="form-header">
                        <span class="accout active">账号登陆</span>
                        <span class="seperate">|</span>
                        <span class="dimension">扫码登陆</span>
                    </div>
                    <div class="form-content">
                        <div class="form-accout">
                            <input v-model="username" class="user-accout" name="userAccount" type="text" placeholder="邮箱/手机号码/小米ID">
                            <input v-model="password" class="password" name="password" type="password" placeholder="密码">
                            <input @click="login" class="submit" type="button" value="登陆">
                        </div>
                        <!-- <div class="form-dimension">

                        </div> -->
                    </div>
                    <div class="form-other">
                        <div class="phone-reg">
                            <a href="javascript:;" class="active">手机短信登陆/注册</a>
                        </div>
                        <div class="reg-forgotten">
                            <a href="javascript:;" class="register" @click="register">立即注册</a>
                            <span>|</span>
                            <a href="javascript:;" class="forgotten">忘记密码?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="container">
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
    </div>
</template>
<script>
export default {
    name: 'Login',
    data () {
        return {
            username: '',
            password: '',
            userId: '',
        };
    },
    methods: {
        login () {
            const { username, password } = this;
            this.$api.User.login({ username, password })
                .then(res => {
                    this.$cookie.set('userId', res.id, { expires: '1M' });
                    // TODO vuex
                    this.$store.dispatch('saveUserName', res.username);
                    this.$router.push('/index');
                });
        },

        register () {
            this.$router.push('/register');
        },
    },
};
</script>
<style lang="scss" scoped>
.login {
    .active {
        color: #FF6700;
    }
    .header {
        height: 112px;
        line-height: 112px;
        .logo {
            width: 204px;
        }
    }
    .body {
        background: url('/imgs/login-bg.jpg') no-repeat center;
        background-size: cover;
        .container {
            position: relative;
            height: 576px;
            .form {
                width: 410px;
                height: 510px;
                background: #fff;
                margin-top: 37px;
                margin-bottom: 29px;
                position: absolute;
                right: 5px;
                .form-header {
                    padding-top: 40px;
                    padding-bottom: 49px;
                    text-align: center;
                    font-size: 24px;
                    color: #666666;
                    cursor: pointer;
                    .seperate {
                        padding: 0 34px;
                        color: #D8D8D8;
                    }
                    .accout:hover {
                        color: #FF6700;
                    }
                    .dimension:hover {
                        color: #FF6700;
                    }
                }
                .form-accout {
                    input {
                        box-sizing: border-box;
                        width: 348px;
                        height: 50px;
                        line-height: 50px;
                        margin: 0 auto;
                        display: block;
                        border: 1px solid #E5E5E5;
                        padding-left: 18px;
                        // outline: none;
                    }
                    .user-accout {
                        margin-bottom: 20px;
                    }
                    .password {
                        margin-bottom: 30px;
                    }
                    .submit {
                        margin-bottom: 14px;
                        padding-left:0;
                        background: #FF6600;
                        color: #fff;
                        cursor: pointer;
                    }
                }
                .form-other {
                    font-size: 14px;
                    text-align: center;
                    cursor: pointer;
                    .reg-forgotten {
                        padding-top: 20px;
                        font-size: 14px;
                        color: #9A9A9A;
                        a {
                            color: #9A9A9A;
                        }
                        span {
                            padding: 0 7px;
                        }
                        a:hover {
                            color: #FF6600;
                        }
                    }
                }
            }
        }
    }
    .footer {
        padding-top: 100px;
        padding-bottom: 40px;
        background: #fff;
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
