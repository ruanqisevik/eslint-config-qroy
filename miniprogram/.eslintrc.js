module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': ['eslint:recommended'].concat(
    ['formal', 'es6'].map((filename) => require.resolve('../extends/' + filename)),
  ),
  'parserOptions': {
    'ecmaVersion': 2015,
    'sourceType': 'module',
  },
  'rules': {
    'indent': ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
  },
};
