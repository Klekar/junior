import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  esbuild: {
    jsxInject: 'import React from \'react\'',
  },
  plugins: [
    svgr({
      svgrOptions: {},
      include: '**/*.svg',
    }),
  ],
  resolve: {
    alias: {
      'Components': resolve(__dirname, 'src/components'),
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    https: {
      key: readFileSync('./cert/localhost.key'),
      cert: readFileSync('./cert/localhost.crt'),
    },
    open: true,
  },
});
