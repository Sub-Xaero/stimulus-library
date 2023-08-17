describe("Character Count Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/char_count_controller.html");
  });

  it("should show the number of characters in the textarea", () => {
    cy.get("textarea").clear();
    cy.get("[data-char-count-target=\"output\"]").should("have.text", "0");
    cy.get("textarea").type("Lorem ipsum dolor");
    cy.get("[data-char-count-target=\"output\"]").should("have.text", "17");
    cy.get("textarea").type("Lorem ipsum dolor");
    cy.get("[data-char-count-target=\"output\"]").should("have.text", "34");
  });

  it("should set an error class when the number of characters in the textarea is too high or too low", () => {
    cy.get("textarea").clear();
    cy.get("[data-char-count-target=\"output\"]").should("have.class", "error");
    cy.get("textarea")
      .invoke("val", "Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.")
      .trigger("input");
    cy.get("[data-char-count-target=\"output\"]").should("not.have.class", "error");

    cy.get("textarea").invoke("val", `
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    `).trigger("input");
    cy.get("[data-char-count-target=\"output\"]").should("have.class", "error");

  });
});
