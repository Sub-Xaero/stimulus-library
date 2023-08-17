describe("Limited selection checkboxes controller", () => {
  beforeEach(() => {
    cy.visit("controllers/limited_selection_checkboxes_controller.html");
  });
  it("should should an error if the user checks too many boxes", () => {
    cy.get("input[value=\"Chocolate\"]").check();
    cy.get("input[value=\"Chocolate\"]").should("be.checked");
    cy.get("input[value=\"Vanilla\"]").check();
    cy.get("input[value=\"Vanilla\"]").should("be.checked");
    cy.get("input[value=\"Strawberry\"]").check();
    cy.get("input[value=\"Strawberry\"]").should("be.checked");
    cy.get("div.error").should("have.text", "");

    cy.get("input[value=\"Mint\"]").check();
    cy.get("input[value=\"Mint\"]").should("not.be.checked");
    cy.get("div.error").should("contain", "Please select a maximum of 3 flavours");
  });
});
