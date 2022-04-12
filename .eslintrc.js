module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": "off", // 不能有声明但未使用的变量
    "react/prop-types": "off", // props必须使用
    "no-undef": "warn", // 不能未声明就使用变量
    eqeqeq: "warn", // 不能用双等号
    "no-alert": "warn", // 不能用`alert()`函数
    "no-redeclare": "warn", // 不能重新声明变量
    "no-var": "warn", // 不能用var声明变量
    "no-const-assign": "error", // const声明的变量不能更改
  },
};
