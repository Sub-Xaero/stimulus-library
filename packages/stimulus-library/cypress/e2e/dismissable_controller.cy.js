describe("DismissableController", () => {
  beforeEach(() => {
    cy.visit("controllers/dismissable_controller.html");
  });
  it("An element can be removed from the DOM", () => {
    cy.get("[data-controller=\"dismissable\"]").should("exist");
    cy.contains("Dismiss").click();
    cy.get("[data-controller=\"dismissable\"]").should("not.exist");
  });
});
