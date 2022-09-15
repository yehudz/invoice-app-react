import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://127.0.0.1:3000',
    screenshotsFolder: false,
    video: false
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    screenshotsFolder: false,
    video: false
  },
});
