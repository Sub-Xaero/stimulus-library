describe("Disable with controller", () => {
  beforeEach(() => {
    cy.visit("controllers/disable_with_controller.html");
  });

  it("Should disable form buttons for a short time after click", () => {
    cy.get("input[type=\"submit\"]").should("have.value", "Submit Me");
    cy.get("input[type=\"submit\"]").click();
    cy.get("input[type=\"submit\"]").should("have.value", "Bear with us...");
  });

  it("Should disable buttons for a short time after click", () => {
    cy.get("button").should("contain.text", "Submit Me");
    cy.get("button").click();
    cy.get("button").should("contain.text", "Bear with us...");
  });

  it("Should disable links for a short time after click", () => {
    cy.get("a").should("contain.text", "Submit Me");
    cy.get("a").click();
    cy.get("a").should("contain.text", "Bear with us...");
  });
});
