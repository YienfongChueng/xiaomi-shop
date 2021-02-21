 <template>
    <div class="order-header">
        <div class="container clearfix">
            <div class="left-wrap fl">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="title">
                    {{title}}
                    <slot name="tip"></slot>
                </div>
            </div>
            <div class="right-wrap fr">
                <span class="user">
                    {{$store.state.username}}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'OrderHeader',
    props: {
        title: String,
    },
};
</script>
<style lang="scss" scoped>
.order-header {
    height: 112px;
    background: #fff;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #FF6600;
}
.left-wrap {
    display: flex;
    align-items: center;
    .title {
        font-size: 28px;
        color: #666;
        font-weight: bold;
        margin-left: 44px;
    }
    span {
        font-size: 14px;
        margin-left: 30px;
        color: #999;
        font-weight: normal;
    }
}
.right-wrap {
    line-height: 55px;
    .user {
        font-size: 14px;
        color: #666;
        vertical-align: middle;
    }
}
</style>
