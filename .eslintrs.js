module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'prettier'],
  // plugins: ['prettier'],
  // plugins: ['prettier', 'vue'], // vue
  plugins: ['prettier', 'react'], // react
  globals: {
    document: true,
    window: true,
  },
  settings: {
    'import/resolver': {
      'babel-modle': {},
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        bracketSpacing: true,
        printWidth: 100,
        alwaysParens: true,
      },
    ],
    strict: 0,
    'use-before-define': 0,
    'no-confusing-arrow': 0,
    'spaced-comment': 0,
    'prefer-template': 0,
    'arrow-parens': 0,
    'function-paren-newline': 0,
    'guard-for-in': 0,
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'func-names': 0,
    'space-before-function-paren': 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': [0],
    'no-console': 0,
    'no-var': 2,
    'no-unused-vars': 0,
    'no-shadow': 0,
    'object-curly-newline': 0,
    'global-require': 0,
    'new-cap': 0,
    'eol-last': 2,
    'prefer-rest-params': 0,
    'no-mixed-operators': 0,
    'no-param-reassign': 0,
    'prefer-destructuring': 0,
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],

    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
      },
    ],
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'import/imports-first': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0,
    'import/no-cycle': 0,

    // react
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/label-has-for': 0,

    // vue
    // ...
  },
};
