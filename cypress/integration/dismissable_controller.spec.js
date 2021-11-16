describe('DismissableController', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/controllers/dismissable_controller.html');
  });
  it('An element can be removed from the DOM', () => {
    cy.get('[data-controller="dismissable"]').should('exist');
    cy.contains('Dismiss').click();
    cy.get('[data-controller="dismissable"]').should('not.exist');
  });
});
