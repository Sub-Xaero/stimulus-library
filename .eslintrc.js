module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'ignorePatterns': [
    'packages/stimulus-library/cypress.config.ts',
    'packages/stimulus-library/cypress/',
    'packages/stimulus-library/dist/',
    'packages/controllers/dist/',
    'packages/utilities/dist/',
    'packages/mixins/dist/',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'double',
    ],
    'semi': [
      'error',
      'always',
    ],
    'max-len': [
      'error',
      {
        code: 250,
        ignoreComments: true,
        ignoreTrailingComments: true,
      },
    ],
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'argsIgnorePattern': '^_',
        'destructuredArrayIgnorePattern': "^_",
      }
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
