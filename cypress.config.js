const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "azqdup",
  e2e: {
    baseUrl: 'http://localhost:5173/Albarokah9-Project-Portofolio-Website/',
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    videosFolder: 'videos',
    screenshotsFolder: 'screenshots',
    screenshotOnRunFailure: true,

    retries: {
      runMode: 2,
      openMode: 0,
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Portfolio Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
