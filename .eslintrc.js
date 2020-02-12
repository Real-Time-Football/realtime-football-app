module.exports = {
    plugins: ['react', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
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
