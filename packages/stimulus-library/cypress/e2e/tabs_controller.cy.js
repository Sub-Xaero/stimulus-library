describe("TabsController", () => {
  beforeEach(() => {
    cy.visit("controllers/tabs_controller.html");
  });
  it("Should set the appropriate class on the correct tab body when the tab header is clicked", () => {
    cy.get("li.tabs-title:nth-of-type(1)").click();
    cy.get(".tabs-panel:nth-child(1)").should("have.class", "is-active");
    cy.get(".tabs-panel:nth-child(2)").should("not.have.class", "is-active").should("not.be.visible");
    cy.get(".tabs-panel:nth-child(3)").should("not.have.class", "is-active").should("not.be.visible");

    cy.get("li.tabs-title:nth-of-type(2)").click();
    cy.get(".tabs-panel:nth-child(1)").should("not.have.class", "is-active").should("not.be.visible");
    cy.get(".tabs-panel:nth-child(2)").should("have.class", "is-active");
    cy.get(".tabs-panel:nth-child(3)").should("not.have.class", "is-active").should("not.be.visible");

    cy.get("li.tabs-title:nth-of-type(3)").click();
    cy.get(".tabs-panel:nth-child(1)").should("not.have.class", "is-active").should("not.be.visible");
    cy.get(".tabs-panel:nth-child(2)").should("not.have.class", "is-active").should("not.be.visible");
    cy.get(".tabs-panel:nth-child(3)").should("have.class", "is-active");
  });
});
