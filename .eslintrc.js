module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
        jsx: true
    },
  },
  plugins: [
    "import",
    "react",
    "jsx-a11y"
  ],
  rules: {
    "arrow-body-style": 0,
    "newline-after-var": 0,
    "no-return-assign": 0,
    "no-underscore-dangle": 0,
    "prefer-template": 0,
    "react/display-name", 0
  },
};
