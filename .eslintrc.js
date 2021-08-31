module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [0],
    'react/function-component-definition': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/interactive-supports-focus': [0]
  }
};
