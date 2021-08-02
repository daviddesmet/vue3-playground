/// <reference types="cypress" />
// https://docs.cypress.io/api/introduction/api.html

describe("Homepage", () => {
  it("should display header text", () => {
    cy.visit("/");

    cy.contains("h1", "Hello Vue 3 + TypeScript + Vite + Tailwind CSS");
  });
});
