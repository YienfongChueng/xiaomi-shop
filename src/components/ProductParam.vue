<template>
    <div class="nav-bar" :class="{'is_fixed' : isFixed}">
        <div class="container clearfix">
            <div class="pro-title fl">
                {{title}}
            </div>
            <div class="pro-params fr">
                <a href="javascript:;" class="">概述</a><span>|</span>
                <a href="javascript:;" class="">参数</a><span>|</span>
                <a href="javascript:;" class="">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProductParam',
    props: {
        title: String,
    },
    data () {
        return {
            isFixed: false,
        };
    },
    methods: {
        initHeight () {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
                document.body.scrollTop;
            this.isFixed = scrollTop > 152;
        },
    },
    mounted () {
        window.addEventListener('scroll', this.initHeight, false);
    },
    destroyed () {
        window.removeEventListener('scroll', this.initHeight, false);
    },
};
</script>
<style lang="scss" scoped>
.nav-bar {
    height: 70px;
    line-height: 70px;
    border-top: 1px solid #e5e5e5;
    background: #fff;
    top: -70px;
    &.is_fixed {
        position: fixed;
        top: 0;
        width: 100%;
        box-shadow: 0 5px 10px #ccc;
        transition: all .8s ease-in-out;
        z-index: 10;
    }
    .container {
        .pro-title {
            font-size: 18px;
            color: #343434;
        }
        .pro-params {
            font-size: 14px;
            color:#666666;
            a {
                color:#666666;
            }
            span {
                padding: 0 11px;
            }
        }
    }
}
</style>
