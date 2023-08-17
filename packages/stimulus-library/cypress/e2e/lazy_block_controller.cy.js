describe("Lazy Block Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/lazy_block_controller.html");
  });

  it("Should contain remote content", () => {
    cy.get("#output").contains("This content came from another page");
  });

});
