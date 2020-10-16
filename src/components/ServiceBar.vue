<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><i class="icon-setting"></i>预约维修服务</li>
                <li><i class="icon-7day"></i>7天无理由退货</li>
                <li><i class="icon-15day"></i>15天免费换货</li>
                <li><i class="icon-post"></i>满150元包邮</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ServiceBar',
};
</script>
<style lang="scss" scoped>
.service {
    padding: 33px 0;
    background-color: #fff;
    color: #666666;
    font-size: 16px;
    li {
        display: inline-block;
        width: 24.9%;
        text-align: center;
        border-right: 1px solid #E5E5E5;
        cursor: pointer;
        &:last-child {
            border: none;
        }
    }
    i {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        padding-right: 8px;
    }
    .icon-setting {
        @include bgImg(20px,20px,'/imgs/icon-setting.png');
    }
    .icon-7day {
        @include bgImg(20px,20px,'/imgs/icon-7day.png');
    }
    .icon-15day {
        @include bgImg(20px,20px,'/imgs/icon-15day.png');
    }
    .icon-post {
        @include bgImg(20px,20px,'/imgs/icon-post.png');
    }

}
</style>
