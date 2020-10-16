// 跨域方式使用jsonp或cors跨域方式，则需要配置多套环境
// 使用：
// A.在package.json的script 添加 --mode=dev
// B.main.js 中
//  1. import env from './env'
//  2. axios.defaults.baseURL = env.baseUrl
// 如果使用代理的跨域方式，则不需要配置以下环境
let baseUrl;
switch (process.env.NODE_ENV) {
case 'dev':
    baseUrl = 'http://dev-mall-pre.springboot.cn/api';
    break;
case 'prod':
    baseUrl = 'http://prod-mall-pre.springboot.cn/api';
    break;
default:
    baseUrl = 'http://mall-pre.springboot.cn/api';
    break;
}

export default {
    baseUrl,
};
