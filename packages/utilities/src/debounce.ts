export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false,
  timoutName?: string,
): T {
  timoutName = timoutName || "activeTimeout";
  let timeout: ReturnType<typeof window.setTimeout> | null;
  return function (this: any, ...args: any[]) {
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(this, args);
      }
    };
    const callNow = immediate && !timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
    this[timoutName] = timeout;
    if (callNow) {
      func.apply(this, args);
    }
  } as T;
}