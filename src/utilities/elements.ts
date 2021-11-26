export function isHTMLLinkElement(element: Element): element is HTMLLinkElement {
  return element.nodeName == "LINK";
}

export function isHTMLAnchorElement(element: Element): element is HTMLAnchorElement {
  return element.nodeName == "A";
}

export function isHTMLFormElement(element: Element): element is HTMLFormElement {
  return element.nodeName == "FORM";
}

export function isHTMLInputElement(element: Element): element is HTMLInputElement {
  return element.nodeName == "INPUT";
}

export function isHTMLTextAreaElement(element: Element): element is HTMLTextAreaElement {
  return element.nodeName == "TEXTAREA";
}

export function isHTMLButtonElement(element: Element): element is HTMLButtonElement {
  return element.nodeName == "BUTTON";
}

export function isHTMLSelectElement(element: Element): element is HTMLSelectElement {
  return element.nodeName == "SELECT";
}

export function isHTMLImageElement(element: Element): element is HTMLImageElement {
  return element.nodeName == "IMG";
}

export function isElementCheckable(element: Element): element is HTMLInputElement & { checked: boolean } {
  return isHTMLInputElement(element) && (element.type === "radio" || element.type === "checkbox");
}

export function isTypeOfFormInputElement(element: Element): element is (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
  return isHTMLInputElement(element) || isHTMLSelectElement(element) || isHTMLTextAreaElement(element);
}

export function createHiddenButton(type: "submit" | "reset"): HTMLButtonElement {
  let button = document.createElement('button');
  button.type = type;
  button.style.display = 'none';
  button.dataset.sythentic = 'true';
  return button;
}

export function createHiddenInput(name: string, value: string): HTMLInputElement {
  let input = document.createElement('input');
  input.type = 'hidden';
  input.name = name;
  input.value = value;
  return input;
}

export function insertElement<T extends Element>(targetElement: Element, insertPosition: InsertPosition, element: T): T {
  let createdElement = targetElement.insertAdjacentElement(insertPosition, element);
  if (!createdElement) {
    throw new Error(`Failed to insert element ${element.nodeName} into ${targetElement.nodeName}`);
  }
  return createdElement as T;
}

export function insertHiddenInput(name: string, value: string, targetElement: Element, insertPosition: InsertPosition): HTMLInputElement {
  return insertElement(targetElement, insertPosition, createHiddenInput(name, value));
}

export function insertHiddenButton(type: "submit" | "reset", targetElement: Element, insertPosition: InsertPosition): HTMLButtonElement {
  return insertElement(targetElement, insertPosition, createHiddenButton(type));
}

export function getAllRadiosInGroup(radio: HTMLInputElement): HTMLInputElement[] {
  let parent = radio.form || document;
  return Array.from(parent.querySelectorAll(`input[type="radio"][name="${radio.name}"]`));
}

export function getOtherRadiosInGroup(radio: HTMLInputElement): HTMLInputElement[] {
  return getAllRadiosInGroup(radio).filter((r) => r !== radio);
}