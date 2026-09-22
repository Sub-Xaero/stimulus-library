// Bundles small entry points against the built dist/ of each package and fails if
// unused code survives. Run `npm run build` first.
import { existsSync } from "node:fs";
import { rolldown } from "rolldown";

const PACKAGES = [
  "@stimulus-library/utilities",
  "@stimulus-library/mixins",
  "@stimulus-library/controllers",
  "stimulus-library",
];

const cases = [
  // Importing a package for side effects only should produce an empty bundle.
  ...PACKAGES.map((pkg) => ({
    name: `bare import of ${pkg}`,
    code: `import "${pkg}";`,
    maxBytes: 0,
  })),
  // A single named import from the top-level barrel should not drag in the rest of the library.
  {
    name: "useEventListener from stimulus-library",
    code: `import { useEventListener } from "stimulus-library"; window.x = useEventListener;`,
    maxBytes: 2_000,
  },
  {
    name: "NestedFormController from stimulus-library",
    code: `import { NestedFormController } from "stimulus-library"; window.x = NestedFormController;`,
    maxBytes: 10_000,
  },
];

for (const dir of ["utilities", "mixins", "controllers", "stimulus-library"]) {
  if (!existsSync(new URL(`../packages/${dir}/dist/index.js`, import.meta.url))) {
    console.error(`packages/${dir}/dist is missing, run \`npm run build\` first`);
    process.exit(1);
  }
}

let failed = false;
for (const { name, code, maxBytes } of cases) {
  const bundle = await rolldown({
    input: "entry",
    external: ["@hotwired/stimulus"],
    logLevel: "silent",
    plugins: [{
      name: "entry",
      resolveId: (id) => (id === "entry" ? "\0entry" : null),
      load: (id) => (id === "\0entry" ? code : null),
    }],
  });
  const { output } = await bundle.generate({ format: "esm", minify: true });
  const bytes = output[0].code.trim().length;
  const ok = bytes <= maxBytes;
  failed ||= !ok;
  console.log(`${ok ? "ok  " : "FAIL"} ${name}: ${bytes} bytes (max ${maxBytes})`);
}

process.exit(failed ? 1 : 0);
