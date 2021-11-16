describe('AsyncBlockController', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/controllers/async_block_controller.html');
  });

  it('Should contain remote content', () => {
    cy.get('#output').contains('This content came from another page');
  });

});
