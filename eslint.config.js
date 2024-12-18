import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "@typescript-eslint/no-explicit-any": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
      "react/jsx-props-no-spreading": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/function-component-definition": "off",
      "react/require-default-props": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/ban-ts-comment": "off",
      "@next/next/no-img-element": "off",
      "import/no-unresolved": ["error", { ignore: ["^@/"] }],
      "import/no-cycle": "off",
      "import/extensions": "off",
      "import/order": "warn",
      "max-len": "off",
      "class-methods-use-this": "off",
      "linebreak-style": "off",
      "eol-last": "off",
      "object-curly-newline": "off",
      camelcase: "off",
      "no-shadow": "off",
      "no-plusplus": "off",
      "no-param-reassign": [
        "error",
        { props: true, ignorePropertyModificationsFor: ["state"] },
      ],
      "import/prefer-default-export": "off",
      "arrow-body-style": "off",
      "no-prototype-builtins": "off",
    },
  }
);
