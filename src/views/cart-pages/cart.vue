<template>
    <div class="cart">
        <order-header></order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from '@/components/OrderHeader.vue';
import NavFooter from '@/components/NavFooter.vue';
export default {
    name: 'Cart',
    components: {
        OrderHeader,
        NavFooter,
    },
};
</script>
<style lang="scss" scoped>

</style>
