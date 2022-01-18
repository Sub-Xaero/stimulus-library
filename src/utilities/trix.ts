
export interface TrixAttribute {
  tagName?: string;
  groupTagName?: string;
  parser?: (element: Element) => any;
  parse?: boolean;
  inheritable?: boolean;
  nestable?: boolean;
  style?: {
    [key: string]: string;
  };
}

export interface TrixTextAttribute extends TrixAttribute {
}

export interface TrixBlockAttribute extends TrixAttribute {
  terminal?: boolean;
  breakOnReturn?: boolean;
  group?: boolean;

}

export interface Trix {
  VERSION: string;

  config: {
    textAttributes: {
      [key: string]: TrixTextAttribute;
    };
    blockAttributes: {
      [key: string]: TrixBlockAttribute;
    };
    undoInterval: number;
    toolbar: {
      getDefaultHTML(): string;
    }
  }
}

export function getTrix(): Trix {
  // @ts-ignore
  if (window.Trix == undefined) {
    throw new Error("Cannot access the global Trix instance. Please set `window.Trix` to point to your imported Trix instance.");
  }
  // @ts-ignore
  return window.Trix;
}
