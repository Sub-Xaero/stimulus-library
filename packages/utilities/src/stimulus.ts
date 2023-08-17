import { Controller } from "@hotwired/stimulus";

export function controllerMethod<C extends Controller>(controller: C, methodName: string): (...args: any[]) => any {
  // @ts-ignore
  const method = controller[methodName];
  if (typeof method == "function") {
    return method;
  } else if (method != undefined) {
    return () => method;
  } else {
    return () => void 0;
  }
}