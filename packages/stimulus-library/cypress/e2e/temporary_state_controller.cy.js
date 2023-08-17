describe("TemporaryStateController", () => {
  beforeEach(() => {
    cy.clock();
    cy.visit("controllers/temporary_state_controller.html");
  });
  it("Should automatically apply a value to an element, and remove it after the given time", () => {
    cy.tick(1000);
    cy.get(".panel").should("have.class", "pink");
    cy.tick(1000);
    cy.get(".panel").should("have.class", "pink");
    cy.tick(1000);
    cy.get(".panel").should("have.class", "pink");
    cy.tick(1000);
    cy.get(".panel").should("have.class", "pink");
    // After 5 seconds, the class should be removed
    cy.tick(1000);
    cy.get(".panel").should("not.have.class", "className", "pink");
  });
});
