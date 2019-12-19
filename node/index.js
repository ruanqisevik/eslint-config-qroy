'use strict';

module.exports = {
    extends: [
        'best_practices',
        'commonjs',
        'possible_errors',
        'strict',
        'stylistic_issues',
        'variables',
        'es6',
    ].map((path) => {
        return require.resolve(`../extends/${path}`);
    }),
    env: {
        node: true,
    },
    parserOptions: {
        ecmaVersion: '2018',
        sourceType: 'script',
    },
    globals: {},
    rules: {
        'no-shadow': [
            1,
            {
                builtinGlobals: true,
                hoist: 'all',
                allow: ['Promise', 'callback', '_'],
            },
        ],
    },
};
