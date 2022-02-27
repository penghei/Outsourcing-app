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
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "no-undef": "warn",
    eqeqeq: "warn",
    "no-alert": "warn",
    "no-redeclare": "warn",
    "no-var": "warn",
    "no-const-assign": "warn",
  },
};
