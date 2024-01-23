import { DismissableController } from "./dismissable_controller";
import { useLocalStorage } from "@stimulus-library/mixins";

export class PersistedDismissableController extends DismissableController {

  static values = {
    key: String,
  };

  declare keyValue: string;
  declare readonly hasKeyValue: boolean;

  declare localStorage: ReturnType<typeof useLocalStorage>;

  connect() {
    this.localStorage = useLocalStorage(this, this.keyValue, false, { writeDefaults: false });

    if (this.localStorage.value == true) {
      this.dismiss();
    }
  }

  dismiss() {
    this.localStorage.value = true;
    super.dismiss();
  }

}

export class PersistedRemoveController extends PersistedDismissableController {
}
