import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { useColorMode } from "@docusaurus/theme-common";

/**
 * StimulusPlayground — an editable in-page playground for Stimulus controllers.
 *
 * Uses a static Sandpack template with CDN imports (esm.sh) so no bundling
 * is required and any npm package loads reliably.
 *
 * Props:
 *   controller   {string}  Named export from stimulus-library. e.g. "AutosizeController"
 *   identifier   {string}  data-controller identifier. Defaults to kebab-cased name.
 *   html         {string}  HTML body content. Should include data-controller attributes.
 *   js           {string}  Optional extra JS appended after registration.
 *   editorHeight {number}  Editor pane height in px. Default 300.
 */
export default function StimulusPlayground({
  controller,
  identifier,
  html = "",
  js = "",
  editorHeight = 300,
}) {
  const { colorMode } = useColorMode();

  const derivedIdentifier =
    identifier ??
    controller
      .replace(/Controller$/, "")
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .toLowerCase();

  // All imports come from esm.sh CDN — no bundler needed, always works.
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body { font-family: system-ui, sans-serif; padding: 1.5rem; line-height: 1.6; }
  </style>
</head>
<body>
${html}
<script type="module">
  import { Application } from "https://esm.sh/@hotwired/stimulus";
  import { ${controller} } from "https://esm.sh/stimulus-library";

  const application = Application.start();
  application.register("${derivedIdentifier}", ${controller});
  ${js}
</script>
</body>
</html>`;

  return (
    <Sandpack
      template="static"
      theme={colorMode === "dark" ? "dark" : "light"}
      files={{
        "/index.html": { code: indexHtml, active: true },
      }}
      options={{
        showNavigator: false,
        showTabs: false,
        showLineNumbers: true,
        editorHeight,
        autorun: true,
        autoReload: true,
        resizablePanels: true,
      }}
      style={{ marginBottom: "1.5rem" }}
    />
  );
}
