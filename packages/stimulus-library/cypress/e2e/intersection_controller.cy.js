describe("IntersectionController", () => {
  beforeEach(() => {
    cy.visit("controllers/intersection_controller.html");
  });
  it("When the viewport scrolls over the video element, the intersection controller should cause it to play", () => {
    cy.get("video").should("have.prop", "paused", true);

    cy.get("video").scrollIntoView();
    cy.get("video").should("have.prop", "paused", false);
    cy.wait(1000); // Wait for video to play

    cy.get("p:first-of-type").scrollIntoView();
    cy.get("video").should("have.prop", "paused", true);
  });
});
