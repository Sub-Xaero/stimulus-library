describe("Confirm Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/confirm_controller.html");
  });
  it("Shows a confirmation dialogue when the user clicks an enabled link", () => {
    cy.contains("Link with confirm").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Are you sure?");
      return true;
    });
  });

  it("Shows a confirmation dialogue when the user submits an enabled form", () => {
    cy.contains("Submit").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Are you sure?");
      return true;
    });
  });
})
;
