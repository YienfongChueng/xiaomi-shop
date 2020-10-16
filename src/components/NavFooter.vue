<template>
    <div class="footer">
        <img src="/imgs/logo-footer.png" alt="" class="footer-logo">
        <p class="footer-title">小米商城</p>
        <div class="footer-link">
            <a href="">小米商城</a><span>|</span>
            <a href="">MIUI</a><span>|</span>
            <a href="">米家</a><span>|</span>
            <a href="">米聊</a><span>|</span>
            <a href="">多看</a>
        </div>
        <div class="footer-right">
                © mi.com 京ICP证110507号 京ICP备10046444号
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavFooter',
};
</script>
<style lang="scss" scoped>
    .footer {
        height: 238px;
        background: #333;
        border-top: 4px solid #FF6600;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        color: #999999;
        &-logo {
            width: 53px;
            height: 36px;
            margin-top: 46px;
            margin-bottom: 13px;
        }
        &-link {
            margin-top: 31px;
            a {
                color: #999;
            }
            span {
                margin: 0 10px;
            }
        }
    }
</style>
