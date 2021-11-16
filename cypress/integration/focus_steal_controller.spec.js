describe('Focus steal controller', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/controllers/focus_steal_controller.html');
  });
  it('should focus the element when the page loads', () => {
    cy.get('#focus-thief').should('have.focus');
  });
});
