describe("AsyncBlockController", () => {
  beforeEach(() => {
    cy.visit("controllers/async_block_controller.html");
  });

  it("Should contain remote content", () => {
    cy.get("#output").contains("This content came from another page");
  });

});
