describe("LightboxImageController", () => {
  beforeEach(() => {
    cy.visit("controllers/lightbox_image_controller.html");
  });

  it("Clicking on an enabled image should open a dialogue", () => {
    cy.get("dialog").should("not.exist");
    cy.get("img").click();
    cy.get("dialog").should("exist");
  });

  it("Clicking away from an open dialogue should remove it", () => {
    cy.get("img").click();
    cy.get("dialog").should("exist");
    cy.get("dialog").click();
    cy.get("dialog").should("not.exist");
  });

});
