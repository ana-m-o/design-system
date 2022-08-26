import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import serve from 'rollup-plugin-serve';
import json from '@rollup/plugin-json';
import html from 'rollup-plugin-html-input';
import globals from 'rollup-plugin-node-globals';
import urlPostcss from 'postcss-url';

const isProd = process.env.BUILD === 'production',
    input = isProd
        ? 'src/index.js'
        : 'examples/index.html';

export default [
    {
        input,
        plugins: [
            nodeResolve({
                browser   : true,
                extensions: [ '.js', '.jsx', '.css', '.less', '.scss' ],
            }),
            postcss({
                // minimize: true,
                use: {
                    sass  : null,
                    stylus: null,
                    less  : { javascriptEnabled: true },
                },
                extract: 'index.css',
                plugins: [
                    urlPostcss({
                        url: 'inline', // enable inline assets using base64 encoding
                    }),
                ],
            }),
            !isProd && html(),
            url({
                // by default, rollup-plugin-url will not handle font files
                include: [ '**/*.woff', '**/*.woff2' ],
                // setting infinite limit will ensure that the files
                // are always bundled with the code, not copied to /dist
                limit  : Infinity,
            }),
            json(),
            babel({
                exclude     : ['node_modules/**'],
                babelHelpers: 'bundled',
                compact     : true,
            }),
            commonjs({
                include: ['node_modules/**'],
            }),
            !isProd && serve({
                open       : true,
                openPage   : '/',
                host       : 'localhost',
                port       : 3003,
                contentBase: ['dist'],
            }),
            globals(),
        ].filter(el => !!el),
        output: [
            {
                file          : 'dist/index.js',
                assetFileNames: '[name]-[hash][extname]',
                format        : 'esm',
                exports       : 'named',
                sourcemap     : !isProd,
            },
            {
                name          : '@ether/uiverse-components',
                file          : 'dist/index.umd.js',
                assetFileNames: '[name]-[hash][extname]',
                format        : 'umd',
                exports       : 'named',
                sourcemap     : !isProd,
                globals       : {
                    'react': 'React',
                    'antd' : 'antd',
                },
            },
        ],
        external: [
            'react',
            'antd',
        ],
    },
];


