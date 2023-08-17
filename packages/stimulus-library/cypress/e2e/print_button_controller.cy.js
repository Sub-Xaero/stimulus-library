describe("Print Button Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/print_button_controller.html");
  });
  it("Triggers a print dialogue when the button is clicked", () => {
    let printStub;
    cy.window().then((win) => {
      printStub = cy.stub(win, "print");
      cy.contains("Print").click().then(() => {
        expect(printStub).to.be.calledOnce;
      });
    });
  });
});
