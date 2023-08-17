describe("Self destruct controller", () => {
  beforeEach(() => {
    cy.clock();
    cy.visit("controllers/self_destruct_controller.html");
  });
  it("Should automatically remove the element after the specified time", () => {
    cy.get(".alert[data-controller=\"self-destruct\"]").click();
    // 1 seconds have passed
    cy.tick(1000);
    cy.get(".alert[data-controller=\"self-destruct\"]").should("exist");

    // 2 seconds have passed
    cy.tick(1000);
    cy.get(".alert[data-controller=\"self-destruct\"]").should("exist");

    // 3 seconds have passed
    cy.tick(1000);
    cy.get(".alert[data-controller=\"self-destruct\"]").should("exist");

    // 4 seconds have passed
    cy.tick(1000);
    cy.get(".alert[data-controller=\"self-destruct\"]").should("exist");

    // 5 seconds have passed
    cy.tick(1000);
    cy.get(".alert[data-controller=\"self-destruct\"]").should("exist");

    // 6 seconds have passed
    cy.tick(1000);
    cy.get(".alert[data-controller=\"self-destruct\"]").should("not.exist");
  });
});
