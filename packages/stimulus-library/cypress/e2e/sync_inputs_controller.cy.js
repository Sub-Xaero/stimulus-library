describe("Sync inputs controller", () => {
  beforeEach(() => {
    cy.visit("controllers/sync_inputs_controller.html");
  });
  it("TODO", () => {
    cy.get("span[data-sync-inputs-key-value=\"name\"]").should("have.text", "");
    cy.get("input[name=\"name\"]").type("John");
    cy.get("span[data-sync-inputs-key-value=\"name\"]").should("contain", "John");

    cy.get("span[data-sync-inputs-key-value=\"age\"]").should("have.text", "");
    cy.get("input[name=\"age\"]").type("25");
    cy.get("span[data-sync-inputs-key-value=\"age\"]").should("contain", "25");

    cy.get("span[data-sync-inputs-key-value=\"human\"]").should("have.text", "false");
    cy.get("input[name=\"human\"]").check();
    cy.get("span[data-sync-inputs-key-value=\"human\"]").should("have.text", "true");

    cy.get("span[data-sync-inputs-key-value=\"colour\"]").should("not.have.text", "Green");
    cy.get("select[name=\"colour\"]").select("Green");
    cy.get("span[data-sync-inputs-key-value=\"colour\"]").should("contain", "Green");

    cy.get("span[data-sync-inputs-key-value=\"animal\"]").should("have.text", "");
    cy.get("input[name=\"animal\"][value=\"Dog\"]").check();
    cy.get("span[data-sync-inputs-key-value=\"animal\"]").should("contain", "Dog");
  });
});
