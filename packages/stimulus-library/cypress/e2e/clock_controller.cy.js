describe("ClockController", () => {
  beforeEach(() => {
    cy.clock(new Date(2021, 10, 11, 8, 0, 0).getTime());
    cy.visit("controllers/clock_controller.html");
  });
  it("Shows a clock that ticks on its own and shows the correct time", () => {
    cy.tick(2000);
    cy.get("[data-clock-target=\"hours\"]").should("have.text", "08");
    cy.get("[data-clock-target=\"minutes\"]").should("have.text", "00");
    cy.get("[data-clock-target=\"seconds\"]").should("have.text", "02");

    cy.tick(1000*60);
    cy.get("[data-clock-target=\"hours\"]").should("have.text", "08");
    cy.get("[data-clock-target=\"minutes\"]").should("have.text", "01");
    cy.get("[data-clock-target=\"seconds\"]").should("have.text", "02");

    cy.tick(1000*60*60);
    cy.get("[data-clock-target=\"hours\"]").should("have.text", "09");
    cy.get("[data-clock-target=\"minutes\"]").should("have.text", "01");
    cy.get("[data-clock-target=\"seconds\"]").should("have.text", "02");

    cy.tick(1000*60*60*10);
    cy.get("[data-clock-target=\"hours\"]").should("have.text", "19");
    cy.get("[data-clock-target=\"minutes\"]").should("have.text", "01");
    cy.get("[data-clock-target=\"seconds\"]").should("have.text", "02");

  });
});
