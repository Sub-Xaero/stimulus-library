import {Controller} from "@hotwired/stimulus";
import {reactive} from "../utilities/reactive";


export type Serializer<T> = {
  deserialize(raw: string): T
  serialize(value: T): string
  isEmpty(value: T): boolean
}

export interface LocalStorageProxy<T> {
  get value(): T;

  set value(value: T);

  read(): T;

  write(value: T): void;

  clear(): void;

  isEmpty(): boolean;
}

export const StorageSerializers: Record<'boolean' | 'object' | 'number' | 'any' | 'string' | 'map' | 'set', Serializer<any>> & { [idx: string]: Serializer<any> } = {
  boolean: {
    deserialize: (v: any) => v === 'true',
    serialize: (v: any) => String(v),
    isEmpty: (v: any) => v === '' || v === null,
  },
  object: {
    deserialize: (v: any) => JSON.parse(v),
    serialize: (v: any) => JSON.stringify(v),
    isEmpty: (v: any) => {
      const values = Object.values(JSON.parse(v));
      return values.length === 0 || values.every(v => v === '' || v === null);
    },
  },
  number: {
    deserialize: (v: any) => Number.parseFloat(v),
    serialize: (v: any) => String(v),
    isEmpty: (v: any) => v === '' || v === null,
  },
  any: {
    deserialize: (v: any) => v,
    serialize: (v: any) => String(v),
    isEmpty: (v: any) => v === '' || v === null,
  },
  string: {
    deserialize: (v: any) => v,
    serialize: (v: any) => String(v),
    isEmpty: (v: any) => v === '' || v === null,
  },
  map: {
    deserialize: (v: any) => new Map(JSON.parse(v)),
    serialize: (v: any) => JSON.stringify(Array.from((v as Map<any, any>).entries())),
    isEmpty: (v: any) => {
      const values = Array.from((v as Map<any, any>).values());
      return values.length === 0 || values.every(v => v === '' || v === null);
    },
  },
  set: {
    deserialize: (v: any) => new Set(JSON.parse(v)),
    serialize: (v: any) => JSON.stringify(Array.from((v as Set<any>).entries())),
    isEmpty: (v: any) => {
      const values = Array.from((v as Set<any>).values());
      return values.length === 0 || values.every(v => v === '' || v === null);
    },
  },
};

export function useLocalStorage<T>(controller: Controller, key: string, defaultValue: T, opts: { writeDefaults: boolean } = {writeDefaults: true}): LocalStorageProxy<T> {
  let type: string;
  let {writeDefaults} = opts;

  if (defaultValue == null) {
    type = 'any';
  } else if (defaultValue instanceof Set) {
    type = 'set';
  } else if (defaultValue instanceof Map) {
    type = 'map';
  } else if (typeof defaultValue === 'boolean') {
    type = 'boolean';
  } else if (typeof defaultValue === 'string') {
    type = 'string';
  } else if (typeof defaultValue === 'object') {
    type = 'object';
  } else if (Array.isArray(defaultValue)) {
    type = 'object';
  } else if (!Number.isNaN(defaultValue)) {
    type = 'number';
  } else {
    type = 'any';
  }

  let data = reactive({
    value: defaultValue,
  });

  let storage = localStorage;
  const serializer = StorageSerializers[type];

  const read = () => {
    const rawValue = storage.getItem(key);
    if (rawValue == null) {
      data.value = defaultValue;
      if (writeDefaults && defaultValue !== null) {
        storage.setItem(key, serializer.serialize(defaultValue));
      }
    } else {
      data.value = serializer.deserialize(rawValue);
    }

    return data.value;
  };

  const write = (value: T) => {
    storage.setItem(key, serializer.serialize(value));
    data.value = value;
  };

  const clear = () => {
    storage.removeItem(key);
    data.value = defaultValue;
    return data.value;
  };

  const isEmpty = (): boolean => {
    let rawValue = storage.getItem(key);
    return serializer.isEmpty(rawValue);
  };

  read();

  return {
    get value() {
      return read();
    },
    set value(value) {
      write(value);
    },
    read,
    clear,
    write,
    isEmpty,
  };

}