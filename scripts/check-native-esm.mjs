// Loads the built dist/ of each package with Node's native ESM loader, which resolves relative
// imports the same way browsers do for importmap users: extensions are required and directory
// imports are not supported. Run `npm run build` first.
import { existsSync } from "node:fs";

const PACKAGES = {
  "@stimulus-library/utilities": "utilities",
  "@stimulus-library/mixins": "mixins",
  "@stimulus-library/controllers": "controllers",
  "stimulus-library": "stimulus-library",
};

let failed = false;
for (const [pkg, dir] of Object.entries(PACKAGES)) {
  if (!existsSync(new URL(`../packages/${dir}/dist/index.js`, import.meta.url))) {
    console.error(`packages/${dir}/dist is missing, run \`npm run build\` first`);
    process.exit(1);
  }
  try {
    const exports = Object.keys(await import(pkg));
    console.log(`ok   ${pkg}: ${exports.length} exports`);
  } catch (error) {
    failed = true;
    console.log(`FAIL ${pkg}: ${error.message}`);
  }
}

process.exit(failed ? 1 : 0);
