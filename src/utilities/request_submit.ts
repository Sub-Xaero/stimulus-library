import {createHiddenButton} from "./elements";

export function requestSubmit(form: HTMLFormElement) {
  if (form.requestSubmit) {
    form.requestSubmit();
  } else {
    let button: HTMLButtonElement | null = form.querySelector('button[type="submit"]');
    if (!button) {
      button = button = createHiddenButton("submit");
      form.insertAdjacentElement('beforeend', button);
    }
    button.click();
  }
}

export function requestReset(form: HTMLFormElement) {
  let button: HTMLButtonElement | null = form.querySelector('button[type="reset"]');
  if (!button) {
    button = createHiddenButton("reset");
    form.insertAdjacentElement('beforeend', button);
  }
  button.click();
}