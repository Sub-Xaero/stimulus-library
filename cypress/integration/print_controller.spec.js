describe('PrintController', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/controllers/print_controller.html');
  });
  it('Triggers a print dialogue when the action fires', () => {
    let printStub;
    cy.window().then((win) => {
      printStub = cy.stub(win, 'print');
      cy.contains('Print').click().then(() => {
        expect(printStub).to.be.calledOnce;
      });
    });
  });
});
