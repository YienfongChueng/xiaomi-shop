import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home-pages/home.vue';
import Index from '@/views/home-pages/index.vue';
import Detail from '@/views/home-pages/detail.vue';
import Product from '@/views/home-pages/product.vue';
import Cart from '@/views/cart-pages/cart.vue';
import Login from '@/views/login-pages/login.vue';
import Register from '@/views/register-pages/register.vue';
import Order from '@/views/order-pages/order.vue';
import OrderList from '@/views/order-pages/orderList.vue';
import OrderConfirm from '@/views/order-pages/orderConfirm.vue';
import OrderPay from '@/views/order-pages/orderPay.vue';
import aliPay from '@/views/order-pages/aliPay.vue';

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: 'index',
        children: [
            {
                path: 'index',
                name: 'Index',
                component: Index,
            },
            {
                path: 'detail/:id',
                name: 'Detail',
                component: Detail,
            },
            {
                path: 'product/:id',
                name: 'Product',
                component: Product,
            },
        ],
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/order',
        name: 'Order',
        component: Order,
        redirect: 'list',
        children: [
            {
                path: 'list',
                name: 'OrderList',
                component: OrderList,
            },
            {
                path: 'confirm',
                name: 'OrderConfirm',
                component: OrderConfirm,
            },
            {
                path: 'pay',
                name: 'OrderPay',
                component: OrderPay,
            },
            {
                path: 'aliPay',
                name: 'aliPay',
                component: aliPay,
            },
        ],
    },

];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

export default router;
