module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        'indent': [2, 4],
        'semi': [2, 'always'],
        'brace-style': [2, '1tbs'],
        'no-unused-vars': [1],
        'no-console': [0]
    }
};