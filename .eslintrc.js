module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // Disable ESLint rules that would conflict with Prettier
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "no-console": "warn",
    "prettier/prettier": "warn",
    "prefer-const": "warn",
  },
};
