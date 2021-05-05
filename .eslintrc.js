module.exports = {
  root: true,
  env: {
    // "browser": true,
    // "es6": true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'space-before-function-paren': 0
  }
}
