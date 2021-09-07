import {BaseController} from "../utilities/base_controller";
import {installsTrixBehaviour, TrixElementsPayload} from "../mixins/installsTrixBehaviour";

interface TrixInstallable {
  install: (elements: TrixElementsPayload) => void,
  uninstall: (elements: TrixElementsPayload) => void
}

export default class TrixModifierController extends BaseController {

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

  uninstall(elements: TrixElementsPayload) {
    this.enabledBehaviours.forEach(behaviour => behaviour.uninstall(elements));
  }

  get bold() {
    return this.simpleHideShowHandlers('.trix-button--icon-bold');
  }

  get bulletList() {
    return this.simpleHideShowHandlers('.trix-button--icon-bullet-list');
  }

  get code() {
    return this.simpleHideShowHandlers('.trix-button--icon-code');
  }

  get heading() {
    return this.simpleHideShowHandlers('.trix-button--icon-heading-1');
  }

  get italic() {
    return this.simpleHideShowHandlers('.trix-button--icon-italic');
  }

  get strikethrough() {
    return this.simpleHideShowHandlers('.trix-button--icon-strike');
  }

  get link() {
    return this.simpleHideShowHandlers('.trix-button--icon-link');
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
    return {
      install(elements: TrixElementsPayload) {
        self.simpleHideShowHandlers(selector).install(elements);
        self.el.addEventListener('trix-file-accept', preventUploads);
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

  showToolbarSelector(toolbar: HTMLElement, selector: string) {
    toolbar.querySelectorAll(selector).forEach(el => (el as HTMLElement).style.display = '');
  }

  hideToolbarSelector(toolbar: HTMLElement, selector: string) {
    toolbar.querySelectorAll(selector).forEach(el => (el as HTMLElement).style.display = 'none');
  }

}