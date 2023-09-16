/// <reference types="cypress" />

describe("Sign Up Accessibility test suite", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    // inject axe accessibility testing library into the web page.
    cy.injectAxe();
  });

  it("Check entire page for a11y issues", () => {
    // check the accessibility of the entire page using axe library. it runs series of accessibility checks on the page and report any violations or issues.
    cy.checkA11y();
  });
});
