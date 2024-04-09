const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

      
// <reference types="cypress" />


module.exports = defineConfig({
  env: {
    //snapshotOnly: true,
  },
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("task", {
        sqlQuery: ({query, db}) => {
          return queryData(query, db); //config.env.db
        }
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
              return config;

    },  
    responseTimeout: 60000,
    requestTimeout: 20000,
    specPattern: "cypress/e2e/features/*.feature",
    
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
  }

});
