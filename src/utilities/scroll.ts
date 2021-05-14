const smoothSupported = "scrollBehavior" in document.documentElement.style;
let smoothPolyfilled: boolean;

export async function scrollToElement(element: Element, {behavior = "smooth", block = "start", inline = "nearest"}: ScrollIntoViewOptions = {}) {
  if (behavior == "smooth" && !smoothSupported) {
    await polyfillSmooth();
  }
  element.scrollIntoView({behavior, block, inline});
}

export async function scrollAbsoluteTop(element: Window | Element, {behavior = "smooth"}: ScrollOptions = {}) {
  if (behavior == "smooth" && !smoothSupported) {
    await polyfillSmooth();
  }
  element.scrollTo({top: 0, left: 0, behavior});
}

export async function scrollAbsoluteBottom(element: Window | Element, {behavior = "smooth"}: ScrollOptions = {}) {
  if (behavior == "smooth" && !smoothSupported) {
    await polyfillSmooth();
  }
  if (element == window) {
    element.scrollTo({top: document.body.scrollHeight, left: 0, behavior});
  } else {
    element.scrollTo({top: (element as Element).scrollHeight, left: 0, behavior});
  }
}

async function polyfillSmooth() {
  const {polyfill} = await import(/* webpackChunkName: "smoothscroll-polyfill" */ "smoothscroll-polyfill");
  if (smoothPolyfilled) {
    return;
  }
  smoothPolyfilled = true;
  polyfill();
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
