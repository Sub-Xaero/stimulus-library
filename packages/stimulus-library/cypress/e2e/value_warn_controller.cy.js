describe("Value Warn Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/value_warn_controller.html");
  });
  it("sets a warning class when the user inputted value exceeds the given bounds", () => {
    cy.get("input").should("not.have.class", "warn");
    cy.get("small[data-value-warn-target=\"warning\"]").should("have.text", "").should("not.be.visible");

    cy.get("input").invoke("val", "-1").trigger("input").should("have.class", "warn");
    cy.get("small[data-value-warn-target=\"warning\"]")
      .should("have.text", "You cannot purchase less than 1 of something. That's just not how commerce works")
      .should("be.visible");
    cy.get("input").clear();

    cy.get("input").type("2").should("not.have.class", "warn");
    cy.get("small[data-value-warn-target=\"warning\"]").should("have.text", "").should("not.be.visible");
    cy.get("input").clear();

    cy.get("input").type("4").should("have.class", "warn");
    cy.get("small[data-value-warn-target=\"warning\"]").should("have.text", "Warning: Low stock, your order might be rejected.").should("be.visible");
    cy.get("input").clear();
  });
});
