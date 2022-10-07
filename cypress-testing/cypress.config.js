const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    base_url: 'https://localhost:44320/Auth/Login?ReturnUrl=%2FBiblioteca',
    biblioteca: 'https://localhost:44320/',
    comentario: 'https://localhost:44320/Libro/Details?id=2',
    miBiblioteca: 'https://localhost:44320/Biblioteca'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
