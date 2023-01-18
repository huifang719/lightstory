module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    strict: ['error', 'global'],
    'func-style': ['error', 'expression'],
    'max-len': 'off',
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'no-new-func': 'error',
    'no-param-reassign': 'error',
    'import/no-relative-packages': 'off',
    'object-curly-newline': 'off',
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};
