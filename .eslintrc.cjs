module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    "no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }],
    "space-before-blocks": "off",
    "quotes": "off",
    "semi": "off",
    "no-extra-semi": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
