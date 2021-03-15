export function isTurboFrame(element: HTMLElement): element is TurboFrame {
  return element.nodeName == "TURBO-FRAME";
}
