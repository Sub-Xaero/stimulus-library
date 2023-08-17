describe("CheckboxSelectAllController", () => {
  beforeEach(() => {
    cy.visit("controllers/checkbox_select_all_controller.html");
  });
  it("should check/uncheck all checkboxes when the main control is toggled", () => {
    // Anything that was checked on the page, uncheck
    cy.get("[data-checkbox-select-all-target=\"checkbox\"]:not([disabled]):not([readonly]):checked").click();
    // Nothing should be checked
    cy.get("[data-checkbox-select-all-target=\"checkbox\"]:not([disabled]):not([readonly])").should("not.be.checked");

    //When clicking select all
    cy.get("[data-checkbox-select-all-target=\"selectAll\"]").click();
    cy.get("[data-checkbox-select-all-target=\"selectAll\"]").should("be.checked");
    // All checkboxes should be checked, except readonly and disabled
    cy.get("[data-checkbox-select-all-target=\"checkbox\"]:not([disabled]):not([readonly])").should("be.checked");
    //When clicking select all again
    cy.get("[data-checkbox-select-all-target=\"selectAll\"]").click();
    // No checkboxes should be checked, except readonly and disabled
    cy.get("[data-checkbox-select-all-target=\"selectAll\"]").should("not.be.checked");
    cy.get("[data-checkbox-select-all-target=\"checkbox\"]:not([disabled]):not([readonly])").should("not.be.checked");
  });

  it("should show an indeterminate state when only some controls are checked", () => {
    // Anything that was checked on the page, uncheck
    cy.get("[data-checkbox-select-all-target=\"checkbox\"]:not([disabled]):not([readonly]):checked").click();
    // Nothing should be checked
    cy.get("[data-checkbox-select-all-target=\"checkbox\"]:not([disabled]):not([readonly])").should("not.be.checked");
    cy.get("[data-checkbox-select-all-target=\"selectAll\"]").invoke("prop", "indeterminate").should("eq", false);

    // Check 1 input
    cy.get("[data-checkbox-select-all-target=\"checkbox\"]:not([disabled]):not([readonly]):first").check();
    // The "select all" should show an indeterminate state
    cy.get("[data-checkbox-select-all-target=\"selectAll\"]").invoke("prop", "indeterminate").should("eq", true);

    // The "select all" indeterminate state should go away when all items are checked
    cy.get("[data-checkbox-select-all-target=\"checkbox\"]:not([disabled]):not([readonly]):not(:checked)").check();
    cy.get("[data-checkbox-select-all-target=\"selectAll\"]").invoke("prop", "indeterminate").should("eq", false);
  });

});
