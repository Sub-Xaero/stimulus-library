import { BaseController } from "@stimulus-library/utilities";

export class PresenceController extends BaseController {

  static values = { name: String };

  declare nameValue: string;
  declare readonly hasNameValue: boolean;

  get name(): string {
    return this.hasNameValue ? this.nameValue : "";
  }

  get _addedEventName(): string {
    return [this.name, "presence", "added"].filter(el => !!el).join(":");
  }

  get _removedEventName(): string {
    return [this.name, "presence", "removed"].filter(el => !!el).join(":");
  }

  connect() {
    this.dispatchEvent(this.el, this._addedEventName);
  }

  disconnect() {
    this.dispatchEvent(this.el, this._removedEventName);
  }

}
