<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;" class="topbar-link">小米商城</a>
                    <a href="javascript:;" class="topbar-link">MIUI</a>
                    <a href="javascript:;" class="topbar-link">云服务</a>
                    <a href="javascript:;" class="topbar-link">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" class="topbar-link" v-if="!username" @click="gotoLogin">登陆</a>
                    <a href="javascript:;" class="topbar-link" v-if="username">{{username}}</a>
                    <a href="javascript:;" class="topbar-link" v-if="username">我的订单</a>
                    <a href="javascript:;" class="topbar-link my-cart"><i class="icon-cart"></i>购物车({{cartCount}})</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="menu-item"
                        v-for="item of categoryList"
                        :key="item.id">
                        <span class="menu-item-title">{{item.name}}</span>
                        <div class="menu-item-children"
                            v-if="item.list.length > 0">
                            <ul class="clearfix">
                                <li class="product"
                                    v-for="childItem of item.list"
                                    :key="childItem.id">
                                    <a class="link" @click="gotoDetail(childItem.id)">
                                        <div class="pro-img">
                                            <img :src="childItem.mainImage" :alt="childItem.subtitle">
                                        </div>
                                        <div class="pro-name">{{childItem.name}}</div>
                                        <div class="pro-price">{{childItem.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="menu-item-children"
                            v-else>
                            <div class="no-data">暂无数据...</div>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input class="search-input" type="text" name="keyword">
                        <i class="icon-search"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavHeader',
    data () {
        return {
            categoryList: [
                {
                    id: 100012,
                    name: '小米手机',
                    list: [],
                },
                {
                    id: 100008,
                    name: 'Redmi红米',
                    list: [],
                },
                {
                    id: 100002,
                    name: '电视',
                    list: [],
                },
            ],
        };
    },
    computed: {
        username () {
            return this.$store.state.username;
        },
        cartCount () {
            return this.$store.state.cartCount;
        },
    },
    methods: {
        getProductList () {
            const params = {
                categoryId: '',
                keyword: '',
                pageSize: 18,
            };
            this.$api.Product.getProductList(params)
                .then(res => {
                    const categoryHash = (res.list || []).reduce((obj, d) => {
                        if (!obj[d.categoryId]) {
                            obj[d.categoryId] = [];
                        }
                        obj[d.categoryId].push(d);
                        return obj;
                    }, {});

                    this.categoryList.forEach((item, index) => {
                        if (item.id === 100012) {
                            item.list = categoryHash[item.id];
                        }
                    });
                });
        },
        gotoDetail (id) {
            const resolve = this.$router.resolve('/product/' + id);
            window.open(resolve.href);
        },
        gotoLogin () {
            this.$router.push('/login');
        },
    },
    created () {
        this.getProductList();
    },
};
</script>
<style lang="scss" scoped>
    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background: #333;
            color: #B0B0B0;
            .container {
                @include flex();
                .topbar-link {
                    display: inline-block;
                    color: #B0B0B0;
                    font-size: 12px;
                    margin-right: 17px;
                    &:hover {
                        color: #fff;
                    }
                }
                .my-cart {
                    width: 110px;
                    line-height: 39px;
                    background: #666;
                    text-align: center;
                    margin-right: 0;
                    .icon-cart {
                        @include bgImg(16px,12px,'/imgs/icon-cart.png');
                        margin-right: 4px;
                    }
                    &:hover {
                        color: #FF6600;
                        background: #fff;
                        .icon-cart{
                             background-image: url('/imgs/icon-cart-hover.png');
                        }
                    }
                }
            }
        }
        .nav-header {
            .container {
                height: 119px;
                @include flex();
                position: relative;
                .header-logo {
                    width: 55px;
                    height: 55px;
                    background-color: #FF6600;
                    a {
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &::before {
                            content: ' ';
                            @include bgImg(55px,55px,'/imgs/mi-logo.png');
                            transition: margin .2s;
                        }
                        &::after {
                            content: ' ';
                            @include bgImg(55px,55px,'/imgs/mi-home.png');
                        }
                        &:hover::before {
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
                .header-menu {
                    flex: 1 1 auto;
                    padding-left: 209px;
                    .menu-item {
                        cursor: pointer;
                        display: inline-block;
                        color: #333333;
                        &:hover {
                            color: #FF6600;
                            .menu-item-children {
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        &-title {
                            font-size: 16px;
                            font-weight: bold;
                            line-height: 112px;
                            padding: 0 20px;
                        }
                        &-children {
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: $min-width;
                            height: 0;
                            opacity: 0;
                            overflow: hidden;
                            border-top: 1px solid #E5E5E5;
                            box-shadow: 0 7px 6px 0 rgba(0,0,0,0.11);
                            z-index: 10;
                            background-color: #fff;
                            transition: all .3s;
                            .product {
                                float: left;
                                height: 220px;
                                width: 16.6%;
                                text-align: center;
                                position: relative;
                                &::before {
                                    content: ' ';
                                    display: inline-block;
                                    width: 1px;
                                    height: 111px;
                                    background-color: #B0B0B0;
                                    position: absolute;
                                    left: 0;
                                    top: 28px;
                                }
                                &:first-child::before {
                                    display: none;
                                }
                                .link {
                                    width: 100%;
                                    display: inline-block;
                                    font-size: 12px;
                                    color: #333;
                                    line-height: 12px;
                                    .pro-img {
                                        height: 137px;
                                        img {
                                            width: auto;
                                            height: 111px;
                                            margin-top: 26px;
                                        }
                                    }
                                    .pro-name {
                                        margin-top: 19px;
                                        margin-bottom: 8px;
                                        font-weight: bold;
                                    }
                                    .pro-price {
                                        color: #FF6600
                                    }
                                }
                            }
                            .no-data {
                                text-align: center;
                                font-size: 20px;
                                line-height: 220px;
                            }
                        }

                    }
                }
                .header-search {
                    width: 319px;
                    .wrapper {
                        height: 50px;
                        border: 1px solid #E0E0E0;
                        display: flex;
                        align-items: center;
                        .search-input {
                            box-sizing: border-box;
                            width: 264px;
                            height: 50px;
                            border: none;
                            border-right: 1px solid #E0E0E0;
                            padding: 0 14px;
                        }
                        .icon-search {
                            @include bgImg(18px,18px,'/imgs/icon-search.png');
                            margin-left: 19px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>
