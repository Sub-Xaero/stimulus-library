import { Controller } from "@hotwired/stimulus";
import { useMixin } from "./use_mixin";

export function useInjectedFragment(controller: Controller, targetElement: HTMLElement, insertPosition: InsertPosition, fragment: DocumentFragment, options: { cleanup?: boolean } = {}): [ChildNode[], () => void] {
  let nodes = Array.from(fragment.childNodes);

  let setup = () => {
    let parent = targetElement.parentElement;
    if (["beforebegin", "afterend"].includes(insertPosition) && parent == null) {
      throw new Error("Cannot insert beforebegin into a node with no parent");
    }

    switch (insertPosition) {
      case 'beforeend':
        targetElement.append(fragment);
        break;
      case "afterbegin":
        targetElement.prepend(fragment);
        break;
      case "beforebegin":
        parent!.insertBefore(fragment, targetElement);
        break;
      case "afterend":
        parent!.insertBefore(fragment, targetElement);
        break;
    }
  };
  let teardown = options.cleanup ? () => nodes.forEach(node => node.remove()) : () => void 0;

  useMixin(controller, setup, teardown);
  return [nodes, teardown];
}

export function useInjectedHTML(controller: Controller, targetElement: HTMLElement, insertPosition: InsertPosition, html: string, options: { cleanup?: boolean } = {}): [ChildNode[], () => void] {
  const fragment = document.createRange().createContextualFragment(html);
  return useInjectedFragment(controller, targetElement, insertPosition, fragment, options);
}

export function useInjectedElement(controller: Controller, targetElement: HTMLElement, insertPosition: InsertPosition, element: HTMLElement, options: { cleanup?: boolean } = {}): [ChildNode, () => void] {
  const fragment = new DocumentFragment();
  fragment.append(element);
  let [nodes, teardown] = useInjectedFragment(controller, targetElement, insertPosition, fragment, options);
  return [nodes[0], teardown];
}
