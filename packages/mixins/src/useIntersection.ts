import { Controller } from "@hotwired/stimulus";
import { useMixin } from "./createMixin";

export function useIntersectionObserver(controller: Controller, handler: IntersectionObserverCallback, options?: IntersectionObserverInit) {
  handler = handler.bind(controller);

  let observer: IntersectionObserver | null = new IntersectionObserver(handler, options);
  let teardown = () => {
    observer?.disconnect();
    observer = null;
  };
  let observe = (element: HTMLElement) => observer?.observe(element);
  let unobserve = (element: HTMLElement) => observer?.unobserve(element);

  return {
    observer,
    teardown,
    observe,
    unobserve,
  };
}

export function useIntersection(
  controller: Controller,
  element: HTMLElement,
  appear?: null | ((entry: IntersectionObserverEntry) => void),
  disappear?: null | ((entry: IntersectionObserverEntry) => void),
  options?: IntersectionObserverInit,
) {
  if (appear) {
    appear = appear.bind(controller);
  }
  if (disappear) {
    disappear = disappear.bind(controller);
  }
  let opts = options ?? {};
  let processEntries = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        appear && appear(entry);
      } else {
        disappear && disappear(entry);
      }
    });
  };
  let {observer, observe, unobserve, teardown} = useIntersectionObserver(controller, processEntries, opts);
  let setup = () => observe(element);
  useMixin(controller, setup, teardown);

  return {
    observer,
    observe: () => observe(element),
    unobserve: () => unobserve(element),
    teardown,
  };
}