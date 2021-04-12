module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // "prettier/@typescript-eslint",
    // "plugin:prettier/recommended",
    // "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react-hooks"],
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "react-hooks/exhaustive-deps": ["error"],
    quotes: ["error", "double"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
