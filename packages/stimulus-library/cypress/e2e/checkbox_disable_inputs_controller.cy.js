describe("Checkbox Disable Inputs Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/checkbox_disable_inputs_controller.html");
  });
  it("should disable other inputs when the checkbox is ticked", () => {
    cy.get("[data-checkbox-disable-inputs-target=\"disabler\"]").should("not.be.checked");
    cy.get("[data-checkbox-disable-inputs-target=\"disable\"]").should("not.be.disabled");
    cy.get("[data-checkbox-disable-inputs-target=\"disabler\"]").click();
    cy.get("[data-checkbox-disable-inputs-target=\"disabler\"]").should("be.checked");
    cy.get("[data-checkbox-disable-inputs-target=\"disable\"]").should("be.disabled");
  });
});
