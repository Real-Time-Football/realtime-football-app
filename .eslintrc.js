module.exports = {
    plugins: ['react', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parser: 'babel-eslint',
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
