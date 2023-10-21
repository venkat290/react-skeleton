module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:import/recommended",
    'airbnb-typescript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/semi": 1,
    "import/no-extraneous-dependencies": [
      "error", {
         "devDependencies": false, 
         "optionalDependencies": false, 
         "peerDependencies": false, 
         "packageDir": "./"
      }
  ],
    "import/extensions":1,
    "react/jsx-filename-extension": 0,
  },
}
