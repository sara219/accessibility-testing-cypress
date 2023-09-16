const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'sunkmi',
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1440,
    viewportHeight: 900,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})