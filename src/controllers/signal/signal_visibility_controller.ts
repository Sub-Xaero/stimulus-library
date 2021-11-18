import {BaseController} from "../../utilities/base_controller";
import {EventBus} from "../../utilities/event_bus";
import {SignalPayload} from "./signal_input_controller";

export class SignalVisibilityController extends BaseController {

  static values = {
    name: String,
    show: String,
  };

  static classes = ['hide'];

  declare nameValue: string;
  declare showValue: string;
  declare readonly hideClass: string;
  declare readonly hasHideClass: boolean;

  get _predicates(): Array<(val: string | number) => boolean> {
    let expressionString = this.showValue.replaceAll(" ", "").trim();

    let andExpression = expressionString.includes("&&");
    let orExpression = expressionString.includes("||");
    let groupings = expressionString.includes("(") || expressionString.includes(")");

    if (andExpression && orExpression) {
      throw new Error("Cannot have both && and || in the same expression.");
    }
    if (groupings) {
      throw new Error("Cannot have logical groupings `(>3 && <= 9) || (>1 && <2)` in the expression. Only supports simple expressions like  `>1 && <3`");
    }

    let expressions = expressionString.split(andExpression ? "&&" : "||");
    if (andExpression) {
      return expressions.map(ex => this._predicateForExpression(ex));
    } else if (orExpression) {
      return expressions.map(ex => this._predicateForExpression(ex));
    } else {
      return [this._predicateForExpression(expressionString)];
    }
  }

  get _hideClasses(): string[] {
    return this.hideClass.split(' ');
  }

  get _defaultHideClasses(): string[] {
    return ["hide"];
  }

  get _eventName(): string {
    return `signal:value:${this.nameValue}`;
  }

  _predicateForExpression(expression: string): (val: string | number) => boolean {
    let operators = [">=", "<=", "==", "!=", ">", "<"];
    let operator = operators.find(part => expression.includes(part));
    if (!operator) {
      throw new Error(`Could not find operator in expression: ${expression}`);
    }
    let expressionValue: string | number = expression.split(operator)[1];
    let isNumber = /^-?[0-9]\d*(\.\d+)?$/.test(expressionValue);
    expressionValue = isNumber ? parseFloat(expressionValue) : expressionValue;

    let notEmpty = (signalValue: string | number) => signalValue !== "";

    switch (operator) {
      case ">":
        return (signalValue: string | number) => isNumber && notEmpty(signalValue) && signalValue > expressionValue;
      case "<":
        return (signalValue: string | number) => isNumber && notEmpty(signalValue) && signalValue < expressionValue;
      case ">=":
        return (signalValue: string | number) => isNumber && notEmpty(signalValue) && signalValue >= expressionValue;
      case "<=":
        return (signalValue: string | number) => isNumber && notEmpty(signalValue) && signalValue <= expressionValue;
      case "==":
        return (signalValue: string | number) => notEmpty(signalValue) && signalValue == expressionValue;
      case "!=":
        return (signalValue: string | number) => notEmpty(signalValue) && signalValue != expressionValue;
      default:
        throw new Error(`Unknown operator ${operator}`);
    }
  }

  initialize() {
    this._onSignal = this._onSignal.bind(this);
  }

  connect() {
    EventBus.on(this._eventName, this._onSignal);
  }

  _onSignal(payload: SignalPayload) {
    let value = payload.value;
    if (this.showValue == "default") {
      if (value == "") {
        this._removeHideClasses(this.el);
      } else {
        this._addHideClasses(this.el);
      }
      return;
    }
    if (this._predicates.every(predicate => predicate(value))) {
      this._removeHideClasses(this.el);
    } else {
      this._addHideClasses(this.el);
    }
  }

  private _addHideClasses(el: HTMLElement = this.el) {
    if (this.hasHideClass) {
      el.classList.add(...this._hideClasses);
    } else {
      el.classList.add(...this._defaultHideClasses);
    }
  }

  private _removeHideClasses(el: HTMLElement = this.el) {
    if (this.hasHideClass) {
      el.classList.remove(...this._hideClasses);
    } else {
      el.classList.remove(...this._defaultHideClasses);
    }
  }

}