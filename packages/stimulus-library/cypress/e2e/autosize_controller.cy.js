describe("Autosize Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/autosize_controller.html");
  });

  it("resizes the textarea as you type", () => {
    cy.get("textarea")
      .invoke("text", "Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses. Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses. Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses. Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses.")
      .trigger("input");

    cy.get("textarea").invoke("outerHeight").then(initialHeight => {
      cy.get("textarea")
        .invoke(
          "text",
          "Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses. Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses. Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses. Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses."
          +
          "Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses. Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses. Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses. Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses.",
        )
        .trigger("input")
        .invoke("outerHeight")
        .should("be.greaterThan", initialHeight);

      cy.get("textarea").clear()
        .invoke("outerHeight")
        .should("be.lessThan", initialHeight);
    });
  });

  it("resizes the textarea as the viewport changes", () => {
    cy.get("textarea")
      .invoke("text", "Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses. Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses. Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses. Guttuss nocere in rugensis civitas! Sunt diatriaes contactus gratis, nobilis peses.")
      .trigger("input");
    cy.viewport("ipad-mini");

    cy.get("textarea").invoke("outerHeight").then(initialHeight => {
      cy.viewport("iphone-x");
      cy.get("textarea")
        .invoke("outerHeight")
        .should("be.greaterThan", initialHeight);

      cy.viewport("macbook-16");
      cy.get("textarea").clear()
        .invoke("outerHeight")
        .should("be.lessThan", initialHeight);
    });
  });
});
