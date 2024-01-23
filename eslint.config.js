import stylisticTs from "@stylistic/eslint-plugin-ts";
import parserTs from "@typescript-eslint/parser";

export default [
  {
    plugins: {
      "@stylistic": stylisticTs,
    },
    languageOptions: {
      parser: parserTs,
    },
    rules: {
      "@/indent": ["error", 2],
      "@/linebreak-style": ["error", "unix"],
      "@/quotes": ["error", "double"],
      "@/semi": ["error", "always"],
      "@/max-len": [
        "error",
        {
          code: 250,
          ignoreComments: true,
          ignoreTrailingComments: true,
        },
      ],
      "@/no-this-alias": "off",
      "@/no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "destructuredArrayIgnorePattern": "^_",
        },
      ],
      "@/ban-ts-comment": "off",
      "@/no-explicit-any": "off",
    },
  },
];
