import { client } from "./graphql";

Cypress.Commands.add("getBySel", (selector, ...args) => cy.get(`[data-cy=${selector}]`, ...args));
Cypress.Commands.add("mutate", (...args) => {
  return client.mutate(...args);
});

Cypress.Commands.add("query", (...args) => {
  return client.query(...args);
});

Cypress.Commands.add("choose", (selector: string, options: string[] | string) => {
  cy.get(`[data-cy=${selector}]`)
    .click()
    .find("input")
    .invoke("attr", "id")
    .then((id) => {
      if (Array.isArray(options)) {
        options.forEach((option) => {
          cy.get(`#${id}_list`).next().contains(option).click();
        });
      }
      if (!Array.isArray(options)) {
        cy.get(`#${id}_list`).next().contains(options).click();
      }
    });
});

Cypress.Commands.add("tree", (selector: string, options: string[]) => {
  cy.get(`[data-cy=${selector}]`)
    .click()
    .find("input")
    .invoke("attr", "id")
    .then((id) => {
      options.forEach((option, index) => {
        if (index !== options.length - 1) {
          cy.get(`#${id}_list`)
            .contains(option)
            .parent()
            .parent()
            .find("[data-icon=caret-down]")
            .click();
        }

        if (index === options.length - 1) {
          cy.get(`#${id}_list`).contains(option).click();
        }
      });
    });
});

Cypress.Commands.add("clickOutside", () => {
  return cy.get("body").click(0, 0);
});

Cypress.Commands.add("checkError", (selector) => {
  cy.getBySel(selector).scrollIntoView().contains("Field is required").should("be.visible");
});
