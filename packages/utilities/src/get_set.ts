// The following code is extracted and modified from lodash v4.17.21
// Original copyright and license information is below.
//
// The MIT License
//
// Copyright JS Foundation and other contributors <https://js.foundation/>
//
// Based on Underscore.js, copyright Jeremy Ashkenas,
// DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
//
// This software consists of voluntary contributions made by many
// individuals. For exact contribution history, see the revision history
// available at https://github.com/lodash/lodash
//
// The following license applies to all parts of this software except as
// documented below:
//
// ====
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// ====
//
// Copyright and related rights for sample code are waived via CC0. Sample
// code is defined as all source code displayed within the prose of the
// documentation.
//
// CC0: http://creativecommons.org/publicdomain/zero/1.0/
//
// ====

/** Used to match property names within property paths. */
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const reIsPlainProp = /^\w*$/;
const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const reIsUint = /^(?:0|[1-9]\d*)$/;
const reEscapeChar = /\\(\\)?/g;
const symbolTag = "[object Symbol]";
const hasOwnProperty = Object.prototype.hasOwnProperty;
const isArray = Array.isArray;
const symbolProto = Symbol ? Symbol.prototype : undefined;
// const symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
const symbolToString = symbolProto ? symbolProto.toString : undefined;

const INFINITY = 1 / 0;
const MAX_SAFE_INTEGER = 9007199254740991;
// const MAX_INTEGER = 1.7976931348623157e+308;
// const NAN = 0 / 0;

function arrayMap<T>(array: T[] | null, iteratee: (value: T, index: number, array: T[]) => any): any[] {
  let index = -1;
  const length = array == null ? 0 : array.length;
  const result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array![index], index, array!);
  }
  return result;
}

function baseToString(value: any): string {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == "string") {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  const result = (value + "");
  return (result == "0" && (1 / value) == -INFINITY) ? "-0" : result;
}

function toString(value: any): string {
  return value == null ? "" : baseToString(value);
}

export function stringToPath(str: string): string[] {
  const result = [];
  if (str.charCodeAt(0) === 46 /* . */) {
    result.push("");
  }
  // @ts-ignore
  str.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : (number || match));
  });
  return result;
}

function defineProperty<T extends object>(object: T, key: any, value: any): T {
  // @ts-ignore
  object[key] = value;
  return object;
}

function castPath(value: any, object: object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

function toKey(value: any): string | symbol {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  const result = (value + "");
  return (result == "0" && (1 / value) == -Infinity) ? "-0" : result;
}

function isKey<T extends object>(value: any, object: T): value is keyof T {
  if (isArray(value)) {
    return false;
  }
  const type = typeof value;
  if (type == "number" || type == "boolean" ||
    value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

function isObjectLike<T>(value: T): boolean {
  return value != null && typeof value == "object";
}

function isSymbol<T>(value: T): boolean {
  return typeof value == "symbol" ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

function baseGetTag<T>(value: T): string {
  // @ts-ignore
  return objectToString.call(value);
}

function objectToString<T>(value: T): string {
  return objectProto.toString.call(value);
}

const objectProto = Object.prototype;

function baseGet(object: object, path: string): any {
  const castedPath = castPath(path, object);

  let index = 0;
  const length = castedPath.length;

  while (object != null && index < length) {
    // @ts-ignore
    object = object[toKey(castedPath[index++])];
  }
  return (index && index == length) ? object : undefined;
}

function isObject<T>(value: T): boolean {
  const type = typeof value;
  return value != null && (type == "object" || type == "function");
}

function isIndex<T>(value: T, length: number | null = null): boolean {
  const type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  // @ts-ignore
  return !!length && (type == "number" || (type != "symbol" && reIsUint.test(value))) && (value > -1 && value % 1 == 0 && value < length);
}

function eq(value: any, other: any): boolean {
  return value === other || (value !== value && other !== other);
}

function assignValue<T extends object>(object: T, key: any, value: any) {
  // @ts-ignore
  const objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
    (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

function baseAssignValue<T extends object>(object: T, key: any, value: any) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true,
    });
  } else {
    // @ts-ignore
    object[key] = value;
  }
}


function baseSet<T extends object>(object: T, path: string, value: any) {
  if (!isObject(object)) {
    return object;
  }
  const castedPath = castPath(path, object);

  let index = -1;
  const length = castedPath.length;
  const lastIndex = length - 1;

  let nested = object;
  while (nested != null && ++index < length) {
    const key = toKey(castedPath[index]);
    let newValue = value;

    if (index != lastIndex) {
      // @ts-ignore
      const objValue = nested[key];
      newValue = isObject(objValue)
        ? objValue
        : (isIndex(castedPath[index + 1]) ? [] : {});
    }
    assignValue(nested, key, newValue);
    // @ts-ignore
    nested = nested[key];
  }
  return object;
}

export function get<T extends object>(object: T, path: string, defaultValue: any = null): any {
  const result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

export function set<T extends object>(object: T, path: string, value: any): any {
  return object == null ? object : baseSet(object, path, value);
}
