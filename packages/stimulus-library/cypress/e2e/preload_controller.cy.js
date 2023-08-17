describe("PreloadController", () => {
  beforeEach(() => {
    cy.visit("controllers/preload_controller.html");
  });
  it("When the user hovers over a preload enabled element, a link[ref=\"prefetch\"] is created in the DOM", () => {
    cy.get("link[rel=\"prefetch\"]").should("not.exist");
    cy.get("a[data-controller=\"prefetch\"]").trigger("mouseover");
    cy.get("link[rel=\"prefetch\"][href$=\"/fixtures/placeholder_page.html\"]").should("exist");
  });

  it("Should only ever create a prefetch if it does not already exist", () => {
    cy.get("a[data-controller=\"prefetch\"]").trigger("mouseover");
    cy.get("link[rel=\"prefetch\"][href$=\"/fixtures/placeholder_page.html\"]").should("have.length", 1);
    cy.get("a[data-controller=\"prefetch\"]").trigger("mouseover");
    cy.get("link[rel=\"prefetch\"][href$=\"/fixtures/placeholder_page.html\"]").should("have.length", 1);
  });

});
