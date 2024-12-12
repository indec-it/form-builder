import react from 'eslint-plugin-react';
import jest from 'eslint-plugin-jest';
import globals from 'globals';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  ...compat.extends(
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:storybook/recommended',
    'prettier'
  ),
  {
    plugins: {
      react,
      jest
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...jest.environments.globals.globals,
        React: true,
        render: true,
        window: true,
        localStorage: true
      },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      'import/resolver': {
        alias: {
          extensions: ['.js'],
          map: [['@', './src']]
        }
      }
    },

    rules: {
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      'object-curly-spacing': ['error', 'never'],
      'eol-last': ['error'],
      'comma-dangle': ['error', 'never'],

      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.js', '.jsx']
        }
      ],

      'arrow-parens': 'off',
      'no-underscore-dangle': 'off',
      'object-curly-newline': 'off'
    }
  }
];
