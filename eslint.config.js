import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {ignores: ["dist/", "node_modules/", ".output/", ".wxt/", ".public/"]},
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        defineContentScript: "readonly",
        defineBackground: "readonly",
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {jsx: true},
        sourceType: "module",
      },
    },
    settings: {react: {version: "19"}},
    plugins: {
      react,
      "react-hooks": reactHooks,
      "prettier": prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "prettier/prettier": "error",
    },
  },
  eslintConfigPrettier,
];
