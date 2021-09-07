import {Controller} from "stimulus";

export function controllerMethod<C extends Controller>(controller: C, methodName: string): (...args: any[]) => any {
  // @ts-ignore
  const method = controller[methodName];
  if (typeof method == 'function') {
    return method;
  } else {
    return () => {
    };
  }
}