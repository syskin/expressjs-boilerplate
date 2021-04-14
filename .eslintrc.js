module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [`prettier`],
  plugins: [`prettier`],
  globals: {
    Atomics: `readonly`,
    SharedArrayBuffer: `readonly`,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: `module`,
  },
  rules: {
    quotes: [`error`, `backtick`],
    "prettier/prettier": `error`,
    "class-methods-use-this": `off`,
    "no-param-reassign": `off`,
    "no-unused-vars": [`error`, { argsIgnorePattern: `next` }],
    semi: [`error`, `never`],
  },
}
