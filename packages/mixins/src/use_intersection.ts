import { Controller } from "@hotwired/stimulus";
import { useMixin } from "./use_mixin";

export function useIntersectionObserver(controller: Controller, handler: IntersectionObserverCallback, options?: IntersectionObserverInit) {
  handler = handler.bind(controller);

  let observer: IntersectionObserver | null = new IntersectionObserver(handler, options);
  const teardown = () => {
    observer?.disconnect();
    observer = null;
  };
  const observe = (element: HTMLElement) => observer?.observe(element);
  const unobserve = (element: HTMLElement) => observer?.unobserve(element);

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
  const opts = options ?? {};
  const processEntries = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        appear && appear(entry);
      } else {
        disappear && disappear(entry);
      }
    });
  };
  const { observer, observe, unobserve, teardown } = useIntersectionObserver(controller, processEntries, opts);
  const setup = () => observe(element);
  useMixin(controller, setup, teardown);

  return {
    observer,
    observe: () => observe(element),
    unobserve: () => unobserve(element),
    teardown,
  };
}