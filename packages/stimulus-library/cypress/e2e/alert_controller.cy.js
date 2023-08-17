describe("Alert Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/alert_controller.html");
  });

  it("Alerts the user when event is fired", () => {
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I have arrived!");
    });
  });

});
