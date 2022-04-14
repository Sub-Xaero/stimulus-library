import camelCase from "lodash-es/camelCase";
import upperFirst from "lodash-es/upperFirst";

export function pascalCase(str: string): string {
  return upperFirst(
    camelCase(str),
  );
}
