const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity:false 
    //A opção chromeWebSecurity: false no Cypress é usada para desativar a segurança do navegador durante os testes. I
  },
});