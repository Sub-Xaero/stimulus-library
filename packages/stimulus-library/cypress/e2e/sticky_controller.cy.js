describe("StickyController", () => {
  beforeEach(() => {
    cy.visit("controllers/sticky_controller.html");
  });

  it("inserts the magic element before the element in top mode", () => {
    cy.get("#action-bar").then(($el) => {
      const magic = $el[0].previousElementSibling;
      expect(magic.tagName).to.equal("DIV");
      expect(magic.childNodes).to.have.length(0);
    });
  });

  it("inserts the magic element after the element in bottom mode", () => {
    cy.get("#sticky-header").then(($el) => {
      const magic = $el[0].nextElementSibling;
      expect(magic.tagName).to.equal("DIV");
      expect(magic.childNodes).to.have.length(0);
    });
  });

  it("marks the element as stuck while its natural position is out of view", () => {
    cy.get("#action-bar").should("have.class", "stuck");
    cy.get("#sticky-header").should("not.have.class", "stuck");
  });

  it("toggles the stuck class as the page scrolls", () => {
    cy.scrollTo("bottom");
    cy.get("#action-bar").should("not.have.class", "stuck");
    cy.get("#sticky-header").should("have.class", "stuck");

    cy.scrollTo("top");
    cy.get("#action-bar").should("have.class", "stuck");
    cy.get("#sticky-header").should("not.have.class", "stuck");
  });

  it("removes the magic element when the controller disconnects", () => {
    cy.get("#sticky-header").then(($el) => {
      const magic = $el[0].nextElementSibling;
      $el[0].removeAttribute("data-controller");
      cy.wrap(null).should(() => expect(magic.isConnected).to.equal(false));
    });
  });
});
