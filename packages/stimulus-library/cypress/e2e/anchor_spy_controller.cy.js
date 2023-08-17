describe("Anchor Spy Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/anchor_spy_controller.html");
  });

  it("it updates the url when a link fires anchor-spy#write action on click", () => {
    cy.contains("Set anchor to #foo").click();
    cy.url().should("include", "#foo");

    cy.contains("Set anchor to #bar").click();
    cy.url().should("include", "#bar");

    cy.contains("Set anchor to #test").click();
    cy.url().should("include", "#test");
  });

  it("it sets a class when the anchor is the listened value", () => {
    cy.contains("Set anchor to #foo").click();
    cy.url().should("include", "#foo");
    cy.get("[data-controller~=\"highlight-element\"]").should("have.class", "highlight");

    cy.contains("Set anchor to #bar").click();
    cy.get("[data-controller~=\"highlight-element\"]").should("not.have.class", "highlight");

    cy.contains("Set anchor to #test").click();
    cy.get("[data-controller~=\"highlight-element\"]").should("not.have.class", "highlight");
  });

});
