describe("Word Count Controller", () => {
  beforeEach(() => {
    cy.visit("controllers/word_count_controller.html");
  });

  it("should show the number of words in the textarea", () => {
    cy.get("textarea").clear();
    cy.get("[data-word-count-target=\"output\"]").should("have.text", "0");
    cy.get("textarea").type("Lorem ipsum dolor. ");
    cy.get("[data-word-count-target=\"output\"]").should("have.text", "3");
    cy.get("textarea").type("Lorem ipsum dolor. ");
    cy.get("[data-word-count-target=\"output\"]").should("have.text", "6");
  });

  it("should set an error class when the number of words in the textarea is too high or too low", () => {
    cy.get("textarea").clear();
    cy.get("[data-word-count-target=\"output\"]").should("have.class", "error");

    cy.get("textarea").invoke("val", `
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    `).trigger("input");
    cy.get("[data-word-count-target=\"output\"]").should("not.have.class", "error");

    cy.get("textarea").invoke("val", `
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba. Lorem ipsum dolor. Ubi est clemens magister? Nunquam reperire luba.
    `).trigger("input");
    cy.get("[data-word-count-target=\"output\"]").should("have.class", "error");

  });
});
