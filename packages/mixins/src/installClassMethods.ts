import { Controller } from "@hotwired/stimulus";
import { controllerMethod, pascalCase } from "@stimulus-library/utilities";

export class InstallClassMethodComposableController extends Controller {
  [index: string]: any
}

function addMethodsForClassDefinition(controller: InstallClassMethodComposableController, name: string) {
  let defaultElement = controller.element as HTMLElement;
  let hasClass = (): boolean => controller[`has${pascalCase(name)}Class`] == true;
  let classes = (): string[] => controller[`${name}Classes`];
  let defaultClasses = (): string[] => controllerMethod(controller, `default${pascalCase(name)}Classes`).call(controller) || [];
  let classOrDefault = (): string[] => hasClass() ? classes() : defaultClasses();

  if (controller[`${name}Classes`] == undefined) {
    Object.defineProperty(controller, `${name}Classes`, {
      get: () => hasClass() ? controller[`${name}Class`].split(' ') : defaultClasses(),
    });
  }
  let methods = {
    [`add${pascalCase(name)}Classes`]: (element = defaultElement) => element.classList.add(...classOrDefault()),
    [`remove${pascalCase(name)}Classes`]: (element = defaultElement) => element.classList.remove(...classOrDefault()),
    [`${name}ClassesPresent`]: (element = defaultElement) => classOrDefault().every((klass: string) => element.classList.contains(klass)),
  };
  Object.assign(controller, methods);
}

export function installClassMethods(controller: InstallClassMethodComposableController) {
  // @ts-ignore
  let classes = controller.constructor.classes || [];
  classes.forEach((classDefinition: string) => addMethodsForClassDefinition(controller, classDefinition));
}