const x = '{"teste": "oi"}'

console.log(x)

const exports = {
    plugins: ['react', 'prettier'],
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        node: true,
    },
    rules: {
        'prettier/prettier': 'error',
    },
    settings: {
        react: {
            version: '16.12.0',
        },
    },
}

console.log(exports)
