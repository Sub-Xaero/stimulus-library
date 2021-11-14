import {BaseController} from "../utilities/base_controller";
import {installsTrixBehaviour, TrixElementsPayload} from "../mixins/installsTrixBehaviour";

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

  connect() {
    installsTrixBehaviour(this);
  }

  get enabledBehaviours(): TrixInstallable[] {
    let enabled = (datasetProp: string | undefined) => datasetProp !== undefined && datasetProp !== 'false';
    let behaviourIfEnabled = (datasetProp: string | undefined, trixInstallable: TrixInstallable) => enabled(datasetProp) ? [trixInstallable] : [];
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

  install(elements: TrixElementsPayload) {
    this.enabledBehaviours.forEach(behaviour => behaviour.install(elements));
  }

  pasteEvent(event: TrixPasteEvent) {
    this.enabledBehaviours.forEach(behaviour => behaviour.pasteEvent && behaviour.pasteEvent(event));
  }

  uninstall(elements: TrixElementsPayload) {
    this.enabledBehaviours.forEach(behaviour => behaviour.uninstall(elements));
  }

  get bold() {
    return this.formattingHandlers('.trix-button--icon-bold', 'bold');
  }

  get bulletList() {
    return this.formattingHandlers('.trix-button--icon-bullet-list', 'bullet-list');
  }

  get code() {
    return this.formattingHandlers('.trix-button--icon-code', 'code');
  }

  get heading() {
    return this.formattingHandlers('.trix-button--icon-heading-1', 'heading');
  }

  get italic() {
    return this.formattingHandlers('.trix-button--icon-italic', 'italic');
  }

  get strikethrough() {
    return this.formattingHandlers('.trix-button--icon-strike', 'strike');
  }

  get link() {
    return this.formattingHandlers('.trix-button--icon-link', 'href');
  }

  get indents() {
    return this.simpleHideShowHandlers(
      [
        ".trix-button--icon-decrease-nesting-level, .trix-button--icon-increase-nesting-level",
        ".trix-button--icon-decrease-nesting-level, .trix-button--icon-increase-nesting-level",
      ].join(', '),
    );
  }

  get numberList() {
    return this.simpleHideShowHandlers('.trix-button--icon-number-list');
  }

  get quote() {
    return this.simpleHideShowHandlers('.trix-button--icon-quote');
  }

  get fileUploads() {
    let selector = '.trix-button-group.trix-button-group--file-tools';
    let preventUploads = (e: Event) => e?.preventDefault();
    let self = this;
    let element = this.el as HTMLElement & { editor: any };
    return {
      install(elements: TrixElementsPayload) {
        self.simpleHideShowHandlers(selector).install(elements);
        self.el.addEventListener('trix-file-accept', preventUploads);
      },
      pasteEvent(event: TrixPasteEvent) {
        let {dataTransfer, html} = event.paste;
        let {editor} = element;
        if (dataTransfer.files.length > 0 || html.includes('<img')) {
          alert('The content you pasted contains images and/or files. File uploads are not supported.');
          editor.undo();
        }
      },
      uninstall(elements: TrixElementsPayload) {
        self.simpleHideShowHandlers(selector).uninstall(elements);
        self.el.removeEventListener('trix-file-accept', preventUploads);
      },
    };
  }

  simpleHideShowHandlers(selector: string) {
    return {
      install: ({toolbar}: TrixElementsPayload) => this.hideToolbarSelector(toolbar, selector),
      uninstall: ({toolbar}: TrixElementsPayload) => this.showToolbarSelector(toolbar, selector),
    };
  }

  formattingHandlers(selector: string, trixAttribute: string) {
    let element = this.el as HTMLElement & { editor: any };
    let {editor} = element;
    return {
      install: (elements: TrixElementsPayload) => {
        this.simpleHideShowHandlers(selector).install(elements);
      },
      pasteEvent(pasteEvent: TrixPasteEvent) {
        let {range} = pasteEvent.paste;
        let prevRange = element.editor.getSelectedRange();

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
    toolbar.querySelectorAll(selector).forEach(el => (el as HTMLElement).style.display = '');
  }

  hideToolbarSelector(toolbar: HTMLElement, selector: string) {
    toolbar.querySelectorAll(selector).forEach(el => (el as HTMLElement).style.display = 'none');
  }

}