import {Controller} from "stimulus";


export function useInjectedFragment(controller: Controller, targetElement: HTMLElement, insertPosition: "prepend" | "append", fragment: DocumentFragment) {
  // keep a copy of the lifecycle functions of the controller
  const controllerDisconnect = controller.disconnect.bind(controller);
  let nodes = Array.from(fragment.childNodes);

  let setup = () => {
    if (insertPosition === "prepend") {
      targetElement.insertBefore(fragment, targetElement.firstChild);
    } else {
      targetElement.appendChild(fragment);
    }
  };
  let teardown = () => nodes.forEach(node => node.remove());
  setup();

  Object.assign(controller, {
    disconnect() {
      teardown();
      controllerDisconnect();
    },
  });

  return teardown;
}

export function useInjectedHTML(controller: Controller, targetElement: HTMLElement, insertPosition: "prepend" | "append", html: string) {
  const fragment = document.createRange().createContextualFragment(html);
  return useInjectedFragment(controller, targetElement, insertPosition, fragment);
}

export function useInjectedElement(controller: Controller, targetElement: HTMLElement, insertPosition: "prepend" | "append", element: HTMLElement) {
  const fragment = new DocumentFragment();
  fragment.append(element);
  return useInjectedFragment(controller, targetElement, insertPosition, fragment);
}
