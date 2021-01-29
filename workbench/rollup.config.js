
import * as path from "path"

import autoExternal from 'rollup-plugin-auto-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'public_api.ts',
  output: {
    file: 'lib/qing-workbench.bundle.js',
  },
  plugins: [
    nodeResolve(),
    typescript({
      typescript: require('typescript'),
      module: "ES2015"
    }),
    commonjs(),
    json(),
    autoExternal(),
    globals(),
    builtins(),
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
    "fs-extra",
    "axios",
    "qs",
    "qing-web-api-sdk",
    path.resolve(__dirname, "./app/core/services/qing-web-api.service.ts")
  ]
}
