module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'no-use-before-define': [0],
    'import/extensions': [1],
    'import/no-unresolved': [1],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'react/react-in-jsx-scope': [0],
    'react/jsx-props-no-spreading': [0],
    'no-unused-vars': [0],
    'no-shadow': [0],
    '@typescript-eslint/no-unused-vars': [1],
    '@typescript-eslint/no-shadow': [1],
    'max-len': ['warn'],
  },
  settings: {
    'import/ignore': ['.css', 'node_modules/', '.scss'],
  },
};
