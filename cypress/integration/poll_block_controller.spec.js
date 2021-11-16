describe('Poll Block Controller', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/controllers/poll_block_controller.html');
  });

  it('Should contain remote content', () => {
    cy.get('#output').contains('This content came from another page');
  });
});
