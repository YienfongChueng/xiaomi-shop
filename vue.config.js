const path = require('path');
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "~@/assets/scss/import.scss";',
            },
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@api': path.resolve(__dirname, './src/api'),
            },
        },
    },
    productionSourceMap: false,
    chainWebpack: config => {
        // 移除prefetch插件
        config.plugins.delete('prefetch');
    },
};
