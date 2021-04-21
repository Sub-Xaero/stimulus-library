import { Application } from "stimulus";
import {
  AsyncBlockController,
  AutosizeController,
  AutoSubmitFormController,
  CharCountController,
  CheckboxSelectAllController,
  ClipboardController,
  ConfirmController,
  ConfirmNavigationController,
  DebugController,
  DetectDirtyController,
  DetectDirtyFormController,
  DisableInputsController,
  DisableWithController,
  DismissableController,
  ElementSaveController,
  EmptyDomController,
  EnableInputsController,
  FallbackImageController,
  FormRcController,
  FormSaveController,
  LazyBlockController,
  LightboxImageController,
  LimitedSelectionCheckboxesController,
  PasswordConfirmController,
  PasswordPeekController,
  ResponsiveIframeBodyController,
  ScrollIntoFocusController,
  ScrollToBottomController,
  ScrollToTopController,
  SelfDestructController,
  StickyController,
  TableTruncateController,
  TeleportController,
  ToggleClassController,
  WordCountController,
} from "stimulus-library/stimulus-library.module";

const application = Application.start();

application.debug = true;

application.register("async-block", AsyncBlockController);
application.register("auto-submit-form", AutoSubmitFormController);
application.register("autosize", AutosizeController);
application.register("char-count", CharCountController);
application.register("checkbox-select-all", CheckboxSelectAllController);
application.register("clipboard", ClipboardController);
application.register("confirm", ConfirmController);
application.register("confirm-navigation", ConfirmNavigationController);
application.register("debug", DebugController);
application.register("detect-dirty", DetectDirtyController);
application.register("detect-dirty-form", DetectDirtyFormController);
application.register("disable-inputs", DisableInputsController);
application.register("disable-with", DisableWithController);
application.register("dismissable", DismissableController);
application.register("empty-dom", EmptyDomController);
application.register("element-save", ElementSaveController);
application.register("enable-inputs", EnableInputsController);
application.register("fallback-image", FallbackImageController);
application.register("form-rc", FormRcController);
application.register("form-save", FormSaveController);
application.register("lazy-block", LazyBlockController);
application.register("lightbox-image", LightboxImageController);
application.register("limited-selection-checkboxes", LimitedSelectionCheckboxesController);
application.register("password-confirm", PasswordConfirmController);
application.register("password-peek", PasswordPeekController);
application.register("responsive-iframe", ResponsiveIframeBodyController);
application.register("scroll-into-focus", ScrollIntoFocusController);
application.register("scroll-to-bottom", ScrollToBottomController);
application.register("scroll-to-top", ScrollToTopController);
application.register("self-destruct", SelfDestructController);
application.register("sticky", StickyController);
application.register("table-truncate", TableTruncateController);
application.register("table-sort", TableSortController);
application.register("teleport", TeleportController);
application.register("toggle-class", ToggleClassController);
application.register("word-count", WordCountController);
