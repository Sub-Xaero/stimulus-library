describe("Auto Submit Form Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/auto_submit_form_controller.html");
  });
  it("should submit the form once an input changes", () => {
    // Before submitting the form, there are no URL params
    cy.url().should("not.include", "?user%5Bquest%5D=Hello+World");
    // Type in the input
    cy.get("textarea[name=\"user[quest]\"]").type("Hello World");
    // Click away from the input, to trigger the change event
    cy.get("p:first-of-type").click();
    // The form should have been submitted, as evidenced by the presence of URL params
    cy.url().should("include", "?user%5Bquest%5D=Hello+World");

  });
  it("should not submit the form when ignored inputs change", () => {
    // Before submitting the form, there are no URL params
    cy.url().should("not.include", "?user%5Bsecret_quest%5D=Hello+World");
    // Type in the ignored input
    cy.get("textarea[name=\"user[secret_quest]\"]").type("Hello World");
    // Click away from the input, to trigger the change event
    cy.get("p:first-of-type").click();
    // The form should not have been submitted, as evidenced by the absence of URL params
    cy.url().should("not.include", "?user%5Bsecret_quest%5D=Hello+World");

    // Type in the ignored input
    cy.get("textarea[name=\"user[quest]\"]").type("Hello World");
    // Click away from the input, to trigger the change event
    cy.get("p:first-of-type").click();
    // The form should NOW have been submitted on , as evidenced by the presence of URL params
    cy.url().should("include", "?user%5Bquest%5D=Hello+World");
  });
});
