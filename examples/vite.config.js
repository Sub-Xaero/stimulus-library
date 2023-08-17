// vite.config.js
const { resolve } = require('path');
const { defineConfig } = require('vite');
const glob = require('tiny-glob');

async function processGlob(globStr, opts = { filesOnly: true }) {
  const entryPoints = await glob(globStr, opts);
  let obj = {};

  entryPoints.forEach((entry) => {
    let name = entry.slice(entry.lastIndexOf("/") + 1).replace(".html", "");
    obj[name] = resolve(__dirname, entry);
  });
  return obj;
}

export default defineConfig(async () => {
  return {
    server: {
      strictPort: true,
      port: 3030,
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          // Fixtures
          ...await processGlob('./fixtures/*.html'),
          // Controllers
          ...await processGlob('./controllers/*.html'),
        },
      },
    },
  };
});
