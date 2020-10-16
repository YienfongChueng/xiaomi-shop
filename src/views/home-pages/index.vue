<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-wrapper">
                    <ul class="menu-list">
                        <li class="menu-item"
                            v-for="item of menuListFilter"
                            :key="item.id">
                            <a href="javascript:;" class="menu-link">{{item.name}}</a>
                            <div class="children">
                                <ul v-if="item.children.length > 0" class="children-list">
                                    <li class="children-item"
                                        v-for="childItem of item.children"
                                        :key="childItem.id">
                                        <a :href="'/#/product/' + childItem.id" class="children-link">
                                            <img v-lazy="childItem.img"  class="children-img">
                                            <span class="children-title">{{childItem.name}}</span>
                                        </a>
                                    </li>
                                </ul>
                                <div v-else class="no-data">
                                    暂无数据...
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide
                        v-for="item of swiperList"
                        :key="item.id">
                        <a :href="'/#/product/'+ item.id" class="swiper-link">
                            <img :src="item.img" class="swiper-img">
                        </a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">
                <a :href="'/#/product/'+item.id" class="ads-link"
                    v-for="item of adsList"
                    :key="item.id">
                    <img v-lazy="item.img" class="ads-img">
                </a>
            </div>
            <div class="banner-box">
                <a href="/#/product/30" class="banner-link">
                    <img v-lazy="'/imgs/banner-1.png'" class="banner-img">
                </a>
            </div>
        </div>
        <div class="product-box">
            <div class="container">
                <div class="wrapper">
                    <h1 class="main-title">手机</h1>
                    <div class="product-wrapper clearfix">
                        <div class="product-left">
                            <img v-lazy="'/imgs/mix-alpha.jpg'" class="big-img">
                        </div>
                        <ul class="product-right">
                            <li class="item"
                                v-for="(item,index) of productList"
                                :key="item.id">
                                <span :class="['tag',{'new-pro' : index%2 === 0}]">新品</span>
                                <div class="img-wrapper">
                                    <img v-lazy="item.mainImage"  class="item-img">
                                </div>
                                <p class="title">{{item.name}}</p>
                                <p class="subtitle">{{item.subtitle}}</p>
                                <div class="price">
                                    <span class="new-price">{{item.price | currency}}</span>
                                    <span class="old-price">{{item.price - 100}}元</span>
                                    <span class="icon-cart" @click="addCart(item.id)"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <modal
            modalType="middle"
            title="提示"
            btnType="1"
            sureText="查看购物车"
            :showModal="showModal"
            @cancel="closeDialog"
            @submit="gotoCart">
            <template #body>
                <p>添加购物车成功！</p>
            </template>
        </modal>
    </div>
</template>
<script>
import ServiceBar from '@/components/ServiceBar.vue';
import Modal from '@/components/Modal.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
    name: 'Index',
    components: {
        Swiper,
        SwiperSlide,
        ServiceBar,
        Modal,
    },
    data () {
        return {
            swiperOptions: {
                speed: 500,
                autoplay: true,
                loop: true,
                effect: 'cube',
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            swiperList: [
                {
                    id: '42',
                    img: '/imgs/slider/slide-1.jpg',
                },
                {
                    id: '45',
                    img: '/imgs/slider/slide-2.jpg',
                },
                {
                    id: '46',
                    img: '/imgs/slider/slide-3.jpg',
                },
                {
                    id: '47',
                    img: '/imgs/slider/slide-4.jpg',
                },
                {
                    id: '48',
                    img: '/imgs/slider/slide-5.jpg',
                },
            ],
            menuList: [
                {
                    id: '42',
                    name: '手机 电话卡',
                    children: [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9',
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米青春版',
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Redmi K20 Pro',
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区',
                        },
                        {
                            id: 34,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9',
                        },
                        {
                            id: 35,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9',
                        },
                        {
                            id: 36,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9',
                        },
                        {
                            id: 37,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9',
                        },
                        {
                            id: 38,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9',
                        },
                    ],
                },
                {
                    id: '43',
                    name: '电视 盒子',
                    children: [],
                },
                {
                    id: '44',
                    name: '笔记本 显示器',
                    children: [],
                },
                {
                    id: '45',
                    name: '家电 插线板',
                    children: [],
                },
                {
                    id: '462',
                    name: '出行 穿戴',
                    children: [],
                },
                {
                    id: '47',
                    name: '智能 路由器',
                    children: [],
                },
                {
                    id: '48',
                    name: '电源 配件',
                    children: [],
                },
                {
                    id: '49',
                    name: '健康 儿童',
                    children: [],
                },
                {
                    id: '50',
                    name: '耳机 音响',
                    children: [],
                },
                {
                    id: '51',
                    name: '生活 箱包',
                    children: [],
                },
            ],
            adsList: [
                {
                    id: 33,
                    img: '/imgs/ads/ads-1.png',
                },
                {
                    id: 48,
                    img: '/imgs/ads/ads-2.jpg',
                },
                {
                    id: 45,
                    img: '/imgs/ads/ads-3.png',
                },
                {
                    id: 47,
                    img: '/imgs/ads/ads-4.jpg',
                },
            ],
            productList: [],
            showModal: false,
        };
    },
    computed: {
        menuListFilter () {
            return this.menuList.length > 24 ? this.menuList.slice(0, 24) : this.menuList;
        },
    },
    methods: {
        initData () {
            const params = {
                categoryId: '100012',
                keyword: '',
                pageSize: 8,
            };
            this.$api.Product.getProductList(params)
                .then(res => {
                    this.productList = res.list;
                });
        },
        addCart (id) {
            this.$api.Cart.addCart(id)
                .then(res => {
                    if (res.status === 0) {
                        this.showModal = true;
                    }
                });
        },
        closeDialog () {
            this.showModal = false;
        },
        gotoCart () {
            this.showModal = false;
            this.$router.push('/cart');
        },
    },
    mounted () {
        this.initData();
    },
};
</script>
<style lang="scss" scoped>
    .index {
        .swiper-box {
            position: relative;
            .swiper-container {
                height: 451px;
                .swiper-button-prev {
                    left: 274px;
                }
            }
            .swiper-img {
                width: 100%;
                height: 100%;
            }
            .nav-wrapper {
                position: absolute;
                top: 0;
                left: 0;
                width: 264px;
                z-index: 9;
                .menu-list {
                    box-sizing: border-box;
                    height: 451px;
                    background: rgba(105,101,101,.6);
                    padding: 20px 0;
                    color: #fff;
                    font-size: 16px;
                    .menu-item {
                        height: 42px;
                        line-height: 42px;
                        .menu-link {
                            display: block;
                            position: relative;
                            padding-left: 30px;
                            color: #fff;
                            &::after {
                                content: ' ';
                                position: absolute;
                                top:12px;
                                right: 20px;
                                @include bgImg(16px,16px, '/imgs/icon-arrow.png');
                            }
                        }
                        &:hover {
                            background: #FF6600;
                            .children {
                                display:block;
                            }
                        }
                        .children {
                            display: none;
                            width: 962px;
                            height: 450px;
                            position: absolute;
                            top: 0;
                            left: 264px;
                            background: #fff;
                            border-top: 1px solid #e5e5e5;
                            box-shadow: 0 8px 16px rgba(0,0,0,.18);
                            &-list {
                                height: 75px;
                            }
                            .children-item {
                                box-sizing: border-box;
                                display: inline-block;
                                height: 75px;
                                line-height: 75px;
                                width: 25%;
                                padding-left: 20px;
                                text-align: center;
                                &:hover {
                                    .children-title {
                                        color: #FF6600;
                                    }
                                }
                            }
                            &-link {
                                display: inline-block;
                                color: #333;
                                transition: color .2s;
                                line-height: 40px;
                                padding: 18px 0;
                            }
                            &-img {
                                width: 42px;
                                height: 35px;
                                vertical-align: middle;
                            }
                            &-title {
                                display: inline-block;
                                width: 172px;
                                vertical-align: middle;
                                @include ellipsis;
                            }
                            .no-data {
                                color: #FF6600;
                                font-size: 16px;
                                text-align: center;
                            }
                        }
                    }
                }
            }
        }
        .ads-box {
            @include flex();
            margin-top: 14px;
            margin-bottom: 31px;
            .ads-link {
                width: 296px;
                height: 167px;
                &:hover {
                    box-shadow: 0 15px 30px rgba(0,0,0,.1);;
                }
            }
        }
        .banner-box {
            margin-bottom: 50px;
            &:hover {
                    box-shadow: 0 15px 30px rgba(0,0,0,.1);;
                }
        }

        .product-box {
            background: #F5F5F5;
            .wrapper {
                margin-top: 71px;
                margin-bottom: 50px;
                .main-title {
                    font-size: 22px;
                    color: #333;
                    padding-top: 30px;
                }
                .product-wrapper {
                    margin-top: 20px;
                    margin-bottom: 50px;
                }
                .product-left {
                    width: 224px;
                    height: 619px;
                    float: left;
                    margin-right: 16px;
                }
                .product-right {
                    @include flex();
                    flex-wrap: wrap;
                    .item {
                        flex: 0 0 236px;
                        width: 236px;
                        height: 302px;
                        margin-bottom: 14px;
                        text-align: center;
                        background: #fff;
                        transition: all .3s ease-out;
                        .img-wrapper {
                            height: 194px;
                        }
                        &-img {
                            max-width: 100%;
                            max-height: 100%;
                            width: auto;
                            height: auto;
                            margin: 10px 0;
                        }
                        .tag {
                            display: inline-block;
                            width: 67px;
                            height: 24px;
                            line-height: 24px;
                            font-size: 14px;
                            color: #fff;
                            text-align: center;
                            &.new-pro {
                                background: #7ECF68;
                            }
                            &.kill-pro {
                                background: #E82626;
                            }
                        }
                        .title {
                            color: #333;
                            font-size: 14px;
                            font-weight: bold;
                            width: 200px;
                            margin: 0 auto;
                            @include ellipsis;
                        }
                        .subtitle {
                            font-size: 12px;
                            color: #999;
                            width: 220px;
                            margin: 0 auto;
                            @include ellipsis;
                        }
                        .price {
                            color: #FF6600;
                            font-size: 14px;
                            line-height: 40px;
                            cursor: pointer;
                            .new-price {
                                padding: 0 10px;
                                font-weight: bold;
                            }
                            .old-price {
                                text-decoration: line-through;
                                color: #b0b0b0;
                                padding: 0 10px;
                            }
                            .icon-cart {
                                cursor: pointer;
                                vertical-align: middle;
                                @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                            }
                            // &::after {
                            //     vertical-align: middle;
                            //     content: ' ';
                            //     @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                            // }
                        }
                        &:hover {
                            transform: translate3d(0,-2px,0);
                            box-shadow: 0 15px 30px rgba(0,0,0,.1);
                        }
                    }
                }
            }
        }
    }
</style>
