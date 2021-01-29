import angular from 'rollup-plugin-angular';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import autoExternal from 'rollup-plugin-auto-external';

export default {
  input: 'index.ts',
  output: {
    file: 'dist/plugins-market-plugin.bundle.js',
    format: 'system'
  },
  plugins: [
    angular(),
    resolve({
      // pass custom options to the resolve plugin
      customResolveOptions: {
        moduleDirectories: ['node_modules']
      }
    }),
    typescript({
      typescript: require('typescript')
    }),
    autoExternal()
  ],
  external: [
    "@angular/animations",
    "@angular/cdk",
    '@angular/common',
    "@angular/compiler",
    '@angular/core',
    '@angular/elements',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    "@ngxs/store",
  ]
}