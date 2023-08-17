describe("Password Peak Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/password_peak_controller.html");
  });
  it("should toggle the password field type between password and text", () => {
    cy.get("#password").type("password");
    cy.get("#password").should("have.attr", "type", "password");
    cy.contains("Show/Hide Password").click();
    cy.get("#password").should("have.attr", "type", "text");
    cy.contains("Show/Hide Password").click();
    cy.get("#password").should("have.attr", "type", "password");
  });
});
