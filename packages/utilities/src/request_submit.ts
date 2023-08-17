import { insertHiddenButton } from "./elements";

export function requestSubmit(form: HTMLFormElement) {
  if (form.requestSubmit) {
    form.requestSubmit();
  } else {
    let button: HTMLButtonElement | null = form.querySelector("button[type=\"submit\"]");
    if (!button) {
      button = insertHiddenButton("submit", form, "beforeend");
    }
    button.click();
  }
}

export function requestReset(form: HTMLFormElement) {
  let button: HTMLButtonElement | null = form.querySelector("button[type=\"reset\"]");
  if (!button) {
    button = insertHiddenButton("reset", form, "beforeend");
  }
  button.click();
}