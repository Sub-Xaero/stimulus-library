import {Controller} from "stimulus";
import {capitalize} from "lodash-es";
import {controllerMethod} from "../utilities/stimulus";

export class InstallClassMethodComposableController extends Controller {
  [index: string]: any
}

function methodsForClassDefinition(controller: InstallClassMethodComposableController, name: string) {
  let methods = {
    [`add${capitalize(name)}Classes`](element: HTMLElement = controller.element as HTMLElement) {
      let klasses = controller[`has${capitalize(name)}Class`]
        ? controller[`${capitalize(name)}Classes`]
        : controllerMethod(controller, `default${capitalize(name)}Classes`).call(controller) || [];
      element.classList.add(...klasses);
    },
    [`remove${capitalize(name)}Classes`](element: HTMLElement = controller.element as HTMLElement) {
      let klasses = controller[`has${capitalize(name)}Class`]
        ? controller[`${capitalize(name)}Classes`]
        : controllerMethod(controller, `default${capitalize(name)}Classes`).call(controller) || [];
      element.classList.remove(...klasses);
    },
  };

  if (controller[`${name}Classes`] == undefined) {
    Object.defineProperty(controller, `${name}Classes`, {
      get(): string[] {
        return controller[`${capitalize(name)}Class`].split(' ');
      },
    });
  }

  return methods;
}

export function installClassMethods(controller: InstallClassMethodComposableController) {
  // @ts-ignore
  let classes = controller.constructor.classes || [];

  classes.forEach(
    (classDefinition: string) => Object.assign(controller, methodsForClassDefinition(controller, classDefinition)),
  );
}