describe("Poll Block Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/poll_block_controller.html");
  });

  it("Should contain remote content", () => {
    cy.get("#output").contains("This content came from another page");
  });
});
