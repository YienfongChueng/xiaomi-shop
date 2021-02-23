<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
          <!-- 加载 -->
        <loading v-if="loading"></loading>
        <!-- 数据列表 -->
        <div class="order-box">
          <div class="order" v-for="item of orderList" :key="item.orderNo">
            <div class="order-title">
              <div class="item-info fl">
                {{item.createTime}}
                <span>|</span>
                {{item.receiverName}}
                <span>|</span>
                订单号：{{item.orderNo}}
                <span>|</span>
                {{item.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix" >
              <div class="good-box fl">
                <div class="good-list" v-for="(data, index) of item.orderItemVoList" :key="index">
                  <div class="good-img">
                    <img v-lazy="data.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{data.productName}}</div>
                    <div class="p-money">{{data.currentUnitPrice}} X {{data.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" @click="toPay(item.status,item.orderNo)">
                <a href="javascript:;">{{item.statusDesc}}</a>
              </div>
            </div>
          </div>
            <!-- 分页 -->
            <el-pagination
                class="pagination"
                background
                layout="prev, pager, next"
                :total="totalPage"
                :page-size="pageSize"
                @current-change = "handleChange">
            </el-pagination>
        </div>
        <!-- 没有数据 -->
        <no-data v-if="!loading && orderList.length === 0"></no-data>
      </div>
    </div>
  </div>
</template>
<script>
import OrderHeader from '@/components/OrderHeader.vue';
import Loading from '@/components/Loading.vue';
import NoData from '@/components/NoData.vue';
import { Pagination } from 'element-ui';
export default {
    name: 'order-list',
    components: {
        OrderHeader,
        Loading,
        NoData,
        [Pagination.name]: Pagination,
    },
    data () {
        return {
            orderList: [],
            loading: true,
            totalPage: 0,
            pageNum: 1,
            pageSize: 10,
        };
    },
    methods: {
        getOrderList () {
            const params = {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
            };
            this.$api.Order.getOrderList(params).then(res => {
                this.loading = false;
                this.orderList = res.list;
                this.totalPage = res.total;
            }).catch(() => {
                this.loading = false;
            });
        },
        toPay (status, orderNo) {
            // 未支付
            if (status === 10) {
                this.$router.push({
                    path: '/order/pay',
                    query: {
                        orderNo: orderNo,
                    },
                });
            }
        },
        handleChange (pageNum) {
            this.pageNum = pageNum;
            this.getOrderList();
        },
    },
    mounted () {
        this.getOrderList();
    },
};
</script>
<style lang="scss">
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
</style>
