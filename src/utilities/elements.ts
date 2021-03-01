export function isHTMLLinkElement(element: Element): element is HTMLLinkElement {
  return element.nodeName == "A";
}

export function isHTMLFormElement(element: Element): element is HTMLFormElement {
  return element.nodeName == "FORM";
}

export function isHTMLInputElement(element: Element): element is HTMLInputElement {
  return element.nodeName == "INPUT";
}

export function isHTMLImageElement(element: Element): element is HTMLImageElement {
  return element.nodeName == "IMG";
}

export function isElementCheckable(element: Element): element is HTMLInputElement & { checked: boolean } {
  return isHTMLInputElement(element) && (element.type === "radio" || element.type === "checkbox");
}
