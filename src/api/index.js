import Axios from 'axios';
export const Area = {
    getAreas () {
        return Axios.get('/mock/area.json');
    },
};
// 产品
export const Product = {
    getProductList ({ categoryId, keyword, pageNum = 1, pageSize = 10, orderBy = '' } = {}) {
        return Axios.get('/products', {
            params: {
                categoryId,
                keyword,
                pageNum,
                pageSize,
                orderBy,
            },
        });
    },
    getProductDetails (id) {
        return Axios.get(`/products/${id}`);
    },
};
// 用户
export const User = {
    login ({ username, password } = {}) {
        return Axios.post('/user/login', {
            username,
            password,
        });
    },
    register (userInfos = {}) {
        return Axios.post('/user/register', userInfos);
    },
    getUserInfo () {
        return Axios.get('/user');
    },
    logout () {
        return Axios.post('/user/logout');
    },
};
// 购物车
export const Cart = {
    getCartList () {
        return Axios.get('/carts');
    },
    addCart ({ productId, selected = true } = {}) {
        return Axios.post('/carts', {
            productId,
            selected,
        });
    },
    updateProduct ({ productId, quantity, selected = true } = {}) {
        return Axios.put('/carts/' + productId, {
            quantity,
            selected,
        });
    },
    removeProduct (productId) {
        return Axios.delete('/carts/' + productId);
    },
    selectAll () {
        return Axios.put('/carts/selectAll');
    },
    unSelectAll () {
        return Axios.put('/carts/unSelectAll');
    },
    getCartSum () {
        return Axios.get('/carts/products/sum');
    },
};
// 地址
export const Address = {
    addAddress (params = {}) {
        return Axios.post('/shippings', params);
    },
    deleteAddressById (shippingId) {
        return Axios.delete(`/shippings/${shippingId}`);
    },
    updateAddress (shippingId, params = {}) {
        return Axios.put(`/shippings/${shippingId}`, params);
    },
    getAddressById (shippingId) {
        return Axios.get(`/shippings/${shippingId}`);
    },
    getAddressList (pageNum = 1, pageSize = 10) {
        return Axios.get('/shippings', {
            params: {
                pageNum,
                pageSize,
            },
        });
    },
};
// 订单
export const Order = {
    createOrder (shippingId) {
        return Axios.post('/orders', shippingId);
    },
    getOrderList (pageSize = 10, pageNum = 1) {
        return Axios.get('/orders', {
            pageSize,
            pageNum,
        });
    },
    getOrderDetail (orderNo) {
        return Axios.get(`/orders/${orderNo}`);
    },
    cancelOrder (orderNo) {
        return Axios.put(`/orders/${orderNo}`);
    },
};
// 支付
export const Pay = {
    pay (params) {
        return Axios.post('/pay', {
            orderId: params.orderId,
            orderName: params.orderName, // 扫码支付时订单名称
            amount: params.amount, // 单位元
            payType: params.payType, // 1支付宝，2微信
        });
    },
};
