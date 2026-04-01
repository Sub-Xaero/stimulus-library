import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').DocusaurusConfig} */

export default {
  title: "Stimulus Library",
  tagline: "An extensive library of stimulus controllers for all use cases",
  url: "https://sub-xaero.github.io",
  baseUrl: "/stimulus-library/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Sub-Xaero",
  projectName: "stimulus-library",
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "ruby"],
    },
    navbar: {
      title: "Stimulus Library",
      logo: {
        alt: "Stimulus Library Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://www.npmjs.com/package/stimulus-library",
          label: "NPM",
          position: "right",
        },
        {
          href: "https://github.com/Sub-Xaero/stimulus-library",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            { label: "Getting Started", to: "docs/" },
            { label: "Tree-shaking", to: "docs/treeshaking" },
            { label: "Debugging", to: "docs/debugging" },
          ],
        },
        {
          title: "Package",
          items: [
            { label: "NPM", href: "https://www.npmjs.com/package/stimulus-library" },
            { label: "GitHub", href: "https://github.com/Sub-Xaero/stimulus-library" },
            { label: "Changelog", href: "https://github.com/Sub-Xaero/stimulus-library/releases" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stimulus Library. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: [
            "./src/css/custom.css",
          ],
        },
      },
    ],
  ],
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local'),
  ],
};
