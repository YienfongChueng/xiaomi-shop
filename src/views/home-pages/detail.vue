<template>
    <div class="detail">
        <product-param :title="product.name"></product-param>
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
                    <h2 class="title">{{product.name}}</h2>
                    <p class="desc">{{product.subtitle}}</p>
                    <div class="selleWay">小米自营</div>
                    <div class="price">
                        <span class="new-price">{{product.price | currency}}</span>
                        <span class="old-price">{{product.price - 99 | currency}}</span>
                    </div>
                    <div class="line"></div>
                    <div class="address-box">
                        <span class="icon-loc"></span>
                        <span class="addr">广东省 广州市 天河区 元岗街道</span>
                        <a href="javascript:;" class="modify">修改</a>
                        <div class="status" v-if="product.stock > 0">有现货</div>
                        <div class="status zero" v-if="product.stock <= 0">缺货</div>
                    </div>
                    <div class="attribute-box">
                        <p class="">选择颜色</p>
                        <div class="attribute-list">
                            <div
                                v-for="(item,index) in colorsAttr"
                                :key="index" class="attribute-item"
                                :class="{'check': item.type === version}">{{item.name}}</div>
                        </div>
                    </div>
                    <div class="attribute-box">
                        <p class="">选择版本</p>
                        <div class="attribute-list">
                            <div class="attribute-item"
                                v-for="(item,index) in versionsAttr"
                                :key="index"
                                :class="{'check': item.type === version}"
                                @click="version = item.type">{{item.name}}</div>
                        </div>
                    </div>
                    <div class="choose-box">
                        <p class="clearfix">
                            <span class="attr fl">{{product.name}} {{userSelected}}</span>
                            <span class="price fr">{{totalPrice | currency}}</span>
                        </p>
                        <div class="total">
                            总计：{{totalPrice | currency}}
                        </div>
                    </div>
                    <div class="btn-box btn-group">
                        <a href="javascript:;" @click="addCart" class="cart btn btn-huge">加入购物车</a>
                        <a href="javascript:;" class="favor btn btn-middle btn-default">喜欢</a>
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
            id: this.$route.params.id,
            version: 1,
            product: {},
            colorsAttr: [
                { type: 1, name: '陶瓷黑' },
                { type: 2, name: '透明版' },
                { type: 3, name: '亮银版' },
            ],
            versionsAttr: [
                { type: 1, name: '8GB+256GB 全网通' },
                { type: 2, name: '8GB+128GB 移动' },
                { type: 3, name: '12GB+256GB 联通' },
                { type: 4, name: '16GB+512GB 全网通' },
            ],
            versionwidthColorAttr: [
                { type: 1, name: '8GB+256GB 全网通 陶瓷黑', price: 1230 },
                { type: 2, name: '8GB+128GB 移动 透明版', price: 2378 },
                { type: 3, name: '12GB+256GB 联通 亮银版', price: 1456 },
                { type: 4, name: '16GB+512GB 全网通', price: 999 },
            ],
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
    computed: {
        userSelected () {
            for (const item of this.versionwidthColorAttr) {
                if (item.type === this.version) {
                    return item.name;
                }
            }
            return '';
        },
        totalPrice () {
            for (const item of this.versionwidthColorAttr) {
                if (item.type === this.version) {
                    return item.price;
                }
            }
            return '';
        },
    },
    methods: {
        getProductDetail () {
            this.$api.Product.getProductDetails(this.id)
                .then(res => {
                    this.product = res;
                });
        },
        addCart () {
            this.$api.Cart.addCart({ productId: this.id }).then(res => {
                console.log(res);
                this.$store.dispatch('saveCartCount', res.cartTotalQuantity);
                this.$router.push('/cart');
            });
        },
    },
    mounted () {
        this.getProductDetail();
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
                .zero {
                    color: #f00;
                }
            }
            .attribute-box {
                color: #343434;
                p {
                    font-size: 18px;
                    margin-top: 30px;
                    margin-bottom: 10px;
                }
                .attribute-list {
                    font-size: 16px;
                    .attribute-item {
                        display: inline-block;
                        width: 287px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        margin-right: 10px;
                        margin-top: 10px;
                        border: 1px solid #E5E5E5;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:nth-child(even) {
                            margin-right: 0;
                        }
                    }
                    .check {
                        border-color:#FF6600;
                        color: #FF6600;
                    }
                }

            }
            .choose-box {
                width: 584px;
                height: 108px;
                box-sizing: border-box;
                background-color: #FAFAFA;
                margin-top: 50px;
                padding: 24px 33px 24px 30px;
                p {
                    color: #343434;
                    font-size: 14px;

                }
                .total {
                    color: #FF6700;
                    font-size: 24px;
                    margin-top: 18px;
                }

            }
            .btn-box {
                margin-top: 50px;
                margin-bottom: 50px;
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
