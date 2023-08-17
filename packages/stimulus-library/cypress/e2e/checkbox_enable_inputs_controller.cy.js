describe("Checkbox Enable Inputs Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/checkbox_enable_inputs_controller.html");
  });
  it("should enable other inputs when the checkbox is ticked", () => {
    cy.get("[data-checkbox-enable-inputs-target=\"enabler\"]").should("not.be.checked");
    cy.get("[data-checkbox-enable-inputs-target=\"enable\"]").should("be.disabled");

    cy.get("[data-checkbox-enable-inputs-target=\"enabler\"]").click();
    cy.get("[data-checkbox-enable-inputs-target=\"enabler\"]").should("be.checked");
    cy.get("[data-checkbox-enable-inputs-target=\"enable\"]").should("not.be.disabled");
  });
});
