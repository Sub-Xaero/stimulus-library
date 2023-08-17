describe("Duration Controller", () => {
  beforeEach(() => {
    cy.clock(1621556319 * 1000);
    cy.visit("controllers/duration_controller.html");
  });
  it("Shows the amount of elapsed time since the given timestamp", () => {
    cy.tick(1500);
    cy.get("#no-mins-no-secs").should("have.text", "0.0 hours");
    cy.get("#no-secs").should("have.text", "");
    cy.get("#mins-and-secs").should("have.text", "1 second");

    cy.tick(1000);
    cy.get("#mins-and-secs").should("have.text", "2 seconds");

    cy.tick(1000 * 60);
    cy.get("#no-secs").should("have.text", "1 minute");
    cy.get("#mins-and-secs").should("have.text", "1 minute, 2 seconds");

    cy.tick(1000 * 60 * 30);
    cy.get("#no-mins-no-secs").should("have.text", "0.5 hours");
    cy.get("#no-secs").should("have.text", "31 minutes");
    cy.get("#mins-and-secs").should("have.text", "31 minutes, 2 seconds");

    cy.tick(1000 * 60 * 30);
    cy.get("#no-mins-no-secs").should("have.text", "1 hour");
    cy.get("#no-secs").should("have.text", "1 hour, 1 minute");
    cy.get("#mins-and-secs").should("have.text", "1 hour, 1 minute, 2 seconds");

    cy.tick(1000 * 60 * 60 * 24);
    cy.get("#no-mins-no-secs").should("have.text", "1 day, 1 hour");
    cy.get("#no-secs").should("have.text", "1 day, 1 hour, 1 minute");
    cy.get("#mins-and-secs").should("have.text", "1 day, 1 hour, 1 minute, 2 seconds");

    cy.tick(1000 * 60 * 60 * 24 * 7);
    cy.get("#no-mins-no-secs").should("have.text", "8 days, 1 hour");
    cy.get("#no-secs").should("have.text", "8 days, 1 hour, 1 minute");
    cy.get("#mins-and-secs").should("have.text", "8 days, 1 hour, 1 minute, 2 seconds");
  });
});
