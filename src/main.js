import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueLazyload from 'vue-lazyload';
import VueCookie from 'vue-cookie';
import { Message } from 'element-ui';
import * as Filters from './filters';
import * as Api from './api';
import * as Utils from './utils';

// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

// 接口错误拦截
axios.interceptors.response.use(function (response) {
    const res = response.data;
    const path = location.hash;
    if (res.status === 0) {
        return res.data;
    } else if (res.status === 10) {
        if (path !== '#/index') {
            window.location.href = '/#/login';
        }
        return Promise.reject(res);
    } else if (res.status === 1) {
        Message.warning(res.msg);
        return Promise.reject(res);
    }
}, function (error) {
    Message.error(error);
    return Promise.reject(error);
});

Vue.prototype.$api = Api;
window.Api = Api;
Vue.prototype.$utils = Utils;
window.Utils = Utils;

Vue.prototype.$message = Message;

Object.keys(Filters).forEach(key => {
    Vue.filter(key, Filters[key]);
});

Vue.use(VueLazyload, {
    loading: '/imgs/loading-svg/loading-bars.svg',
});

Vue.use(VueCookie);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
