import Axios from 'axios';
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
};

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
    updateProductQty ({ productId, quantity, selected = true } = {}) {
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
