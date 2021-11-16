describe('Countdown Controller', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/controllers/countdown_controller.html');
  });
  it('Should show a countdown to the specified time');
});
