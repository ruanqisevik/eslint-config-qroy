'use strict';

module.exports = {
    extends: ['es6'].map((path) => {
        return require.resolve(`../extends/${path}`);
    }),
};
