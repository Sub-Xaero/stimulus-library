module.exports = {
  someSidebar: {
    "Getting Started": [
      "installation",
      "treeshaking",
      "debugging",
    ],
    Controllers: [
      {
        "AJAX Controllers": [
          "controllers/AsyncBlockController",
          "controllers/LazyBlockController",
          "controllers/LoadBlockController",
          "controllers/PollBlockController",
        ],
      },
      {
        "Extendable Controllers": [
          "controllers/BaseController",
          "controllers/EphemeralController",
        ],
      },
      {
        "Form Controllers": [
          "controllers/AutoSubmitFormController",
          "controllers/AutosizeController",
          "controllers/CharCountController",
          "controllers/CheckboxDisableInputsController",
          "controllers/CheckboxEnableInputsController",
          "controllers/CheckboxSelectAllController",
          "controllers/DetectDirtyController",
          "controllers/DetectDirtyFormController",
          "controllers/FocusStealController",
          "controllers/FormRcController",
          "controllers/FormSaveController",
          "controllers/LimitedSelectionCheckboxesController",
          "controllers/NavigateFormErrorsController",
          "controllers/NestedFormController",
          "controllers/PasswordConfirmController",
          "controllers/PasswordPeekController",
          "controllers/SyncInputsController",
          "controllers/ValueWarnController",
          "controllers/WordCountController",
        ],
      },
      {
        "General Controllers": [
          "controllers/AnchorSpyController",
          "controllers/BackLinkController",
          "controllers/ClipboardController",
          "controllers/ConfirmController",
          "controllers/ConfirmNavigationController",
          "controllers/DisableWithController",
          "controllers/DismissableController",
          "controllers/ElementSaveController",
          "controllers/EmptyDomController",
          "controllers/PrefetchController",
          "controllers/PrintButtonController",
          "controllers/ResponsiveIframeController",
          "controllers/SelfDestructController",
          "controllers/StickyController",
          "controllers/TeleportController",
          "controllers/TemporaryStateController",
          "controllers/ToggleClassController",
        ],
      },
      {
        "Hotwire/Turbo Controllers": [
          "controllers/ConfirmController",
          "controllers/DisableWithController",
          "controllers/EmptyDomController",
          "controllers/TurboFrameRcController",
          "controllers/TurboFrameRefreshController",
        ],
      },
      {
        "Media Controllers": [
          "controllers/FallbackImageController",
          "controllers/LightboxImageController",
          "controllers/MediaPlayerController",
        ],
      },
      {
        "Scroll Controllers": [
          "controllers/ScrollContainerController",
          "controllers/ScrollIntoFocusController",
          "controllers/ScrollToBottomController",
          "controllers/ScrollToController",
          "controllers/ScrollToTopController",
        ],
      },
      {
        "Table Controllers": [
          "controllers/TableSortController",
          "controllers/TableTruncateController",
        ],
      },
      {
        "UJS Controllers": [
          "controllers/RemoteFormController",
        ],
      },
      {
        "Utility Controllers": [
          "controllers/IntersectionController",
          "controllers/IntervalController",
          "controllers/PresenceController",
          "controllers/PrintController",
          "controllers/TimeoutController",
          "controllers/UserFocusController",
        ],
      },
      {
        "Visual/Presentational Controllers": [
          "controllers/ClockController",
          "controllers/CountdownController",
          "controllers/DurationController",
          "controllers/TabsController",
          "controllers/TimeDistanceController",
          "controllers/TreeViewController",
        ],
      },
    ],
    Mixins: [
      "mixins/useEventListener",
      "mixins/useInjectedHTML",
      "mixins/useInterval",
      "mixins/useTimeout",
    ]
  },
};
