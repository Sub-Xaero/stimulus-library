import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  experimentalStudio: true,
  blockHosts: [
    "*.google-analytics.com",
    "googleads.g.doubleclick.net",
    "adservice.google.com",
    "adservice.google.co.uk",
    "adservice.googleadservices.com",
    "adservice.google.ad",
    "doubleclick.net",
    "www.googleadservices.com",
    "www.googletagservices.com",
    "googletagservices.com",
    "www.google-analytics.com",
  ],
  reporter: "dot",
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://localhost:3000/",
  },
});
