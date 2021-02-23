<template>
    <div class="order">
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavFooter from '@/components/NavFooter.vue';
import ServiceBar from '@/components/ServiceBar.vue';
export default {
    name: 'Order',
    components: {
        NavFooter,
        ServiceBar,
    },
};
</script>
<style lang="scss" scoped>

</style>
