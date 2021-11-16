describe('Auto Submit Form Controller', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/controllers/auto_submit_form_controller.html');
  });
  it('should submit the form once an input changes', () => {
    // Before submitting the form, there are no URL params
    cy.url().should('not.include', '?user%5Bquest%5D=Hello+World');
    // Type in the input
    cy.get('textarea').type('Hello World');
    // Click away from the input, to trigger the change event
    cy.get('p').click()
    // The form should have been submitted, as evidenced by the presence of URL params
    cy.url().should('include', '?user%5Bquest%5D=Hello+World');
  });
});
