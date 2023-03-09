export interface TurboFrame extends HTMLElement {
  nodeName: "TURBO-FRAME";
  src: string;
}

export function isTurboFrame(element: HTMLElement): element is TurboFrame {
  return element.nodeName == "TURBO-FRAME";
}
