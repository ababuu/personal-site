const os = require("os");

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ["airbnb", "prettier"],
  ignorePatterns: ["node_modules/", "build/"],
  parser: "@babel/eslint-parser",
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": "off",
    "linebreak-style": "off",
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/destructuring-assignment": "off",
    "react/jsx-no-useless-fragment": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
  },
};
