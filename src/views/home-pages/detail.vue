<template>
    <div class="detail">
        <product-param></product-param>
        <div class="content">
            <div class="container clearfix">
                <div class="swiper-item fl">
                    <swiper ref="mySwiper-2" :options="swiperOptions">
                        <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
                <div class="info-item fr">
                    <h2 class="title">小米8</h2>
                    <p class="desc">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
                    <div class="selleWay">小米自营</div>
                    <div class="price">
                        <span class="new-price">5599元</span>
                        <span class="old-price">4599元</span>
                    </div>
                    <div class="line"></div>
                    <div class="address-box">
                        <span class="icon-loc"></span>
                        <span class="addr">广东省 广州市 天河区 元岗街道</span>
                        <a href="javascript:;" class="modify">修改</a>
                        <div class="status">有现货</div>
                    </div>
                    <div class="color-box">
                        <p class="">选择颜色</p>
                        <div class="color-list">
                            <div class="color-item">陶瓷黑</div>
                            <div class="color-item">透明版</div>
                            <div class="color-item">亮银版</div>
                        </div>
                    </div>
                    <div class="version-box">
                        <p class="">选择版本</p>
                        <div class="version-list">
                            <div class="version-item">8GB+256GB</div>
                            <div class="version-item">8GB+128GB</div>
                            <div class="version-item">12GB+256GB</div>
                            <div class="version-item">16GB+512GB</div>
                        </div>
                    </div>
                    <div class="choose-box">
                        <p class="">
                            <span class="">小米8 6GB+64GB 全网通 深灰色</span>
                            <span class="price">5599元</span>
                        </p>
                        <div class="total">
                            总计：5599元
                        </div>
                    </div>
                    <div class="btn-box">
                        <a href="javascript:;" class="cart">加入购物车</a>
                        <a href="javascript:;" class="favor">喜欢</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="price-desc">
            <div class="container">
                <p class="price-title">价格说明</p>
                <img src="/imgs/detail/item-price.jpeg" alt="" class="price">
            </div>
        </div>
        <service-bar></service-bar>

    </div>
</template>
<script>
import ProductParam from '@/components/ProductParam.vue';
import ServiceBar from '@/components/ServiceBar.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
    name: 'Detail',
    components: {
        Swiper,
        SwiperSlide,
        ProductParam,
        ServiceBar,
    },
    data () {
        return {
            swiperOptions: {
                autoplay: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
        };
    },
};
</script>
<style lang="scss" scoped>
.detail {
    .content {
        background: #fff;
        .swiper-item {
            width:636px;
            height:617px;
            margin-top:5px;
            img{
                width:100%;
                height:100%;
            }
        }
        .info-item {
            width: 586px;
            margin-left: 3px;
            color: #343434;
            .title {
                font-size: 28px;
                padding-top: 30px;
                padding-bottom: 16px;

            }
            .desc {
                font-size: 14px;
                color: #9A9A9A;
            }
            .selleWay {
                font-size: 16px;
                color: #FF6700;
                padding-top: 26px;
                padding-bottom: 14px;
            }
            .price {
                color:#FF6700;
                .new-price {
                    font-size: 20px;
                }
                .old-price {
                    color: #9A9A9A;
                    font-size: 14px;
                    margin-left: 9px;
                    text-decoration: line-through;
                }
            }
            .line {
                width: 584px;
                height: 1px;
                background: #E5E5E5;
                margin: 25px 0;
            }
            .address-box {
                width: 582px;
                height: 106px;
                border: 1px solid #E5E5E5;
                background: #FAFAFA;
                color: #666;
                font-size: 14px;
                .icon-loc {
                    width: 22px;
                    height: 22px;
                    display: inline-block;
                    margin-left: 34px;
                    margin-top: 27px;
                    margin-right: 10px;
                    background: url('/imgs/icon-loc.png') no-repeat center;
                    background-size: contain;
                }
                .addr {
                    vertical-align: super;
                }
                .modify {
                    color: #FF6700;
                    margin-left: 20px;
                    vertical-align: super;
                }
                .status {
                    color: #FF6700;
                    margin-top: 15px;
                    margin-left: 64px;
                }
            }
        }
    }
    .price-desc {
        height: 340px;
        background: #F3F3F3;
        .price-title {
            font-size: 24px;
            color: #343434;
            padding: 38px 0 30px;
        }
        img {
            width: 1226px;
            height: 189px;
        }
    }
}
</style>
