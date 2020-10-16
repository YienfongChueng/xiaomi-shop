<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <div class="mask"></div>
            <div class="dialog">
                <div class="modal-header">
                    <span>{{title}}</span>
                    <a href="javascript:;" class="icon-close" @click="closeDialog"></a>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <a v-if="btnType == 1" @click="okDialog" href="javascript:;" class="btn">{{sureText}}</a>
                    <a v-else-if="btnType == 2" @click="closeDialog" href="javascript:;" class="btn btn-default">{{cancelText}}</a>
                    <div v-else class="btn-group">
                        <a href="javascript:;" @click="okDialog" class="btn">{{sureText}}</a>
                        <a href="javascript:;" @click="closeDialog" class="btn btn-default">{{cancelText}}</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'Modal',
    props: {
        // 弹窗类型，小small、中middle、大large、表单form
        modalType: {
            type: String,
            default: 'form',
        },
        // 弹窗标题
        title: String,
        // 按钮类型：1确定按钮、2取消按钮、3确定取消
        btnType: String,
        sureText: {
            type: String,
            default: '确定',
        },
        cancelText: {
            type: String,
            default: '取消',
        },
        showModal: Boolean,
    },
    methods: {
        closeDialog () {
            this.$emit('cancel');
        },
        okDialog () {
            this.$emit('submit');
        },
    },
};
</script>
<style lang="scss" scoped>
.modal {
    @include position(fixed);
    z-index: 20;
    transition: all .5s;
    .mask {
        @include position(fixed);
        background: #000;
        opacity: 0.5;
    }

    &.slide-enter-active {
        top: 0;
    }
    &.slide-leave-active,&.slide-enter {
        top: -100%;
    }

    .dialog {
        @include position(absolute,40%,50%,606px,auto);
        transform: translate(-50%,-50%);
        color: #fff;
        .modal-header {
            height: 60px;
            line-height: 60px;
            background: #f5f5f5;
            padding: 0 25px;
            font-size: 16px;
            color: #666;
            .icon-close {
                @include positionImg(absolute,23px, 25px, 14px,14px,'/imgs/icon-close.png');
                transition: transform .3s;
                &:hover {
                    transform: scale(1.5);
                }
            }
        }
        .modal-body {
            padding: 42px 40px 54px;
            font-size: 14px;
            background: #fff;
            color: #333333;
        }
        .modal-footer {
            height: 82px;
            line-height: 82px;
            text-align:center;
            background: #f5f5f5;
        }
    }

}
</style>
