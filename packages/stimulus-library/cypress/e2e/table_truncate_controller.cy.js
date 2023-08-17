describe("TableTruncateController", () => {
  beforeEach(() => {
    cy.visit("controllers/table_truncate_controller.html");
  });
  it("Should only show a subsection of table rows", () => {
    cy.get("tbody>tr:nth-child(1)>td").should("contain.text", "Sally").should("be.visible");
    cy.get("tbody>tr:nth-child(2)>td").should("contain.text", "Trevor").should("be.visible");
    cy.get("tbody>tr:nth-child(3)").should("not.be.visible");
    cy.get("tbody>tr:nth-child(4)").should("not.be.visible");
    cy.get("tbody>tr:nth-child(5)").should("not.be.visible");
    cy.get("tbody>tr:nth-child(6)").should("not.be.visible");
    cy.contains("Show More").should("be.visible").click();

    cy.get("tbody>tr").should("be.visible");
    cy.contains("Show More").should("not.be.visible");
  });
});
