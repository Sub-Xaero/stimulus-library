describe('ClockController', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/controllers/clock_controller.html');
  });
  it('Shows a clock that ticks on its own and shows the correct time', () => {

    let hours = () => {
      let val = new Date().getHours();
      return val < 10 ? '0' + val : val.toString();
    };
    let minutes = () => {
      let val = new Date().getMinutes();
      return val < 10 ? '0' + val : val.toString();
    };
    let seconds = () => {
      let val = new Date().getSeconds();
      return val < 10 ? '0' + val : val.toString();
    };

    cy.get('[data-clock-target="hours"]').should('have.text', hours());
    cy.get('[data-clock-target="minutes"]').should('have.text', minutes());
    cy.get('[data-clock-target="seconds"]').should('have.text', seconds());
    // TODO: Add a test that checks that the clock ticks every second.
  });
});
