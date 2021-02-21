<template>
    <div class="alipay">
        <loading v-if="loading"></loading>
        <div class="content" v-html="content"></div>
    </div>
</template>
<script>
import Loading from '@/components/Loading.vue';
export default {
    name: 'AliPay',
    components: {
        Loading,
    },
    data () {
        return {
            content: '',
            orderId: this.$route.query.orderId,
            loading: true,
        };
    },
    methods: {
        paySubmit () {
            const params = {
                orderId: this.orderId,
                orderName: '高仿小米商城学习', // 扫码支付时订单名称
                amount: 0.01, // 单位元
                payType: 1, // 1支付宝，2微信
            };
            this.$api.Pay.pay(params).then(res => {
                this.content = res.content;
                setTimeout(() => {
                    document.forms[0].submit();
                }, 100);
            });
        },
    },
    mounted () {
        this.paySubmit();
    },
};
</script>
<style lang="scss" scoped>

</style>
