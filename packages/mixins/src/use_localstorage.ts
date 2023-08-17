import { Controller } from "@hotwired/stimulus";
import { reactive } from "@stimulus-library/utilities";
import { useEventListener } from "./use_event_listener";


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

export const StorageSerializers: Record<"boolean" | "object" | "number" | "any" | "string" | "map" | "set", Serializer<any>> & {
  [idx: string]: Serializer<any>
} = {
  boolean: {
    deserialize: (v: any) => v === "true",
    serialize: (v: any) => String(v),
    isEmpty: (v: any) => v === "" || v === null,
  },
  object: {
    deserialize: (v: any) => JSON.parse(v),
    serialize: (v: any) => {
      // Change events are triggered with a string value
      if (typeof v === "string") {
        return v;
      } else {
        return JSON.stringify(v);
      }
    },
    isEmpty: (v: any) => {
      const values = Object.values(JSON.parse(v));
      return values.length === 0 || values.every(v => v === "" || v === null);
    },
  },
  number: {
    deserialize: (v: any) => Number.parseFloat(v),
    serialize: (v: any) => String(v),
    isEmpty: (v: any) => v === "" || v === null,
  },
  any: {
    deserialize: (v: any) => v,
    serialize: (v: any) => String(v),
    isEmpty: (v: any) => v === "" || v === null,
  },
  string: {
    deserialize: (v: any) => v,
    serialize: (v: any) => String(v),
    isEmpty: (v: any) => v === "" || v === null,
  },
  map: {
    deserialize: (v: any) => new Map(JSON.parse(v)),
    serialize: (v: any) => JSON.stringify(Array.from((v as Map<any, any>).entries())),
    isEmpty: (v: any) => {
      const values = Array.from((v as Map<any, any>).values());
      return values.length === 0 || values.every(v => v === "" || v === null);
    },
  },
  set: {
    deserialize: (v: any) => new Set(JSON.parse(v)),
    serialize: (v: any) => JSON.stringify(Array.from((v as Set<any>).entries())),
    isEmpty: (v: any) => {
      const values = Array.from((v as Set<any>).values());
      return values.length === 0 || values.every(v => v === "" || v === null);
    },
  },
};

export function useLocalStorage<T>(
  controller: Controller,
  key: string,
  defaultValue?: any,
  opts?: {
    onChange?: ((newValue: any, oldValue: any) => void) | null,
    writeDefaults?: boolean
  },
): LocalStorageProxy<T> {
  let type: string;
  const optsMergedWithDefaults = {
    onChange: null,
    writeDefaults: true,
    ...opts,
  };
  const { writeDefaults } = optsMergedWithDefaults;

  if (defaultValue === null || defaultValue === undefined) {
    type = "any";
  } else if (defaultValue instanceof Set) {
    type = "set";
  } else if (defaultValue instanceof Map) {
    type = "map";
  } else if (typeof defaultValue === "boolean") {
    type = "boolean";
  } else if (typeof defaultValue === "string") {
    type = "string";
  } else if (typeof defaultValue === "object") {
    type = "object";
  } else if (Array.isArray(defaultValue)) {
    type = "object";
  } else if (!Number.isNaN(defaultValue)) {
    type = "number";
  } else {
    type = "any";
  }

  const onChange = optsMergedWithDefaults.onChange?.bind(controller);

  const data = reactive({
    value: defaultValue,
  });

  const storage = localStorage;
  const serializer = StorageSerializers[type];

  const read = () => {
    const rawValue = storage.getItem(key);
    if (rawValue == null) {
      data.value = defaultValue;
      if (writeDefaults && defaultValue !== null && defaultValue !== undefined) {
        storage.setItem(key, serializer.serialize(defaultValue));
      }
    } else {
      data.value = serializer.deserialize(rawValue);
    }

    return data.value;
  };

  const write = (value: any) => {
    storage.setItem(key, serializer.serialize(value));
    if (onChange) {
      onChange(value, data.value);
    }
    data.value = value;
  };

  const clear = () => {
    storage.removeItem(key);
    data.value = defaultValue;
    return data.value;
  };

  const isEmpty = (): boolean => {
    const rawValue = storage.getItem(key);
    return serializer.isEmpty(rawValue);
  };

  read();

  useEventListener(
    controller,
    window,
    "storage",
    (event: StorageEvent) => {
      if (event.key === key) {
        write(event.newValue);
      }
    },
  );

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