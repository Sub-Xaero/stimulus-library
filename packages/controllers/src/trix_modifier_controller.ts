import { BaseController } from "@stimulus-library/utilities";
import { TrixElementsPayload, useTrixModifiers } from "@stimulus-library/mixins";

interface TrixInstallable {
  install: (elements: TrixElementsPayload) => void,
  uninstall: (elements: TrixElementsPayload) => void
  pasteEvent?: (event: TrixPasteEvent) => void
}

interface TrixPasteEventPayload {
  dataTransfer: DataTransfer,
  html: string,
  range: [number, number],
  type: string,
}

interface TrixPasteEvent extends CustomEvent {
  paste: TrixPasteEventPayload;
}

export class TrixModifierController extends BaseController {

  get enabledBehaviours(): TrixInstallable[] {
    const enabled = (datasetProp: string | undefined) => datasetProp !== undefined && datasetProp !== "false";
    const behaviourIfEnabled = (datasetProp: string | undefined, trixInstallable: TrixInstallable) => enabled(datasetProp) ? [trixInstallable] : [];
    return [
      ...(behaviourIfEnabled(this.el.dataset.noBold, this.bold)),
      ...(behaviourIfEnabled(this.el.dataset.noBulletList, this.bulletList)),
      ...(behaviourIfEnabled(this.el.dataset.noCode, this.code)),
      ...(behaviourIfEnabled(this.el.dataset.noHeading, this.heading)),
      ...(behaviourIfEnabled(this.el.dataset.noItalic, this.italic)),
      ...(behaviourIfEnabled(this.el.dataset.noStrikethrough, this.strikethrough)),
      ...(behaviourIfEnabled(this.el.dataset.noLink, this.link)),
      ...(behaviourIfEnabled(this.el.dataset.noIndents, this.indents)),
      ...(behaviourIfEnabled(this.el.dataset.noNumberList, this.numberList)),
      ...(behaviourIfEnabled(this.el.dataset.noQuote, this.quote)),
      ...(behaviourIfEnabled(this.el.dataset.noFileUploads, this.fileUploads)),
    ];
  }

  get bold() {
    return this.formattingHandlers(".trix-button--icon-bold", "bold");
  }

  get bulletList() {
    return this.formattingHandlers(".trix-button--icon-bullet-list", "bullet-list");
  }

  get code() {
    return this.formattingHandlers(".trix-button--icon-code", "code");
  }

  get heading() {
    return this.formattingHandlers(".trix-button--icon-heading-1", "heading");
  }

  get italic() {
    return this.formattingHandlers(".trix-button--icon-italic", "italic");
  }

  get strikethrough() {
    return this.formattingHandlers(".trix-button--icon-strike", "strike");
  }

  get link() {
    return this.formattingHandlers(".trix-button--icon-link", "href");
  }

  get indents() {
    return this.simpleHideShowHandlers(
      [
        ".trix-button--icon-decrease-nesting-level, .trix-button--icon-increase-nesting-level",
        ".trix-button--icon-decrease-nesting-level, .trix-button--icon-increase-nesting-level",
      ].join(", "),
    );
  }

  get numberList() {
    return this.simpleHideShowHandlers(".trix-button--icon-number-list");
  }

  get quote() {
    return this.simpleHideShowHandlers(".trix-button--icon-quote");
  }

  get fileUploads() {
    const selector = ".trix-button-group.trix-button-group--file-tools";
    const preventUploads = (e: Event) => e?.preventDefault();
    const self = this;
    const element = this.el as HTMLElement & { editor: any };
    return {
      install(elements: TrixElementsPayload) {
        self.simpleHideShowHandlers(selector).install(elements);
        self.el.addEventListener("trix-file-accept", preventUploads);
      },
      pasteEvent(event: TrixPasteEvent) {
        const { dataTransfer, html } = event.paste;
        const { editor } = element;
        if (dataTransfer.files.length > 0 || html.includes("<img")) {
          alert("The content you pasted contains images and/or files. File uploads are not supported.");
          editor.undo();
        }
      },
      uninstall(elements: TrixElementsPayload) {
        self.simpleHideShowHandlers(selector).uninstall(elements);
        self.el.removeEventListener("trix-file-accept", preventUploads);
      },
    };
  }

  connect() {
    useTrixModifiers(this);
  }

  install(elements: TrixElementsPayload) {
    this.enabledBehaviours.forEach(behaviour => behaviour.install(elements));
  }

  pasteEvent(event: TrixPasteEvent) {
    this.enabledBehaviours.forEach(behaviour => behaviour.pasteEvent && behaviour.pasteEvent(event));
  }

  uninstall(elements: TrixElementsPayload) {
    this.enabledBehaviours.forEach(behaviour => behaviour.uninstall(elements));
  }

  simpleHideShowHandlers(selector: string) {
    return {
      install: ({ toolbar }: TrixElementsPayload) => this.hideToolbarSelector(toolbar, selector),
      uninstall: ({ toolbar }: TrixElementsPayload) => this.showToolbarSelector(toolbar, selector),
    };
  }

  formattingHandlers(selector: string, trixAttribute: string) {
    const element = this.el as HTMLElement & { editor: any };
    const { editor } = element;
    return {
      install: (elements: TrixElementsPayload) => {
        this.simpleHideShowHandlers(selector).install(elements);
      },
      pasteEvent(pasteEvent: TrixPasteEvent) {
        const { range } = pasteEvent.paste;
        const prevRange = element.editor.getSelectedRange();

        editor.setSelectedRange(range);
        editor.deactivateAttribute(trixAttribute);
        editor.setSelectedRange(prevRange);
      },
      uninstall: (elements: TrixElementsPayload) => {
        this.simpleHideShowHandlers(selector).uninstall(elements);
      },
    };
  }

  showToolbarSelector(toolbar: HTMLElement, selector: string) {
    toolbar.querySelectorAll(selector).forEach(el => (el as HTMLElement).style.display = "");
  }

  hideToolbarSelector(toolbar: HTMLElement, selector: string) {
    toolbar.querySelectorAll(selector).forEach(el => (el as HTMLElement).style.display = "none");
  }

}