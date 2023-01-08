module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:storybook/recommended'
  ],
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js'],
        map: [['@', './src']]
      }
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'jest'],
  globals: {
    React: true,
    render: true,
    window: true,
    localStorage: true
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-curly-spacing': ['error', 'never'],
    'eol-last': ['error'],
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', 125],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx']
    }],
    'arrow-parens': 'off',
    'no-underscore-dangle': 'off'
  }
};
