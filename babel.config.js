module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        // ['@babel/preset-env', { modules: false }],
        // "@babel/preset-env": "^7.12.17",
    ],
    plugins: [
        [
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk',
            },
        ],
    ],
};
