describe("Nested Form Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/nested_form_controller.html");
  });

  it("Should add a new record when the add button is clicked", () => {
    cy.get("[data-nested-form-target='target'] .nested-fields").should("have.length", 2);
    cy.get("[data-action='click->nested-form#add']").click();
    cy.get("[data-nested-form-target='target'] .nested-fields").should("have.length", 3);
  });

  it("Should remove a new record from the DOM when its remove button is clicked", () => {
    cy.get("[data-action='click->nested-form#add']").click();
    cy.get("[data-nested-form-target='target'] .nested-fields[data-new-record='true']").should("have.length", 1);
    cy.get("[data-nested-form-target='target'] .nested-fields[data-new-record='true'] [data-action='click->nested-form#remove']").click();
    cy.get("[data-nested-form-target='target'] .nested-fields[data-new-record='true']").should("have.length", 0);
  });

  it("Should hide a persisted record, set its _destroy input to '1', and move it out of the target container", () => {
    cy.get("[data-nested-form-target='target'] .nested-fields").should("have.length", 2);
    cy.get("#persisted-record-1 [data-action='click->nested-form#remove']").click();
    cy.get("#persisted-record-1").should("have.css", "display", "none");
    cy.get("#persisted-record-1 input[name*='_destroy']").should("have.value", "1");
    // Wrapper should be moved out of the target container into the graveyard
    cy.get("[data-nested-form-target='target'] #persisted-record-1").should("not.exist");
    cy.get("[data-nested-form-target='target'] .nested-fields").should("have.length", 1);
    // But the _destroy input should still be within the form for submission
    cy.get("form #persisted-record-1 input[name*='_destroy']").should("have.value", "1");
  });

  it("Should mark the _destroy input and form dirty when a persisted record is removed (eventOnDestroy enabled)", () => {
    cy.get("form").should("not.have.attr", "data-dirty");
    cy.get("#persisted-record-1 [data-action='click->nested-form#remove']").click();
    cy.get("#persisted-record-1 input[name*='_destroy']").should("have.attr", "data-dirty", "true");
    cy.get("form").should("have.attr", "data-dirty", "true");
  });
});
