<template>
    <div class="product">
        <product-param :title="product.name">
            <template #buy>
                <button class="btn" @click="goDetail">立即购买</button>
            </template>
        </product-param>
        <div class="content">
            <div class="item-bg">
                <h2 class="main-title">{{product.name}}</h2>
                <h3 class="sub-title">{{product.subtitle}}</h3>
                <p class="feature">
                    <a href="javascript:;">全球首款双频 GP</a><span>|</span>
                    <a href="javascript:;">骁龙845</a><span>|</span>
                    <a href="javascript:;">AI 变焦双摄</a><span>|</span>
                    <a href="javascript:;">红外人脸识别</a>
                </p>
                <div class="price">
                    <span class="new-price">￥<em>{{product.price}}</em></span>
                    <span class="old-price">￥{{product.price + 99}}</span>
                </div>
            </div>
            <div class="item-bg-2"></div>
            <div class="item-bg-3"></div>
            <div class="item-swiper">
                 <swiper ref="mySwiper-1" :options="swiperOptions">
                    <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <p class="desc">小米8 AI变焦双摄拍摄</p>
            </div>
            <div class="item-video">
                <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
                <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
                <div class="video-bg" @click="showVideo"></div>
                <div class="video-box">
                    <div class="overlay" v-if="isShowVideo"></div>
                    <div class="video" :class="{'slide':isShowVideo}">
                        <i class="icon-close" @click="closeVideo"></i>
                        <video ref="myVideo" src="/imgs/product/video.mp4" controls="controls"></video>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProductParam from '@/components/ProductParam.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
    name: 'Product',
    components: {
        Swiper,
        SwiperSlide,
        ProductParam,
    },
    data () {
        return {
            product: {},
            isShowVideo: false,
            swiperOptions: {
                loop: true,
                autoplay: true,
                freeMode: true,
                slidesPerView: 3,
                spaceBetween: 22,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
        };
    },
    methods: {
        getProductDetail () {
            const id = this.$route.params.id;
            this.$api.Product.getProductDetails(id)
                .then(res => {
                    this.product = res;
                });
        },
        goDetail () {
            const id = this.$route.params.id;
            this.$router.push(`/detail/${id}`);
        },
        showVideo () {
            // 显示视频，并自动播放
            this.$refs.myVideo.play();
            this.isShowVideo = true;
            return this.isShowVideo;
        },
        closeVideo () {
            // 隐藏视频，并停止播放
            this.$refs.myVideo.pause();
            this.isShowVideo = false;
            return this.isShowVideo;
        },
    },
    mounted () {
        this.getProductDetail();
    },
};
</script>
<style lang="scss" scoped>
.product {
    .btn {
        margin-left: 11px;
    }
    .content {
        width: 100%;
        .item-bg {
            background:url('/imgs/product/product-bg-1.png') no-repeat center;
            height:718px;
            text-align: center;
            color: #343434;
            .main-title {
                font-size: 80px;
                padding-top:55px;
            }
            .sub-title {
                font-size: 24px;
                letter-spacing: 11px;
                font-weight: normal;
            }
            .feature {
                font-size: 16px;
                color: #343434;
                margin-bottom: 40px;
                a {
                    color: #343434;
                }
                span {
                    padding: 0 15px;
                }
            }
            .price {
                font-size: 30px;
                .new-price {
                    em {
                        font-size: 38px;
                        padding-left: 6px;
                        vertical-align: sub;
                    }
                }
                .old-price {
                    padding-left: 8px;
                    text-decoration: line-through;
                    font-size: 26px;
                    padding-left: 4px;
                }
            }
        }
        .item-bg-2 {
            background:url(/imgs/product/product-bg-2.png) no-repeat center;
            height:480px;
            background-size:1226px 397px;
        }
        .item-bg-3 {
            background:url(/imgs/product/product-bg-3.png) no-repeat center;
            height:638px;
            background-size:cover;
        }
        .item-swiper {
            margin:35px auto 52px;
            .desc {
                font-size: 18px;
                color: #343434;
                text-align: center;
                padding-top: 30px;
            }
            img{
                width:100%;
            }
        }
        .item-video {
            height: 1044px;
            text-align: center;
            color: #fff;
            background-color: #080808;
            margin-bottom:76px;
            .video-bg {
                background: url('/imgs/product/gallery-1.png');
                background-size:cover;
                width:1226px;
                height:540px;
                margin:0 auto 120px;
                cursor:pointer;
            }
            h2 {
                font-size: 60px;
                padding-top: 82px;
            }
            p {
                font-size: 24px;
                padding-top: 47px;
                margin-bottom: 58px;
            }
            .video-box {
                .overlay {
                    @include position(fixed);
                    background-color: #333;
                    opacity: .4;
                    z-index:10;
                }
                .video {
                    position: fixed;
                    top: -50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    z-index:10;
                    width:1000px;
                    height:536px;
                    opacity:0;
                    transition: all .5s;
                    &.slide {
                        top: 50%;
                        opacity: 1;
                    }
                    .icon-close {
                        width: 44px;
                        height: 44px;
                        border-radius: 22px;
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        background: url('/imgs/icon-close.png') no-repeat center;
                        background-color: rgb(250, 15, 15);
                        cursor: pointer;
                        z-index: 10;
                    }
                    video {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        outline: none;
                    }
                }
            }
        }
    }
}
</style>
