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
          "controllers/NestedFormController",
          "controllers/PasswordConfirmController",
          "controllers/PasswordPeekController",
          "controllers/WordCountController",
        ],
      },
      {
        "Media Controllers": [
          "controllers/FallbackImageController",
          "controllers/LightboxImageController",
          "controllers/MediaPlayerController",
        ]
      },
      {
        "Scroll Controllers": [
          "controllers/ScrollIntoFocusController",
          "controllers/ScrollToBottomController",
          "controllers/ScrollToController",
          "controllers/ScrollToTopController",
        ]
      },
      {
        "Table Controllers": [
          "controllers/TableSortController",
          "controllers/TableTruncateController",
        ]
      },
      {
        "Utility Controllers": [
          "controllers/AppearanceController",
          "controllers/IntervalController",
          "controllers/IntersectionController",
          "controllers/TimeoutController",
        ],
      },
      {
        "General Controllers": [
          "controllers/AnchorSpyController",
          "controllers/ClipboardController",
          "controllers/ConfirmController",
          "controllers/ConfirmNavigationController",
          "controllers/DisableWithController",
          "controllers/DismissableController",
          "controllers/ElementSaveController",
          "controllers/EmptyDomController",
          "controllers/ResponsiveIframeController",
          "controllers/SelfDestructController",
          "controllers/StickyController",
        ],
      },
      {
        "UJS Controllers": [
          "controllers/RemoteFormController",
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
    ],
  },
};
