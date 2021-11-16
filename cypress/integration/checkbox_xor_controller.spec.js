describe('Checkbox XOR Controller', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/controllers/checkbox_xor_controller.html');
  });

  it('should only allow one input to be checked at a time', () => {

    let flavours = [
      "Chocolate",
      "Vanilla",
      "Fudge",
      "Banana",
      "Strawberry",
    ]

    flavours.forEach(flavour => {
      cy.get(`input[name="${flavour}"]`).check();
      cy.get(`input:not([name="${flavour}"])`).should('not.be.checked');
    })
  });

});
