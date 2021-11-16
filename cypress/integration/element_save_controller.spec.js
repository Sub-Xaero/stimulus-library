describe('ElementSaveController', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/controllers/element_save_controller.html');
  });
  it('should persist changes to an input between page loads', () => {
    cy.get('textarea').type('Hello World').trigger('change');
    cy.reload()
    cy.get('textarea').should('have.value', 'Hello World');
  });
});
