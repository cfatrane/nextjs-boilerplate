module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "plugin:tailwindcss/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:storybook/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-refresh", "prettier"],
  rules: {
    // C
    camelcase: "warn",
    "capitalized-comments": "off",
    // D
    "default-param-last": ["error"],
    // E
    eqeqeq: "error",
    // I
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "object",
          "type",
          "index",
          "unknown",
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "next**",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "next/**",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@/api/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/assets/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/constants/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/helpers/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/hooks/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/i18n/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/redux/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/styles/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/types/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/utils/**",
            group: "internal",
            position: "after",
          },
        ],
        distinctGroup: true,
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order:
            "asc" /* Sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* Ignore case. Options: [true, false] */,
        },
      },
    ],
    // M
    "max-params": ["warn", 3],
    // N
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-empty-function": "warn",
    "no-param-reassign": "error",
    // P
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "*", next: "block-like" },

      { blankLine: "always", prev: ["import"], next: "*" },
      {
        blankLine: "any",
        prev: ["import"],
        next: ["import"],
      },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-object-spread": "warn",
    "prettier/prettier": ["error"],
    // R
    "require-await": "error",
    // S
    "sort-keys": ["off", "asc", { natural: true, minKeys: 5 }],
    "sort-vars": "error",
    "sort-imports": ["off"],

    // React
    // eslint-disable-next-line sort-keys
    "react/jsx-newline": ["warn"],
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/jsx-sort-props": ["warn", { ignoreCase: true }],
    "react/prop-types": ["error", { ignore: ["className"] }],
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
        allowExportNames: [
          "meta",
          "metadata",
          "links",
          "headers",
          "loader",
          "action",
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      /* You will also need to install and configure the TypeScript resolver
      See also https://github.com/import-js/eslint-import-resolver-typescript#configuration */
      typescript: true,
      node: true,
    },
  },
};
