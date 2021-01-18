import {isDirty} from "../shared/detect_dirty_controller";

if (isDirty(element)) {
  console.log("Keep your hands off");
  element.controller.restore();
}
