import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '@/views/home-pages/home.vue';
// import Index from '@/views/home-pages/index.vue';
// import Detail from '@/views/home-pages/detail.vue';
// import Product from '@/views/home-pages/product.vue';
// import Cart from '@/views/cart-pages/cart.vue';
// import Login from '@/views/login-pages/login.vue';
// import Register from '@/views/register-pages/register.vue';
// import Order from '@/views/order-pages/order.vue';
// import OrderList from '@/views/order-pages/orderList.vue';
// import OrderConfirm from '@/views/order-pages/orderConfirm.vue';
// import OrderPay from '@/views/order-pages/orderPay.vue';
// import aliPay from '@/views/order-pages/aliPay.vue';

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home-pages/home.vue'),
        redirect: 'index',
        children: [
            {
                path: 'index',
                name: 'Index',
                component: () => import('@/views/home-pages/index.vue'),
            },
            {
                path: 'detail/:id',
                name: 'Detail',
                component: () => import('@/views/home-pages/detail.vue'),
            },
            {
                path: 'product/:id',
                name: 'Product',
                component: () => import('@/views/home-pages/product.vue'),
            },
        ],
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('@/views/cart-pages/cart.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login-pages/login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/register-pages/register.vue'),
    },
    {
        path: '/order',
        name: 'Order',
        component: () => import('@/views/order-pages/order.vue'),
        redirect: 'list',
        children: [
            {
                path: 'list',
                name: 'OrderList',
                component: () => import('@/views/order-pages/orderList.vue'),
            },
            {
                path: 'confirm',
                name: 'OrderConfirm',
                component: () => import('@/views/order-pages/orderConfirm.vue'),
            },
            {
                path: 'pay',
                name: 'OrderPay',
                component: () => import('@/views/order-pages/orderPay.vue'),
            },
            {
                path: 'aliPay',
                name: 'aliPay',
                component: () => import('@/views/order-pages/aliPay.vue'),
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
