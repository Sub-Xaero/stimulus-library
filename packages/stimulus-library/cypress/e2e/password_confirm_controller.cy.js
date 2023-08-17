describe("Password confirm controller", () => {
  beforeEach(() => {
    cy.visit("controllers/password_confirm_controller.html");
  });

  it("Should show an error if the two passwords are not the same", () => {
    cy.get("#password").type("some-password");
    cy.get("#password_confirmation").type("different-password").trigger("change");
    cy.get("#password_confirmation").should("have.class", "no-match");
  });

  it("Should not show an error until both passwords have been dirtied", () => {
    cy.get("#password").type("password");
    cy.get("#password_confirmation").should("not.have.class", "no-match");
    cy.get("#password_confirmation").type("password_asdasd").trigger("change");
    cy.get("#password_confirmation").should("have.class", "no-match");
  });

  it("Should should not show an error when the passwords match", () => {
    cy.get("#password").type("password");
    cy.get("#password_confirmation").should("not.have.class", "no-match");
    cy.get("#password").type("password").trigger("change");
    cy.get("#password_confirmation").should("not.have.class", "no-match");
  });
});
