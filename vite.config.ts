import path from 'node:path';

import {
  defineConfig,
} from 'vite';

import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint(),
    dts({
      rollupTypes: true,
    }),
  ],
  build: {
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      name: 'simple-browser-logger',
      entry: path.resolve(__dirname, './src/index.ts'),
      fileName: (format) => `index.${format}.js`,
    },
  },
});
