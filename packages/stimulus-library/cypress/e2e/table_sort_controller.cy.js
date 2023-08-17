describe("Table Sort Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/table_sort_controller.html");
  });
  it("Clicking a table header should sort the rows by that column", () => {
    cy.get("tbody>tr:nth-child(2)>td").should("contain", "Sally");
    // Works with strings
    cy.contains("Name").click();
    cy.get("tbody>tr:nth-child(2)>td:nth-child(1)").should("contain", "Aiyla");
    cy.get("tbody>tr:nth-child(2)>td:nth-child(2)").should("contain", "32");

    cy.get("tbody>tr:nth-child(3)>td:nth-child(1)").should("contain", "Sally");
    cy.get("tbody>tr:nth-child(3)>td:nth-child(2)").should("contain", "21");

    cy.get("tbody>tr:nth-child(4)>td:nth-child(1)").should("contain", "Trevor");
    cy.get("tbody>tr:nth-child(4)>td:nth-child(2)").should("contain", "45");

    // Clicking again should reverse the sort order
    cy.contains("Name").click();
    cy.get("tbody>tr:nth-child(2)>td:nth-child(1)").should("contain", "Trevor");
    cy.get("tbody>tr:nth-child(2)>td:nth-child(2)").should("contain", "45");

    cy.get("tbody>tr:nth-child(3)>td:nth-child(1)").should("contain", "Sally");
    cy.get("tbody>tr:nth-child(3)>td:nth-child(2)").should("contain", "21");

    cy.get("tbody>tr:nth-child(4)>td:nth-child(1)").should("contain", "Aiyla");
    cy.get("tbody>tr:nth-child(4)>td:nth-child(2)").should("contain", "32");

    // Works with numbers
    cy.contains("Age").click();
    cy.get("tbody>tr:nth-child(2)>td:nth-child(1)").should("contain", "Sally");
    cy.get("tbody>tr:nth-child(2)>td:nth-child(2)").should("contain", "21");

    cy.get("tbody>tr:nth-child(3)>td:nth-child(1)").should("contain", "Aiyla");
    cy.get("tbody>tr:nth-child(3)>td:nth-child(2)").should("contain", "32");

    cy.get("tbody>tr:nth-child(4)>td:nth-child(1)").should("contain", "Trevor");
    cy.get("tbody>tr:nth-child(4)>td:nth-child(2)").should("contain", "45");

    // Clicking again should reverse the sort order
    cy.contains("Age").click();
    cy.get("tbody>tr:nth-child(2)>td:nth-child(1)").should("contain", "Trevor");
    cy.get("tbody>tr:nth-child(2)>td:nth-child(2)").should("contain", "45");

    cy.get("tbody>tr:nth-child(3)>td:nth-child(1)").should("contain", "Aiyla");
    cy.get("tbody>tr:nth-child(3)>td:nth-child(2)").should("contain", "32");

    cy.get("tbody>tr:nth-child(4)>td:nth-child(1)").should("contain", "Sally");
    cy.get("tbody>tr:nth-child(4)>td:nth-child(2)").should("contain", "21");

  });

  it("Should respect rows that are pinned to the top and bottom", () => {
    cy.get("tbody>tr:nth-child(1)>td").should("contain.text", "This row is always at the top");
    cy.get("tbody>tr:nth-child(5)>td").should("contain.text", "This row is always at the bottom");

    cy.contains("Name").click();
    cy.get("tbody>tr:nth-child(1)>td").should("contain.text", "This row is always at the top");
    cy.get("tbody>tr:nth-child(5)>td").should("contain.text", "This row is always at the bottom");

    cy.contains("Name").click();
    cy.get("tbody>tr:nth-child(1)>td").should("contain.text", "This row is always at the top");
    cy.get("tbody>tr:nth-child(5)>td").should("contain.text", "This row is always at the bottom");

    cy.contains("Age").click();
    cy.get("tbody>tr:nth-child(1)>td").should("contain.text", "This row is always at the top");
    cy.get("tbody>tr:nth-child(5)>td").should("contain.text", "This row is always at the bottom");

    cy.contains("Age").click();
    cy.get("tbody>tr:nth-child(1)>td").should("contain.text", "This row is always at the top");
    cy.get("tbody>tr:nth-child(5)>td").should("contain.text", "This row is always at the bottom");

    cy.contains("Email Address").click();
    cy.get("tbody>tr:nth-child(1)>td").should("contain.text", "This row is always at the top");
    cy.get("tbody>tr:nth-child(5)>td").should("contain.text", "This row is always at the bottom");

    cy.contains("Email Address").click();
    cy.get("tbody>tr:nth-child(1)>td").should("contain.text", "This row is always at the top");
    cy.get("tbody>tr:nth-child(5)>td").should("contain.text", "This row is always at the bottom");
  });
});
