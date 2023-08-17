export function reactive<T extends object>(object: T): T {

  if (object === null || typeof object !== "object") {
    return object;
  }

  for (const property in object) {
    if (Object.getOwnPropertyDescriptor(object, property) == undefined) {
      continue;
    }

    // @ts-ignore
    object[property] = reactive(object[property]);
  }

  return new Proxy(object, {
    get(target, property) {
      // @ts-ignore
      return target[property];
    },
    set(target, property, value) {
      // @ts-ignore
      target[property] = reactive(value);

      return true;
    },
  });
}