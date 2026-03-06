describe("SignalContentSyncController", () => {
  beforeEach(() => {
    cy.visit("controllers/signal_sync_controllers.html");
  });

  it("syncs innerText to the signal value as the user types", () => {
    cy.get("#content-sync-output").should("have.text", "");
    cy.get("#content-sync-input").type("Hello");
    cy.get("#content-sync-output").should("have.text", "Hello");
  });

  it("updates innerText when the value changes", () => {
    cy.get("#content-sync-input").type("First");
    cy.get("#content-sync-output").should("have.text", "First");
    cy.get("#content-sync-input").clear().type("Second");
    cy.get("#content-sync-output").should("have.text", "Second");
  });

  it("clears innerText when the input is cleared", () => {
    cy.get("#content-sync-input").type("Something");
    cy.get("#content-sync-output").should("have.text", "Something");
    cy.get("#content-sync-input").clear();
    cy.get("#content-sync-output").should("have.text", "");
  });
});

describe("SignalAttributeSyncController", () => {
  beforeEach(() => {
    cy.visit("controllers/signal_sync_controllers.html");
  });

  it("sets the specified attribute to the signal value", () => {
    cy.get("#attribute-sync-input").type("Enter your name");
    cy.get("#attribute-sync-target").should("have.attr", "placeholder", "Enter your name");
  });

  it("updates the attribute when the value changes", () => {
    cy.get("#attribute-sync-input").type("First placeholder");
    cy.get("#attribute-sync-target").should("have.attr", "placeholder", "First placeholder");
    cy.get("#attribute-sync-input").clear().type("Second placeholder");
    cy.get("#attribute-sync-target").should("have.attr", "placeholder", "Second placeholder");
  });
});

describe("SignalClassController", () => {
  beforeEach(() => {
    cy.visit("controllers/signal_sync_controllers.html");
  });

  it("adds the class when the predicate matches", () => {
    cy.get("#class-target").should("not.have.class", "passing");
    cy.get("#class-input").type("50").trigger("input");
    cy.get("#class-target").should("have.class", "passing");
  });

  it("does not add the class when the predicate does not match", () => {
    cy.get("#class-input").type("49").trigger("input");
    cy.get("#class-target").should("not.have.class", "passing");
  });

  it("removes the class when the value changes to no longer match", () => {
    cy.get("#class-input").type("75").trigger("input");
    cy.get("#class-target").should("have.class", "passing");
    cy.get("#class-input").clear().type("10").trigger("input");
    cy.get("#class-target").should("not.have.class", "passing");
  });

  it("adds the class with the default predicate when a non-empty value is given", () => {
    cy.get("#class-default-target").should("not.have.class", "has-value");
    cy.get("#class-default-input").type("anything");
    cy.get("#class-default-target").should("have.class", "has-value");
  });

  it("removes the class with the default predicate when the input is cleared", () => {
    cy.get("#class-default-input").type("something");
    cy.get("#class-default-target").should("have.class", "has-value");
    cy.get("#class-default-input").clear();
    cy.get("#class-default-target").should("not.have.class", "has-value");
  });
});
