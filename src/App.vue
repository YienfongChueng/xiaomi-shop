<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
    name: 'App',
    data () {
        return {

        };
    },
    methods: {
        getUser () {
            this.$api.User.getUserInfo()
                .then((res = {}) => {
                    // todo vuex
                    this.$store.dispatch('saveUserName', res.username);
                });
        },
        getCartCount () {
            this.$api.Cart.getCartSum()
                .then((res = 0) => {
                // todo vuex
                    this.$store.dispatch('saveCartCount', res);
                });
        },
    },
    mounted () {
        if (this.$cookie.get('userId')) {
            this.getUser();
            this.getCartCount();
        }
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';
</style>
