export function isHTMLLinkElement(element: Element): element is HTMLLinkElement {
  return element.nodeName == "A";
}
