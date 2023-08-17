describe("TimeDistanceController", () => {

  it("Updates regularly when the timestamp was in the last day", () => {
    cy.clock(new Date(2021, 3, 25, 21, 32, 58).getTime());
    cy.visit("controllers/time_distance_controller.html");
    cy.get("[data-controller~=\"time-distance\"]").should("have.text", "less than 5 seconds ago");
    cy.tick(30000);
    cy.get("[data-controller~=\"time-distance\"]").should("have.text", "half a minute ago");
    cy.tick(30000);
    cy.get("[data-controller~=\"time-distance\"]").should("have.text", "1 minute ago");
    cy.tick(60000);
    cy.get("[data-controller~=\"time-distance\"]").should("have.text", "2 minutes ago");

    cy.tick(60000 * 5);
    cy.get("[data-controller~=\"time-distance\"]").should("have.text", "7 minutes ago");

    cy.tick(60000 * 60);
    cy.get("[data-controller~=\"time-distance\"]").should("have.text", "about 1 hour ago");

    cy.tick(60000 * 60);
    cy.get("[data-controller~=\"time-distance\"]").should("have.text", "about 2 hours ago");

    cy.tick(60000 * 60);
    cy.get("[data-controller~=\"time-distance\"]").should("have.text", "about 3 hours ago");

    cy.tick(60000 * 60 * 24);
    cy.get("[data-controller~=\"time-distance\"]").should("have.text", "1 day ago");
  });

  it("Doesn't update when the timestamp different is bigger than hours and minutes", () => {
    cy.clock(new Date(2021, 4, 13, 21, 32, 58).getTime());
    cy.visit("controllers/time_distance_controller.html");
    cy.get("[data-controller~=\"time-distance\"]").should("have.text", "18 days ago");

    cy.tick(60000 * 60 * 24);
    cy.get("[data-controller~=\"time-distance\"]").should("have.text", "18 days ago");

    cy.tick(60000 * 60 * 24);
    cy.get("[data-controller~=\"time-distance\"]").should("have.text", "18 days ago");
  });
});
