module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json',
  ],
  rules: {
    'vue/multi-word-component-names': 0,
  },
};
