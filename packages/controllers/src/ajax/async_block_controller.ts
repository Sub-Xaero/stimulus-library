import { LoadBlockController } from "./load_block_controller";

export class AsyncBlockController extends LoadBlockController {

  static targets = ["replace"];
  static values = {
    endpoint: String,
    errorMessage: String,
    selector: String,
    maxRetries: Number,
  };

  declare readonly replaceTarget: HTMLElement;
  declare readonly hasReplaceTarget: boolean;
  declare readonly endpointValue: string;

  declare readonly hasErrorMessageValue: boolean;
  declare readonly errorMessageValue: string;

  get _errorMessage(): string {
    return this.hasErrorMessageValue ? this.errorMessageValue : "This content failed to load";
  }

  // This is a simple controller to load a block of content when the page loads.
  // It should be used to give a quick initial response before calling out to an
  // an AJAX endpoint to do some expensive work.
  async connect() {
    await this.loadContent();
  }

}
