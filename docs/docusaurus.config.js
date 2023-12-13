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
  organizationName: "Sub-Xaero", // Usually your GitHub org/user name.
  projectName: "stimulus-library", // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ["bash", "json"],
    },
    navbar: {
      title: "Stimulus Library",
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
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
          title: "Links",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Sub-Xaero/stimulus-library",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Sc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
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
