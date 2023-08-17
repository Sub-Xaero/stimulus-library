describe("Form Save Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/form_save_controller.html");
  });
  it("Should persist the values in the form between page loads", () => {
    cy.get("textarea[name=\"quest\"]").type("To find the Holy Grail");
    cy.contains("Save your progress").click();
    cy.reload();
    cy.contains("Restore saved progress").click();
    cy.get("textarea[name=\"quest\"]").should("have.value", "To find the Holy Grail");
    cy.contains("Reset").click();
    cy.contains("Restore saved progress").click();
    cy.get("textarea[name=\"quest\"]").should("have.value", "To find the Holy Grail");
  });
});
