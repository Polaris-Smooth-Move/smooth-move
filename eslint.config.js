import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

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
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "prettier/prettier": [
        "error",
        {
          useTabs: false,
          endOfLine: "auto",
        },
      ],
    },
  },
  eslintConfigPrettier,
];
