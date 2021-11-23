export function wrapArray<T>(x: T | Array<T>): Array<T> {
  return Array.isArray(x) ? x : [x];
}