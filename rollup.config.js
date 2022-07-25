import {babel } from '@rollup/plugin-babel'
const config ={
    imput: 'src/index.js',
    output:{
        file: 'dist/index.esm.js',
        format: 'esm'
    },
    external:[/@babel\/runtime/, 'react'],
    plugins:[babel({babelHelpers: 'runtime', plugins:['@babel/plugin-transform-runtime']})]

};

export default config;