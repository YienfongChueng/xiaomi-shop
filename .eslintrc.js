module.exports = {
  root: true,
  env: {
      node: true,
  },
  globals: {
      _: true,
      Axios: true,
      Utils: true,
      Filters: true,
      VueLazyload: true,
  },
  extends: [
      'plugin:vue/essential',
      '@vue/standard',
  ],
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      indent: ['error', 4],
      'no-unused-vars': 'off',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'vue/no-unused-components': 'off',
      'comma-dangle': ['error', 'always-multiline'],
  },
  parserOptions: {
      parser: 'babel-eslint',
  },
};
