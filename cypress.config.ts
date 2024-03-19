import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: 'http://localhost:5173',
    specPattern: 'src/__tests__/cypress/e2e/**/*.cy.ts',
  },
});