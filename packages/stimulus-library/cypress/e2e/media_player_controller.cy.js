describe("Media Player Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/media_player_controller.html");
  });
  it("The controller should be able to control the media element ", () => {
    cy.get("video").should("have.prop", "paused", true);
    cy.get("video").should("have.prop", "currentTime", 0);
    cy.get(".btn[data-action=\"media-player#play\"]").click();
    cy.get("video").should("have.prop", "paused", false);

    cy.get(".btn[data-action=\"media-player#pause\"]").click();
    cy.get("video").should("have.prop", "paused", true);
    cy.get(".btn[data-action=\"media-player#pause\"]").click();

    cy.get("video").should("not.have.prop", "currentTime", 0);
    cy.get(".btn[data-action=\"media-player#restart\"]").click();
    cy.get("video").should("have.prop", "currentTime", 0);

    cy.get(".btn[data-action=\"media-player#seek\"]").click();
    cy.get("video").should("have.prop", "currentTime", 5);
    cy.get(".btn[data-action=\"media-player#seek\"]").click();
    cy.get("video").should("have.prop", "currentTime", 10);
  });
});
