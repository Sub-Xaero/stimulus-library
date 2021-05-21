module.exports = {
  someSidebar: {
    "Getting Started": [
      "installation",
      "treeshaking",
      "debugging",
    ],
    Controllers: [
      {
        "DOM Manipulation Controllers": [
          "controllers/AsyncBlockController",
          "controllers/LazyBlockController",
          "controllers/TeleportController",
          "controllers/ToggleClassController",
        ],
      },
      {
        "Extendable Controllers": [
          "controllers/BaseController",
          "controllers/EphemeralController",
        ]
      },
      {
        "Form Controllers": [
          "controllers/AutoSubmitFormController",
          "controllers/AutosizeController",
          "controllers/CharCountController",
          "controllers/CheckboxSelectAllController",
          "controllers/DetectDirtyController",
          "controllers/DetectDirtyFormController",
          "controllers/DisableInputsController",
          "controllers/EnableInputsController",
          "controllers/FormRcController",
          "controllers/FormSaveController",
          "controllers/LimitedSelectionCheckboxesController",
          "controllers/NavigateFormErrorsController",
          "controllers/NestedFormController",
          "controllers/PasswordConfirmController",
          "controllers/PasswordPeekController",
          "controllers/SyncInputsController",
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
          "controllers/ResponsiveIframeController",
          "controllers/SelfDestructController",
          "controllers/StickyController",
          "controllers/TemporaryStateController",
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
          "controllers/IntervalController",
          "controllers/IntersectionController",
          "controllers/PresenceController",
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
        ],
      },
    ],
  },
};
