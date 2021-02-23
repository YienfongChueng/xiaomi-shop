# mi-shop-fe
仿小米商城
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## vue-swiper API文档
https://www.swiper.com.cn/api/index.html

## 跨域的几种实现方式

1. nginx代理
这种方式本地和线上的开发方式都比较简单；本地不需要添加.env.dev和.env.prod配置，以及config.js文件，只需要关系vue.config.js然后做环境地阿里即可；不同的环境，设置不同的代理域名

2. CORS解决跨域
这种方式不需要配置nginx；但是本地需要维护多套环境，根据process.env.NODE_DEV来切换开发和线上环境地址；config中做切换；

线上nginx配置：
location /api/ {
  proxy_pass http://mall-pre.springboot.cn/;
}
线上nginx配置的时候，代理域名后面需要加/,这样在请求的时候会去掉/api，否则请求的时候会包含/api

## swiper中文文档
https://www.swiper.com.cn/

## Css3动画库
https://daneden.github.io/animate.css/

## 微信扫码支付开发文档
https://pay.weixin.qq.com/wiki/doc/api/index.html

https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=6_5




#### 1.产品搜索及动态排序List

**GET /products

> request

```
categoryId
keyword
pageNum(default=1)
pageSize(default=10)
orderBy(default="")：排序参数：例如price_desc，price_asc

```

> response

success

```
{
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 2,
        "orderBy": null,
        "startRow": 1,
        "endRow": 2,
        "total": 2,
        "pages": 1,
        "list": [
            {
                "id": 1,
                "categoryId": 3,
                "name": "iphone7",
                "subtitle": "双十一促销",
                "mainImage": "mainimage.jpg",
                "status":1,
                "price": 7199.22
            },
            {
                "id": 2,
                "categoryId": 2,
                "name": "oppo R8",
                "subtitle": "oppo促销进行中",
                "mainImage": "mainimage.jpg",
                "status":1,
                "price": 2999.11
            }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
            1
        ]
    }
}
```

fail
```
{
    "status": 1,
    "msg": "参数错误"
}
```


------

#### 2.产品detail

**GET /products/{productId}

> request

```
productId
```

> response

success

```
{
  "status": 0,
  "data": {
    "id": 2,
    "categoryId": 2,
    "name": "oppo R8",
    "subtitle": "oppo促销进行中",
    "mainImage": "mainimage.jpg",
    "subImages": "[\"mmall/aa.jpg\",\"mmall/bb.jpg\",\"mmall/cc.jpg\",\"mmall/dd.jpg\",\"mmall/ee.jpg\"]",
    "detail": "richtext",
    "price": 2999.11,
    "stock": 71,
    "status": 1,
    "createTime": "2016-11-20 14:21:53",
    "updateTime": "2016-11-20 14:21:53"
  }
}

```

fail
```
{
    "status": 1,
    "msg": "该商品已下架或删除"
}
```


#### 1.登录


**POST /user/login**

> request

```
username,password
```
> response

fail
```
{
    "status": 1,
    "msg": "密码错误"
}
```

success
```
{
    "status": 0,
    "data": {
        "id": 12,
        "username": "aaa",
        "email": "aaa@163.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
}
```


-------

#### 2.注册
**POST /user/register**

> request

```
username,password,email
```


> response

success
```
{
    "status": 0,
    "msg": "校验成功"
}
```


fail
```
{
    "status": 1,
    "msg": "用户已存在"
}
```


#### 4.获取登录用户信息
**/user**


> request

```
无参数
```
> response

success
```
{
    "status": 0,
    "data": {
        "id": 12,
        "username": "aaa",
        "email": "aaa@163.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
}
```

fail
```
{
    "status": 1,
    "msg": "用户未登录,无法获取当前用户信息"
}

```

------


####11.退出登录
**POST /user/logout

> request

```
无
```

> response

success

```
{
    "status": 0,
    "msg": "退出成功"
}
```

fail
```
{
    "status": 1,
    "msg": "服务端异常"
}
```


------

#### 1.创建订单

** POST /orders

> request

```
shippingId
```

> response

success

```
{
    "status": 0,
    "data": {
        "orderNo": 1485158223095,
        "payment": 2999.11,
        "paymentType": 1,
        "postage": 0,
        "status": 10,
        "paymentTime": null,
        "sendTime": null,
        "endTime": null,
        "closeTime": null,
        "createTime": 1485158223095,
        "orderItemVoList": [
            {
                "orderNo": 1485158223095,
                "productId": 2,
                "productName": "oppo R8",
                "productImage": "mainimage.jpg",
                "currentUnitPrice": 2999.11,
                "quantity": 1,
                "totalPrice": 2999.11,
                "createTime": null
            }
        ],
        "shippingId": 5,
        "shippingVo": null
    }
}
```

fail
```
{
    "status": 1,
    "msg": "创建订单失败"
}
```

------

#### 2.订单List

** GET /orders

> request

```
pageSize(default=10)
pageNum(default=1)
```

订单状态:0-已取消-10-未付款，20-已付款，40-已发货，50-交易成功，60-交易关闭

> response

success

```
{
  "status": 0,
  "data": {
    "pageNum": 1,
    "pageSize": 3,
    "size": 3,
    "orderBy": null,
    "startRow": 1,
    "endRow": 3,
    "total": 16,
    "pages": 6,
    "list": [
      {
        "orderNo": 1485158676346,
        "payment": 2999.11,
        "paymentType": 1,
        "paymentTypeDesc": "在线支付",
        "postage": 0,
        "status": 10,
        "statusDesc": "未支付",
        "paymentTime": "2017-02-11 12:27:18",
        "sendTime": "2017-02-11 12:27:18",
        "endTime": "2017-02-11 12:27:18",
        "closeTime": "2017-02-11 12:27:18",
        "createTime": "2017-01-23 16:04:36",
        "orderItemVoList": [
          {
            "orderNo": 1485158676346,
            "productId": 2,
            "productName": "oppo R8",
            "productImage": "mainimage.jpg",
            "currentUnitPrice": 2999.11,
            "quantity": 1,
            "totalPrice": 2999.11,
            "createTime": "2017-01-23 16:04:36"
          }
        ],
        "imageHost": "http://img.happymmall.com/",
        "shippingId": 5,
        "receiverName": "geely",
        "shippingVo": null
      },
      {
        "orderNo": 1485158675516,
        "payment": 2999.11,
        "paymentType": 1,
        "paymentTypeDesc": "在线支付",
        "postage": 0,
        "status": 10,
        "statusDesc": "未支付",
        "paymentTime": "2017-02-11 12:27:18",
        "sendTime": "2017-02-11 12:27:18",
        "endTime": "2017-02-11 12:27:18",
        "closeTime": "2017-02-11 12:27:18",
        "createTime": "2017-01-23 16:04:35",
        "orderItemVoList": [
          {
            "orderNo": 1485158675516,
            "productId": 2,
            "productName": "oppo R8",
            "productImage": "mainimage.jpg",
            "currentUnitPrice": 2999.11,
            "quantity": 1,
            "totalPrice": 2999.11,
            "createTime": "2017-01-23 16:04:35"
          }
        ],
        "imageHost": "http://img.happymmall.com/",
        "shippingId": 5,
        "receiverName": "geely",
        "shippingVo": null
      },
      {
        "orderNo": 1485158675316,
        "payment": 2999.11,
        "paymentType": 1,
        "paymentTypeDesc": "在线支付",
        "postage": 0,
        "status": 10,
        "statusDesc": "未支付",
        "paymentTime": "2017-02-11 12:27:18",
        "sendTime": "2017-02-11 12:27:18",
        "endTime": "2017-02-11 12:27:18",
        "closeTime": "2017-02-11 12:27:18",
        "createTime": "2017-01-23 16:04:35",
        "orderItemVoList": [
          {
            "orderNo": 1485158675316,
            "productId": 2,
            "productName": "oppo R8",
            "productImage": "mainimage.jpg",
            "currentUnitPrice": 2999.11,
            "quantity": 1,
            "totalPrice": 2999.11,
            "createTime": "2017-01-23 16:04:35"
          }
        ],
        "imageHost": "http://img.happymmall.com/",
        "shippingId": 5,
        "receiverName": "geely",
        "shippingVo": null
      }
    ],
    "firstPage": 1,
    "prePage": 0,
    "nextPage": 2,
    "lastPage": 6,
    "isFirstPage": true,
    "isLastPage": false,
    "hasPreviousPage": false,
    "hasNextPage": true,
    "navigatePages": 8,
    "navigatepageNums": [
      1,
      2,
      3,
      4,
      5,
      6
    ]
  }
}
```

fail
```
{
  "status": 10,
  "msg": "用户未登录,请登录"
}


或

{
  "status": 1,
  "msg": "没有权限"
}



```

------

#### 3.订单详情

** GET /orders/{orderNo}

> request

```
orderNo
```

> response

success

```
{
  "status": 0,
  "data": {
    "orderNo": 1480515829406,
    "payment": 30000.00,
    "paymentType": 1,
    "paymentTypeDesc": "在线支付",
    "postage": 0,
    "status": 10,
    "statusDesc": "未支付",
    "paymentTime": "",
    "sendTime": "",
    "endTime": "",
    "closeTime": "",
    "createTime": "2016-11-30 22:23:49",
    "orderItemVoList": [
      {
        "orderNo": 1480515829406,
        "productId": 1,
        "productName": "iphone7",
        "productImage": "mainimage.jpg",
        "currentUnitPrice": 10000.00,
        "quantity": 1,
        "totalPrice": 10000.00,
        "createTime": "2016-11-30 22:23:49"
      },
      {
        "orderNo": 1480515829406,
        "productId": 2,
        "productName": "oppo R8",
        "productImage": "mainimage.jpg",
        "currentUnitPrice": 20000.00,
        "quantity": 1,
        "totalPrice": 20000.00,
        "createTime": "2016-11-30 22:23:49"
      }
    ],
    "imageHost": "http://img.happymmall.com/",
    "shippingId": 3,
    "receiverName": "geely",
    "shippingVo": {
      "receiverName": "geely",
      "receiverPhone": "0100",
      "receiverMobile": "186",
      "receiverProvince": "北京",
      "receiverCity": "北京",
      "receiverDistrict": "昌平区",
      "receiverAddress": "矩阵小区",
      "receiverZip": "100000"
    }
  }
}

```

fail
```
{
  "status": 1,
  "msg": "没有找到订单"
}
```

------

#### 4.取消订单

** PUT /orders/{orderNo}

> request

```
orderNo
```

> response

success

```
{
  "status": 0
}

```

fail
```
{
  "status": 1,
  "msg": "该用户没有此订单"
}

或
{
  "status": 1,
  "msg": "此订单已付款，无法被取消"
}
```

------
#### 1.购物车List列表

** GET /carts

> request

```
无参数,需要登录状态
```

> response

success

```

{
    "status": 0,
    "data": {
        "cartProductVoList": [
            {
                "id": 1,
                "userId": 13,
                "productId": 1,
                "quantity": 1,
                "productName": "iphone7",
                "productSubtitle": "双十一促销",
                "productMainImage": "mainimage.jpg",
                "productPrice": 7199.22,
                "productStatus": 1,
                "productTotalPrice": 7199.22,
                "productStock": 86,
                "productSelected": true,
            },
            {
                "id": 2,
                "userId": 13,
                "productId": 2,
                "quantity": 1,
                "productName": "oppo R8",
                "productSubtitle": "oppo促销进行中",
                "productMainImage": "mainimage.jpg",
                "productPrice": 2999.11,
                "productStatus": 1,
                "productTotalPrice": 2999.11,
                "productStock": 86,
                "productSelected": false,
            }
        ],
        "selectedAll": false,
        "cartTotalPrice": 10198.33
    }
}

```

fail
```
{
    "status": 10,
    "msg": "用户未登录,请登录"
}
```


------


#### 2.购物车添加商品

** POST /carts

> request

```
productId
selected: true
```

`注意`数量不用传，添加商品永远是以1累加

> response

success

```
{
    "status": 0,
    "data": {
        "cartProductVoList": [
            {
                "id": 1,
                "userId": 13,
                "productId": 1,
                "quantity": 12,
                "productName": "iphone7",
                "productSubtitle": "双十一促销",
                "productMainImage": "mainimage.jpg",
                "productPrice": 7199.22,
                "productStatus": 1,
                "productTotalPrice": 86390.64,
                "productStock": 86,
                "productSelected": true
            },
            {
                "id": 2,
                "userId": 13,
                "productId": 2,
                "quantity": 1,
                "productName": "oppo R8",
                "productSubtitle": "oppo促销进行中",
                "productMainImage": "mainimage.jpg",
                "productPrice": 2999.11,
                "productStatus": 1,
                "productTotalPrice": 2999.11,
                "productStock": 86,
                "productSelected": true
            }
        ],
        "selectedAll": true,
        "cartTotalPrice": 89389.75
    }
}
```

fail
```
{
    "status": 10,
    "msg": "用户未登录,请登录"
}
```


------





#### 3.更新购物车某个产品数量

** PUT /carts/{productId}

> request

```
quantity
selected: true
```

> response

响应同2

success

```
{
    "status": 0,
    "data": {
        "cartProductVoList": [
            {
                "id": 1,
                "userId": 13,
                "productId": 1,
                "quantity": 12,
                "productName": "iphone7",
                "productSubtitle": "双十一促销",
                "productMainImage": "mainimage.jpg",
                "productPrice": 7199.22,
                "productStatus": 1,
                "productTotalPrice": 86390.64,
                "productStock": 86,
                "productSelected": true
            },
            {
                "id": 2,
                "userId": 13,
                "productId": 2,
                "quantity": 1,
                "productName": "oppo R8",
                "productSubtitle": "oppo促销进行中",
                "productMainImage": "mainimage.jpg",
                "productPrice": 2999.11,
                "productStatus": 1,
                "productTotalPrice": 2999.11,
                "productStock": 86,
                "productSelected": true,
            }
        ],
        "selectedAll": true,
        "cartTotalPrice": 89389.75
    }
}
```

fail
```
{
    "status": 10,
    "msg": "用户未登录,请登录"
}
```


------



#### 4.移除购物车某个产品

** DELETE /carts/{productId}

> request

```
productId
```

> response

success

```
{
    "status": 0,
    "data": {
        "cartProductVoList": [
            {
                "id": 2,
                "userId": 13,
                "productId": 2,
                "quantity": 1,
                "productName": "oppo R8",
                "productSubtitle": "oppo促销进行中",
                "productMainImage": "mainimage.jpg",
                "productPrice": 2999.11,
                "productStatus": 1,
                "productTotalPrice": 2999.11,
                "productStock": 86,
                "productSelected": true
            }
        ],
        "selectedAll": true,
        "cartTotalPrice": 2999.11
    }
}
```

fail
```
{
    "status": 10,
    "msg": "用户未登录,请登录"
}
```


------

#### 5.全选中

** PUT /carts/selectAll

> request

```
无参数,需要登录状态
```

> response

success

同接口 获取购物车列表

------

#### 6.全不选中

** PUT /carts/unSelectAll

> request

```
无参数,需要登录状态
```

> response

success

同接口 获取购物车列表

------

#### 7.获取购物中所有商品数量总和

** GET /carts/products/sum

> request

```
无参数,需要登录状态
```

> response

```
{
    "status": 0,
    "data": 2
}
```



#### 1.添加地址

** POST /shippings


> request

```
receiverName=geely
receiverPhone=010
receiverMobile=18688888888
receiverProvince=北京
receiverCity=北京市
receiverDistrict=海淀区
receiverAddress=中关村
receiverZip=100000
```

> response

success

```
{
    "status": 0,
    "msg": "新建地址成功",
    "data": {
        "shippingId": 28
    }
}
```

fail
```
{
    "status": 1,
    "msg": "新建地址失败"
}
```


------


#### 2.删除地址

**DELETE /shippings/{shippingId}

DELETE /shippings/28

> request

```
shippingId
```

> response

success

```
{
    "status": 0,
    "msg": "删除地址成功"
}
```

fail
```
{
    "status": 1,
    "msg": "删除地址失败"
}
```


------


#### 3.登录状态更新地址

**PUT /shippings/{shippingId}

> request

```
receiverName=geely
receiverPhone=010
receiverMobile=18688888888
receiverProvince=北京
receiverCity=北京市
receiverDistrict=海淀区
receiverAddress=中关村
receiverZip=100000
```

> response

success

```
{
    "status": 0,
    "msg": "更新地址成功"
}
```

fail
```
{
    "status": 1,
    "msg": "更新地址失败"
}
```


------


#### 4.选中查看具体的地址

**GET /shippings/{shippingId}**

> request

```
shippingId
```

> response

success

```
{
    "status": 0,
    "data": {
        "id": 4,
        "userId": 13,
        "receiverName": "geely",
        "receiverPhone": "010",
        "receiverMobile": "18688888888",
        "receiverProvince": "北京",
        "receiverCity": "北京市",
        "receiverDistrict": "海淀区",
        "receiverAddress": "中关村",
        "receiverZip": "100000",
        "createTime": 1485066385000,
        "updateTime": 1485066385000
    }
}
```

fail
```
{
    "status": 1,
    "msg": "请登录之后查询"
}
```


------


####5.地址列表

**GET /shippings**

> request

```
pageNum(默认1),pageSize(默认10)
```

> response

success

```
{
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 2,
        "orderBy": null,
        "startRow": 1,
        "endRow": 2,
        "total": 2,
        "pages": 1,
        "list": [
            {
                "id": 4,
                "userId": 13,
                "receiverName": "geely",
                "receiverPhone": "010",
                "receiverMobile": "18688888888",
                "receiverProvince": "北京",
                "receiverCity": "北京市",
                "receiverDistrict": "海淀区",
                "receiverAddress": "中关村",
                "receiverZip": "100000",
                "createTime": 1485066385000,
                "updateTime": 1485066385000
            },
            {
                "id": 5,
                "userId": 13,
                "receiverName": "AAA",
                "receiverPhone": "010",
                "receiverMobile": "18688888888",
                "receiverProvince": "北京",
                "receiverCity": "北京市",
                "receiverDistrict": "海淀区",
                "receiverAddress": "中关村",
                "receiverZip": "100000",
                "createTime": 1485066392000,
                "updateTime": 1485075875000
            }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
            1
        ]
    }
}
```

fail
```
{
    "status": 1,
    "msg": "请登录之后查询"
}
```




------

#### 1.支付

**POST /pay


> request

```
orderId
orderName //扫码支付时订单名称
amount //单位元
payType //1支付宝，2微信
```

> response

success

```
{
    "status": 0,
    "data": {
        "content": "http://"
    }
}
```

微信支付：content内容是支付链接，转换为二维码即可扫码支付

支付宝支付：content是html源码，渲染到页面上后自动跳转到支付页面

fail
```
{
    "status": 1,
    "msg": "支付宝生成订单失败"
}
```

------
