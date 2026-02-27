describe("Fallback Iframe Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/fallback_iframe_controller.html");
  });
  it("Hides the element if a suitable fallback iframe cannot be shown when the src fails to load", () => {
    cy.get("#iframe-1").should("not.be.visible");
  });
  it("Hides the element if both the src and the fallback src fail to load", () => {
    cy.get("#iframe-2").should("not.be.visible");
  });
  it("Displays a fallback iframe if the src fails to load", () => {
    cy.get("#iframe-3").should("have.attr", "src", "https://example.com/");
    cy.get("#iframe-3").should("be.visible");
  });
});
