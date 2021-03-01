const smoothSupported = "scrollBehavior" in document.documentElement.style;
let smoothPolyfilled: boolean;

export async function scrollToElement(element: Element, {behavior = "smooth", block = "start", inline = "nearest"}: ScrollIntoViewOptions = {}) {
  if (behavior == "smooth" && !smoothSupported) {
    await polyfillSmooth();
  }
  element.scrollIntoView({behavior, block, inline});
}

async function polyfillSmooth() {
  const {polyfill} = await import(/* webpackChunkName: "smoothscroll-polyfill" */ "smoothscroll-polyfill");
  if (smoothPolyfilled) {
    return;
  }
  smoothPolyfilled = true;
  polyfill();
}

export function getScrollParent(node: HTMLElement | null): HTMLElement | null {
  if (!node) {
    return null;
  }
  const overflowY = getComputedStyle(node).overflowY;
  const isScrollable = overflowY !== "visible" && overflowY !== "hidden";

  if (isScrollable && node.scrollHeight >= node.clientHeight) {
    return node;
  }

  return getScrollParent(node.parentElement) || document.body;
}
