const { defineConfig } = require("Cypress");

module.exports = defineConfig({
 
  e2e: {
    specPattern: 'cypress/e2e/*.cy.js',
     setupNodeEvents(on, config) {
      // implement node event listeners here
     // return require("./cypress/plugins/index.js")(on, config);
    },
    },
   });