// vite.config.js
import glob from "tiny-glob";
import { resolve } from "path";
import { defineConfig } from "vite";

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
