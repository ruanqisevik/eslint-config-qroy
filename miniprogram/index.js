module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ['eslint:recommended'].concat(
		['formal', 'es6'].map((filename) => require.resolve('../extends/' + filename))
	),
	globals: {
		App: false,
		wx: false,
		getApp: false,
		Page: false,
		Component: false
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	}
}
