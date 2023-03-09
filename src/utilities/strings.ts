export function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function lowerFirst(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function camelCase(str) {
  return lowerFirst(
    str.replace(/[-_\s]([A-Za-z])/g, (g) => g[1].toUpperCase() + g.slice(2)),
  );
}

export function pascalCase(str: string): string {
  return upperFirst(
    camelCase(str),
  );
}
