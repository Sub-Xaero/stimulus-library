describe("Navigate Form Errors Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/navigate_form_errors_controller.html");
  });
  it("should allow the user to navigate between form errors ", () => {
    cy.get(".currentError").should("not.exist");

    cy.contains("Current error").click();
    cy.get("form>div:nth-child(1) .invalid-feedback").should("have.class", "currentError");

    cy.contains("Next error").click();
    cy.get("form>div:nth-child(2) .invalid-feedback").should("have.class", "currentError");

    cy.contains("Next error").click();
    cy.get("form>div:nth-child(3) .invalid-feedback").should("have.class", "currentError");

    cy.contains("Next error").click();
    cy.get("form>div:nth-child(4) .invalid-feedback").should("have.class", "currentError");

    cy.contains("Next error").click();
    cy.get("form>div:nth-child(5) .invalid-feedback").should("have.class", "currentError");

    cy.contains("Next error").should("have.attr", "disabled");
    cy.contains("Next error").click();
    cy.get("form>div:nth-child(5) .invalid-feedback").should("have.class", "currentError");

    cy.contains("Previous error").click();
    cy.get("form>div:nth-child(4) .invalid-feedback").should("have.class", "currentError");

    cy.contains("Previous error").click();
    cy.get("form>div:nth-child(3) .invalid-feedback").should("have.class", "currentError");

    cy.contains("Previous error").click();
    cy.get("form>div:nth-child(2) .invalid-feedback").should("have.class", "currentError");

    cy.contains("Previous error").click();
    cy.get("form>div:nth-child(1) .invalid-feedback").should("have.class", "currentError");

    cy.contains("Previous error").should("have.attr", "disabled");
    cy.contains("Previous error").click();
    cy.get("form>div:nth-child(1) .invalid-feedback").should("have.class", "currentError");

  });
});
