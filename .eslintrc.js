module.exports = {
  env: {
    browser: true,
    es2022: true,
    jquery: true,
  },
  extends: ['airbnb-base'],
  plugins: ['prettier', 'import'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/named': 'off',
    'class-methods-use-this': 'off',
    'import/no-cycle': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
};
