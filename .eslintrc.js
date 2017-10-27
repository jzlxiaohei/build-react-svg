module.exports = {
  extends: [
    "eslint:recommended"
  ],
  parser: "babel-eslint",
  env: {
    "node": true,
    "es6": true,
    "browser": true,
  },
  rules: {
    "arrow-body-style": 0,
    "newline-after-var": 0,
    "no-return-assign": 0,
    "no-underscore-dangle": 0,
    "prefer-template": 0,
  },
};
