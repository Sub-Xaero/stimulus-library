import {Controller} from "stimulus";
import {capitalize} from "lodash-es";
import {controllerMethod} from "../utilities/stimulus";

export class InstallClassMethodComposableController extends Controller {
  [index: string]: any
}

function addMethodsForClassDefinition(controller: InstallClassMethodComposableController, name: string) {
  let defaultElement = controller.element as HTMLElement;
  let hasClass = (): boolean => controller[`has${capitalize(name)}Class`] == true;
  let classes = (): string[] => controller[`${name}Classes`];
  let defaultClasses = (): string[] => controllerMethod(controller, `default${capitalize(name)}Classes`).call(controller) || [];
  let classOrDefault = (): string[] => hasClass() ? classes() : defaultClasses();

  if (controller[`${name}Classes`] == undefined) {
    Object.defineProperty(controller, `${name}Classes`, {
      get: () => controller[`${name}Class`].split(' '),
    });
  }
  Object.assign(controller, {
    [`add${capitalize(name)}Classes`]: (element = defaultElement) => element.classList.add(...classOrDefault()),
    [`remove${capitalize(name)}Classes`]: (element = defaultElement) => element.classList.remove(...classOrDefault()),
    [`${name}ClassesPresent`]: (element = defaultElement) => classOrDefault().every((klass: string) => element.classList.contains(klass)),
  });
}

export function installClassMethods(controller: InstallClassMethodComposableController) {
  // @ts-ignore
  let classes = controller.constructor.classes || [];
  classes.forEach((classDefinition: string) => addMethodsForClassDefinition(controller, classDefinition));
}