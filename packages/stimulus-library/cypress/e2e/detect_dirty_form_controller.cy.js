describe("Detect dirty form controller", () => {
  beforeEach(() => {
    cy.visit("controllers/detect_dirty_form_controller.html");
  });
  it("Should set a data-dirty attribute when an of of a form's input are modified from the value it was created with", () => {
    cy.get("form").should("not.have.attr", "data-dirty");

    cy.get("input[type=\"text\"],input[type=\"number\"],input[type=\"checkbox\"],input[type=\"radio\"]:not(:checked),select,textarea").each((el, index, list) => {
      switch (el[0].tagName) {
      case "INPUT":
        if (el[0].type === "checkbox" || el[0].type === "radio") {
          cy.wrap(el).check();
        } else {
          cy.wrap(el).type("123");
        }
        break;

      case "TEXTAREA":
        cy.wrap(el).type("Lorem ipsum");
        break;

      case "SELECT":
        cy.wrap(el).select("VOLVO");
        break;
      }
      cy.wrap(el).should("have.attr", "data-dirty");
      cy.get("form").should("have.attr", "data-dirty");
      cy.get("form").then(el => el[0].reset());
    });

  });
});
