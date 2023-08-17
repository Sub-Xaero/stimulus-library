describe("Fallback Image Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/fallback_image_controller.html");
  });
  it("Hides the element if a suitable fallback image cannot be shown when the src fails to load", () => {
    cy.get("#img-1").should("not.be.visible");
  });
  it("Hides the element if both the src and the fallback image fail to load", () => {
    cy.get("#img-2").should("not.be.visible");
  });
  it("Displays a fallback image if the src fails to load", () => {
    cy.get("#img-3").should("have.attr", "src", "https://picsum.photos/200/300");
    cy.get("#img-3").should("be.visible");
  });
});
