// se ha renombrado el .babelrc. Ver https://github.com/facebook/jest/issues/6229
module.exports = {
    'env': {
        'test': {
            'presets': [
                [
                    '@babel/preset-env',
                    {
                        'modules': 'commonjs',
                        'debug'  : false,
                    },
                ],
                '@babel/preset-react',
            ],
            'plugins': [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
            ],
        },
        'development': {
            'presets': [
                [
                    '@babel/preset-env',
                    {
                        'modules': false,
                    },
                ],
                '@babel/preset-react',
            ],
            'ignore': [
                'dist',
            ],
        },
        'production': {
            'presets': [
                [
                    '@babel/preset-env',
                    {
                        'modules': false,
                    },
                ],
                '@babel/preset-react',
            ],
            'ignore': [
                'dist',
            ],
        },
    },
};
