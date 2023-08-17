describe("Detect dirty controller", () => {
  beforeEach(() => {
    cy.visit("controllers/detect_dirty_controller.html");
  });
  it("Should set a data-dirty attribute when any input is modified from the value it was created with", () => {
    let selector;

    // Text
    selector = "input[type=\"text\"][data-controller=\"detect-dirty\"]";
    cy.get(selector).should("not.have.attr", "data-dirty");
    cy.get(selector).type("Lorem ipsum");
    cy.get(selector).should("have.attr", "data-dirty", "true");

    // Number
    selector = "input[type=\"number\"][data-controller=\"detect-dirty\"]";
    cy.get(selector).should("not.have.attr", "data-dirty");
    cy.get(selector).type("42");
    cy.get(selector).should("have.attr", "data-dirty", "true");

    // Checkbox
    selector = "input[type=\"checkbox\"][data-controller=\"detect-dirty\"]";
    cy.get(selector).should("not.be.checked");
    cy.get(selector).should("not.have.attr", "data-dirty");
    cy.get(selector).check();
    cy.get(selector).should("have.attr", "data-dirty", "true");

    // Radio
    selector = "input[type=\"radio\"][data-controller=\"detect-dirty\"][value=\"2\"]";
    cy.get(selector).should("not.be.checked");
    cy.get(selector).should("not.have.attr", "data-dirty");
    cy.get(selector).check();
    cy.get(selector).should("have.attr", "data-dirty", "true");

    // Textarea
    selector = "textarea[data-controller=\"detect-dirty\"]";
    cy.get(selector).should("not.have.attr", "data-dirty");
    cy.get(selector).type("Lorem ipsum");
    cy.get(selector).should("have.attr", "data-dirty", "true");

    // Select
    selector = "select[data-controller=\"detect-dirty\"]";
    cy.get(selector).should("not.have.attr", "data-dirty");
    cy.get(selector).select("VOLVO");
    cy.get(selector).should("have.attr", "data-dirty", "true");
  });
});
