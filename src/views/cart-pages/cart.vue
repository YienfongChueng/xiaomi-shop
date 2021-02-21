<template>
    <div class="cart">
        <order-header title="我的购物车">
            <template v-slot:tip>
                <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
            </template>
        </order-header>
        <div class="wrapper">
            <div class="container">
                <div class="cart-box">
                    <ul class="cart-item-head">
                        <li class="col-1"><span class="checkbox" :class="{'checked':allChecked}" @click="toggleAll"></span>全选</li>
                        <li class="col-3">商品名称</li>
                        <li class="col-1">单价</li>
                        <li class="col-2">数量</li>
                        <li class="col-1">小计</li>
                        <li class="col-1">操作</li>
                    </ul>
                    <ul class="cart-item-list">
                        <li class="cart-item" v-for="(item) in cartList" :key="item.productId">
                            <div class="item-check">
                                <span class="checkbox" :class="{'checked': item.productSelected}" @click="update(item,'check')"></span>
                            </div>
                            <div class="item-name">
                                <img v-lazy="item.productMainImage" alt="">
                                <span>{{item.productName + item.productSubtitle}}</span>
                            </div>
                            <div class="item-price">{{item.productPrice}}元</div>
                            <div class="item-num">
                                <div class="num-box">
                                    <a href="javascript:;" @click="update(item,'sub')">-</a>
                                    <span>{{item.quantity}}</span>
                                    <a href="javascript:;" @click="update(item,'add')">+</a>
                                </div>
                            </div>
                            <div class="item-total">{{item.productTotalPrice}}元</div>
                            <div class="item-del" @click="remove(item)"></div>
                        </li>
                    </ul>
                </div>
                <div class="order-wrap clearfix">
                <div class="cart-tip fl">
                    <a href="/">继续购物</a>
                    共<span>{{cartTotalQuantity}}</span>件商品，已选择<span>{{cartSelectedQuantity}}</span>件
                </div>
                <div class="total fr">
                    合计：<span>{{cartTotalPrice}}</span>元
                    <a href="javascript:;" class="btn" @click="order">去结算</a>
                </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
        <modal
            title="提示"
            btnType="3"
            :showModal="visiable"
            @cancel="visiable = false"
            @submit="del">
            <template #body>
                <p>确定要删除？</p>
            </template>
        </modal>
    </div>
</template>
<script>
import OrderHeader from '@/components/OrderHeader.vue';
import NavFooter from '@/components/NavFooter.vue';
import ServiceBar from '@/components/ServiceBar.vue';
import Modal from '@/components/Modal.vue';
export default {
    name: 'Cart',
    components: {
        OrderHeader,
        NavFooter,
        ServiceBar,
        Modal,
    },
    data () {
        return {
            cartList: [],
            allChecked: false,
            cartTotalPrice: 0,
            cartTotalQuantity: 0,
            cartSelectedQuantity: 0,
            visiable: false,
            delData: {},
        };
    },
    methods: {
        dealDatas (res) {
            this.cartList = res.cartProductVoList;
            this.allChecked = res.selectedAll;
            this.cartTotalPrice = res.cartTotalPrice;
            this.cartTotalQuantity = this.cartList.length;
            this.cartSelectedQuantity = this.cartList.filter(ele => ele.productSelected).length;
        },
        getCartList () {
            this.$api.Cart.getCartList().then(res => {
                this.dealDatas(res);
            });
        },
        toggleAll () {
            if (this.allChecked) {
                this.$api.Cart.unSelectAll().then(res => {
                    this.dealDatas(res);
                });
            } else {
                this.$api.Cart.selectAll().then(res => {
                    this.dealDatas(res);
                });
            }
        },
        update (data, type) {
            const params = {
                productId: data.productId,
                quantity: data.quantity,
                selected: data.productSelected,
            };
            switch (type) {
            case 'check':
                params.selected = !data.productSelected;
                break;
            case 'add':
                ++params.quantity;
                break;
            case 'sub':
                --params.quantity;
                break;
            default:
                break;
            }
            if (params.quantity <= 0) {
                this.$message.warning('商品数量不能少于0');
                return false;
            } else if (params.quantity > data.productStock) {
                this.$message.warning('已超出商品库存');
                return false;
            }
            this.$api.Cart.updateProduct(params).then(res => {
                this.dealDatas(res);
            });
        },
        remove (item) {
            this.visiable = true;
            this.delData = item;
        },
        del () {
            this.visiable = false;
            const pid = this.delData.productId;
            this.$api.Cart.removeProduct(pid).then(res => {
                this.dealDatas(res);
            });
        },
        order () {
            const isCheck = this.cartList.every(item => !item.productSelected);
            if (isCheck) {
                this.$message.warning('至少选择一项商品');
                return false;
            }
            this.$router.push('/order/confirm');
        },
    },
    mounted () {
        this.getCartList();
    },
};
</script>
<style lang="scss" scoped>
.cart{
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:114px;
      .cart-box{
        background-color:#fff;
        font-size:14px;
        color:#999999;
        text-align:center;
        .checkbox{
          display: inline-block;
          width: 22px;
          height: 22px;
          border: 1px solid #E5E5E5;
          vertical-align: middle;
          margin-right: 17px;
          cursor:pointer;
          &.checked{
            background:url('/imgs/icon-gou.png') #FF6600 no-repeat center;
            background-size:16px 12px;
            border:none;
          }
        }
        .cart-item-head{
          display:flex;
          height: 79px;
          line-height: 79px;
          .col-1{
            flex:1;
          }
          .col-2{
            flex:2;
          }
          .col-3{
            flex:3;
          }
        }
        .cart-item-list{
          .cart-item{
            display:flex;
            align-items:center;
            height:125px;
            border-top:1px solid #E5E5E5;
            font-size:16px;
            .item-check{
              flex:1;
            }
            .item-name{
              flex:3;
              font-size: 18px;
              color: #333333;
              display: flex;
              align-items: center;
              img{
                width:80px;
                height:80px;
                vertical-align:middle;
              }
              span{
                margin-left: 30px;
              }
            }
            .item-price{
              flex:1;
              color:#333333;
            }
            .item-num{
              flex:2;
              .num-box{
                display:inline-block;
                width:150px;
                height:40px;
                line-height:40px;
                border:1px solid #E5E5E5;
                font-size:14px;
                a{
                  display:inline-block;
                  width:50px;
                  color:#333333;
                }
                span{
                  display:inline-block;
                  width:50px;
                  color:#333333;
                }
              }
            }
            .item-total{
              flex:1;
              color:#FF6600;
            }
            .item-del{
              flex:1;
              width:14px;
              height:12px;
              background:url('/imgs/icon-close.png') no-repeat center;
              background-size:contain;
              cursor:pointer;
            }
          }
        }
      }
      .order-wrap{
        font-size:14px;
        color: #666666;
        margin-top: 20px;
        height: 50px;
        line-height: 50px;
        .cart-tip{
          margin-left: 29px;
          a{
            color: #666666;
            margin-right:37px;
          }
          span{
            color:#FF6600;
            margin:0 5px;
          }
        }
        .total{
          font-size:14px;
          color:#FF6600;
          span{
            font-size:24px;
          }
          a{
            width:202px;
            height:50px;
            line-height:50px;
            font-size:18px;
            margin-left:37px;
          }
        }
      }
    }
  }
</style>
