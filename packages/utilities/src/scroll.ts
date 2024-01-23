export async function scrollToElement(element: Element, { behavior = "smooth", block = "start", inline = "nearest" }: ScrollIntoViewOptions = {}) {
  element.scrollIntoView({ behavior, block, inline });
}

export async function scrollAbsoluteTop(element: Window | Element, { behavior = "smooth" }: ScrollOptions = {}) {
  element.scrollTo({ top: 0, left: 0, behavior });
}

export async function scrollAbsoluteBottom(element: Window | Element, { behavior = "smooth" }: ScrollOptions = {}) {
  if (element == window) {
    element.scrollTo({ top: document.body.scrollHeight, left: 0, behavior });
  } else {
    element.scrollTo({ top: (element as Element).scrollHeight, left: 0, behavior });
  }
}

export async function scrollAbsoluteLeft(element: Window | Element, { behavior = "smooth" }: ScrollOptions = {}) {
  element.scrollTo({ left: 0, behavior });
}

export async function scrollAbsoluteRight(element: Window | Element, { behavior = "smooth" }: ScrollOptions = {}) {
  if (element == window) {
    element.scrollTo({ left: document.body.scrollWidth, behavior });
  } else {
    element.scrollTo({ left: (element as Element).scrollWidth, behavior });
  }
}

export async function scrollUp(element: Window | Element, amount: number, { behavior = "smooth" }: ScrollOptions = {}) {
  element.scrollBy({ top: -amount, left: 0, behavior });
}

export async function scrollDown(element: Window | Element, amount: number, { behavior = "smooth" }: ScrollOptions = {}) {
  element.scrollBy({ top: amount, left: 0, behavior });
}

export async function scrollLeft(element: Window | Element, amount: number, { behavior = "smooth" }: ScrollOptions = {}) {
  element.scrollBy({ top: 0, left: -amount, behavior });
}

export async function scrollRight(element: Window | Element, amount: number, { behavior = "smooth" }: ScrollOptions = {}) {
  element.scrollBy({ top: 0, left: amount, behavior });
}

export function getScrollParent(node: HTMLElement | null): Window | HTMLElement | null {
  if (!node) {
    return null;
  }

  if (node == document.body) {
    return window;
  }

  const overflowY = getComputedStyle(node).overflowY;
  const isScrollable = overflowY !== "visible" && overflowY !== "hidden";

  if (isScrollable && node.scrollHeight >= node.clientHeight) {
    return node;
  }

  return getScrollParent(node.parentElement) || document.body;
}
