describe("ClipboardController", () => {
  let writeText;

  beforeEach(() => {
    cy.visit("controllers/clipboard_controller.html", {
      onBeforeLoad(win) {
        writeText = cy.stub().resolves();
        Object.defineProperty(win.navigator, "clipboard", { value: { writeText }, configurable: true });
      },
    });
  });

  it("writes the source value to the clipboard", () => {
    cy.get(".clipboard-button").click().then(() => {
      expect(writeText).to.have.been.calledWith("1234");
    });
  });

  it("dispatches clipboard:copied once the write succeeds", () => {
    cy.get("[data-controller='clipboard']").then(($el) => {
      const copied = cy.stub();
      $el[0].addEventListener("clipboard:copied", copied);
      cy.get(".clipboard-button").click().then(() => {
        expect(copied).to.have.been.calledOnce;
      });
    });
  });

  it("dispatches clipboard:copy-failed and claims nothing when the write is refused", () => {
    cy.get("[data-controller='clipboard']").then(($el) => {
      writeText.rejects(new Error("denied"));
      const copied = cy.stub();
      const failed = cy.stub();
      $el[0].addEventListener("clipboard:copied", copied);
      $el[0].addEventListener("clipboard:copy-failed", failed);
      cy.get(".clipboard-button").click().then(() => {
        expect(copied).not.to.have.been.called;
        expect(failed).to.have.been.calledOnce;
      });
    });
  });

  it("removes the fallback target when the Clipboard API is available", () => {
    cy.get("[data-clipboard-target='fallback']").should("not.exist");
    cy.get("[data-clipboard-target='copy']").should("exist");
  });
});
