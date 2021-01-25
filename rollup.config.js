import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'public_api.ts',
  output: {
    file: 'lib/qing.bundle.js',
  },
  plugins: [
    resolve({
      // pass custom options to the resolve plugin
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    typescript({
      typescript: require('typescript'),
      module: "ES2015"
    }),
    commonjs(),
    json()
  ],
  external: [
    'plugins-core',
    '@angular/core',
    '@angular/common'
  ]
}
