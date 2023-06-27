module.exports = {
  extends: [
    'prettier',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['{app,pages,components}/**/*.{ts,tsx}'],
      extends: [
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: { project: ['./tsconfig.json'] },
      rules: {
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/no-misused-promises': [
          'error',
          { checksVoidReturn: false },
        ],
      },
    },
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    'react/self-closing-comp': 'error',
    'react/no-array-index-key': 'error',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
