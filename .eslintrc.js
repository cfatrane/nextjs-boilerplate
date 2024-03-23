module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
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
            pattern: "next",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "vite",
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
            pattern: "@/routes/**",
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
            "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
    // P
    // P
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "function" },

      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "prettier/prettier": ["error"],

    // React
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

    // "react-refresh/only-export-components": [
    //   "warn",
    //   {
    //     "allowConstantExport": true
    //   }
    // ]
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
