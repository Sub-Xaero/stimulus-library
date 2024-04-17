import { BaseController } from "stimulus-library";

export class DemoController extends BaseController {
  static targets = ["output"];

  connect() {
    console.log("Demo");
  }

  addElement() {
    let el = document.createElement("p");
    el.classList.add("task");
    el.innerText = "Foo";
    this.outputTarget.appendChild(el);
  }

  addOddElement() {
    let el = document.createElement("p");
    el.innerText = "This element is not counted";
    this.outputTarget.appendChild(el);
  }

  removeElement() {
    if (this.outputTarget.children.length > 0) {
      this.outputTarget.children[0].remove();
    }
  }

  removeElements() {
    this.outputTarget.innerHTML = "";
  }
}
