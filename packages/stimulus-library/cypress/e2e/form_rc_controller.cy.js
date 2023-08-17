describe("Form RC Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/form_rc_controller.html");
  });
  it("The form should submit when an element from outside the scope triggers the #submit action", () => {
    cy.url().should("not.include", "&");
    cy.get("textarea[name=\"quest\"]").type("To find the Holy Grail");
    cy.get("[data-action=\"form-rc#submit\"]").click();
    cy.url().should("include", "&quest=To+find+the+Holy+Grail");
  });

  it("The form should reset when an element from outside the scope triggers the #reset action", () => {
    cy.get("textarea[name=\"quest\"]").type("To find the Holy Grail");
    cy.get("[data-action=\"form-rc#reset\"]").click();
    cy.get("textarea[name=\"quest\"]").should("have.value", "");
  });
});
