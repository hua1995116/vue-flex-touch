import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/vue-flex-touch.js',
    format: 'iife',
    name: 'vueFlexTouch',
  }, {
    file: 'dist/vue-flex-touch.common.js',
    format: 'cjs',
  }, {
    file: 'dist/vue-flex-touch.esm.js',
    format: 'es',
  }],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [['@babel/env', { modules: false }]],
    })
   ]
};