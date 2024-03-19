import routes from '../fixtures/routes.json';

describe('Basic Page Structure Tests', () => {
  routes.forEach((route) => {
    it(`should load the page structure for route: ${route}`, () => {
      cy.visit(route);

      cy.get('title').should('exist');
      cy.get('body').should('exist');
    });
  });
});