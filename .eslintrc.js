module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',

    // TypeScript specific rules
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],

    // React specific rules
    'react/prop-types': 'off', // Since we're using TypeScript
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-key': 'error',
    'react/self-closing-comp': 'error',

    // General rules
    'no-console': 'warn',
    'no-debugger': 'warn',
    'prefer-const': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
