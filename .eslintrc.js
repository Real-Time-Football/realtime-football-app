module.exports = {
    plugins: ['react'],
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        }
    },
    env: {
        node: true,
    },
    settings: {
        react: {
            version: '16.12.0'
        },
    }
};