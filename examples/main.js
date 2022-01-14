import './style.scss';
import 'trix/dist/trix.css';
import Trix from 'trix';

window.Trix = Trix;

import { Application } from "stimulus";
import { UpdateDateController } from "./src/helper_controllers/update_date_controller";
import { DemoController } from "./src/helper_controllers/demo_controller";
import { GeolocationController } from "./src/helper_controllers/geolocation_controller";

import {
  AlertController,
  AnchorSpyController,
  AsyncBlockController,
  AutosizeController,
  AutoSubmitFormController,
  BackLinkController,
  CharCountController,
  CheckboxDisableInputsController,
  CheckboxEnableInputsController,
  CheckboxSelectAllController,
  CheckboxXORController,
  ClipboardController,
  ClockController,
  ConfirmController,
  ConfirmNavigationController,
  CountdownController,
  DebugController,
  DetectDirtyController,
  DetectDirtyFormController,
  DisableWithController,
  DismissableController,
  DurationController,
  ElementSaveController,
  EmptyDomController,
  EnableInputsController,
  FallbackImageController,
  FocusStealController,
  FormRcController,
  FormSaveController,
  FullscreenController,
  IntersectionController,
  IntervalController,
  LazyBlockController,
  LightboxImageController,
  LimitedSelectionCheckboxesController,
  LoadBlockController,
  MediaPlayerController,
  NavigateFormErrorsController,
  NestedFormController,
  PasswordConfirmController,
  PasswordPeekController,
  PollBlockController,
  PrefetchController,
  PresenceController,
  PrintButtonController,
  PrintController,
  RemoteFormController,
  ResponsiveIframeBodyController,
  ResponsiveIframeWrapperController,
  ScrollContainerController,
  ScrollIntoFocusController,
  ScrollToBottomController,
  ScrollToController,
  ScrollToTopController,
  SelfDestructController,
  SignalActionController,
  SignalInputController,
  SignalVisibilityController,
  StickyController,
  SyncInputsController,
  TableSortController,
  TableTruncateController,
  TabsController,
  TeleportController,
  TemporaryStateController,
  TimeDistanceController,
  TimeoutController,
  ToggleClassController,
  TreeViewController,
  TrixModifierController,
  TrixStrikethroughController,
  TurboFrameRCController,
  TurboFrameRefreshController,
  UserFocusController,
  ValueWarnController,
  WordCountController,
} from "../src";

const app = Application.start();

app.debug = true;

// Helper controllers
app.register("demo", DemoController);
app.register("geolocation", GeolocationController);
app.register("update-date", UpdateDateController);

// Stimulus-library controllers
app.register("alert", AlertController);
app.register("anchor-spy", AnchorSpyController);
app.register("async-block", AsyncBlockController);
app.register("auto-submit-form", AutoSubmitFormController);
app.register("autosize", AutosizeController);
app.register("back-link", BackLinkController);
app.register("char-count", CharCountController);
app.register("checkbox-disable-inputs", CheckboxDisableInputsController);
app.register("checkbox-enable-inputs", CheckboxEnableInputsController);
app.register("checkbox-select-all", CheckboxSelectAllController);
app.register("checkbox-xor", CheckboxXORController);
app.register("clipboard", ClipboardController);
app.register("clock", ClockController);
app.register("confirm", ConfirmController);
app.register("confirm-navigation", ConfirmNavigationController);
app.register("countdown", CountdownController);
app.register("debug", DebugController);
app.register("detect-dirty", DetectDirtyController);
app.register("detect-dirty-form", DetectDirtyFormController);
app.register("disable-with", DisableWithController);
app.register("dismissable", DismissableController);
app.register("duration", DurationController);
app.register("element-save", ElementSaveController);
app.register("empty-dom", EmptyDomController);
app.register("enable-inputs", EnableInputsController);
app.register("fallback-image", FallbackImageController);
app.register("focus-steal", FocusStealController);
app.register("form-rc", FormRcController);
app.register("form-save", FormSaveController);
app.register("fullscreen", FullscreenController);
app.register("intersection", IntersectionController);
app.register("interval", IntervalController);
app.register("lazy-block", LazyBlockController);
app.register("lightbox-image", LightboxImageController);
app.register("limited-selection-checkboxes", LimitedSelectionCheckboxesController);
app.register("load-block", LoadBlockController);
app.register("media-player", MediaPlayerController);
app.register("navigate-form-errors", NavigateFormErrorsController);
app.register("nested-form", NestedFormController);
app.register("password-confirm", PasswordConfirmController);
app.register("password-peek", PasswordPeekController);
app.register("poll-block", PollBlockController);
app.register("prefetch", PrefetchController);
app.register("presence", PresenceController);
app.register("print", PrintController);
app.register("print-button", PrintButtonController);
app.register("remote-form", RemoteFormController);
app.register("responsive-iframe-body", ResponsiveIframeBodyController);
app.register("responsive-iframe-wrapper", ResponsiveIframeWrapperController);
app.register("signal-action", SignalActionController);
app.register("signal-input", SignalInputController);
app.register("signal-visibility", SignalVisibilityController);
app.register("scroll-container", ScrollContainerController);
app.register("scroll-into-focus", ScrollIntoFocusController);
app.register("scroll-to-bottom", ScrollToBottomController);
app.register("scroll-to", ScrollToController);
app.register("scroll-to-top", ScrollToTopController);
app.register("self-destruct", SelfDestructController);
app.register("sticky", StickyController);
app.register("sync-inputs", SyncInputsController);
app.register("table-sort", TableSortController);
app.register("table-truncate", TableTruncateController);
app.register("tabs", TabsController);
app.register("teleport", TeleportController);
app.register("temporary-state", TemporaryStateController);
app.register("time-distance", TimeDistanceController);
app.register("timeout", TimeoutController);
app.register("toggle-class", ToggleClassController);
app.register("tree-view", TreeViewController);
app.register("trix-modifier", TrixModifierController);
app.register("turbo-frame-rc", TurboFrameRCController);
app.register("turbo-frame-refresh", TurboFrameRefreshController);
app.register("user-focus", UserFocusController);
app.register("value-warn", ValueWarnController);
app.register("word-count", WordCountController);
