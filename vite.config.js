const path = require('path');
const {defineConfig} = require('vite');

module.exports = defineConfig({
  build: {
    lib: {
      formats: ['es', 'umd', 'cjs'],
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Stimulus-Library',
      fileName: (format) => `stimulus-library.${format}.js`,
    },
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'stimulus',
        'smoothscroll-polyfill',
        'date-fns',
        'lodash-es',
      ],
      output: {
        globals: {
          'stimulus': 'stimulus',
          'date-fns': 'dateFns',
          'lodash-es': 'lodashEs',
        },
      },
    },
  },
});