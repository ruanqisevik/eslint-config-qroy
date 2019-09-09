module.exports = {
	env: {
		node: true
	},
	extends: ['eslint:recommended'].concat(
		['formal', 'es6'].map(filename => require.resolve('../extends/' + filename))
	),
	root: true,
	parserOptions: {
		ecmaVersion: '2018',
		sourceType: 'script'
	},
	globals: {}
}
