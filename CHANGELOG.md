# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.3.17](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.16...v0.3.17) (2021-09-28)


### Bug Fixes

* AutoSubmitFormController - Changes to the underlying implementation to help broaden browser compatibility. ([cdc8099](https://github.com/Sub-Xaero/stimulus-library/commit/cdc80995e147affc2814cfe5dc3d62163ddd4b46))
* Include src in npm published package so that sourcemaps work ([1d03594](https://github.com/Sub-Xaero/stimulus-library/commit/1d035946bdc7518576e0c4da961cea9e701338e0))

### [0.3.16](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.15...v0.3.16) (2021-09-17)


### Features

* Add RemoveController as an alias of DismissableController ([cae00eb](https://github.com/Sub-Xaero/stimulus-library/commit/cae00ebc4e811b84996b277e68df48c650cbca57))
* BaseController now only builds a proxy to detect loggable events when in debug mode where logging happens ([1e44a63](https://github.com/Sub-Xaero/stimulus-library/commit/1e44a6314b5c6762a29477a55b6ecb5da5088e01))
* New controllers LoadBlockController and PollBlockController. ([aa2598b](https://github.com/Sub-Xaero/stimulus-library/commit/aa2598bc95e0fd23299d6f6b9f0933a3ce25594e))

### [0.3.15](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.14...v0.3.15) (2021-08-13)


### Features

* TreeViewController - A controller that handles nested `ul` and `ol` lists, and enabled them to be collapsed and opened. ([bd35e0a](https://github.com/Sub-Xaero/stimulus-library/commit/bd35e0a0da460b948198357bdeb6dc7134ae50d2))

### [0.3.14](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.13...v0.3.14) (2021-08-05)


### Bug Fixes

* AutoSubmitFormController - don't trigger a synthetic 'submit' event when using `.requestSubmit()` as that fires it's own event unlike `.submit()` ([e40b09b](https://github.com/Sub-Xaero/stimulus-library/commit/e40b09bba136541a0ba9f4f7efc65abab7ece25b))
* ConfirmNavigationController - Message value was incorrectly configured in a previous refactor. ([f316940](https://github.com/Sub-Xaero/stimulus-library/commit/f3169407b1b3d19ebdd8d84858633670fe7263bd))

### [0.3.13](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.12...v0.3.13) (2021-08-05)


### Features

* AutoSubmitFormController - allow an optional `mode` config which determines whether to try submitting the form using `requestSubmit` or `submit` ([f62c8d0](https://github.com/Sub-Xaero/stimulus-library/commit/f62c8d02e8e55d90d8382efbf94d1358d6780282))

### [0.3.12](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.11...v0.3.12) (2021-07-19)


### Features

* EmptyDOMController - There is now an optional `container` target which can be observed instead of the root controller element for emptiness. ([fbf785f](https://github.com/Sub-Xaero/stimulus-library/commit/fbf785f8d4914779b4a203fe213f13c1f0278488))

### [0.3.11](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.10...v0.3.11) (2021-07-15)


### Bug Fixes

* NavigateFormErrorsController - only show "nextError" button when the error count is 1, if there is no "currentError" button ([f6aae19](https://github.com/Sub-Xaero/stimulus-library/commit/f6aae19f35d776fd11246ff697238ba5c03211f2))

### [0.3.10](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.9...v0.3.10) (2021-07-15)


### Bug Fixes

* NavigateFormErrorsController - setting indexValue to the same value does not trigger indexValueChanged. Manually call toggleButtons on firstClick events. ([973225a](https://github.com/Sub-Xaero/stimulus-library/commit/973225ac49b1cfd12224d0f5f486d1b6433a97bb))

### [0.3.9](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.8...v0.3.9) (2021-07-15)


### Bug Fixes

* NavigateFormErrorsController - add firstClick logic to toggleButtons check. Fixes bug where errorCount is 1, and both buttons are disabled on load. ([d94875e](https://github.com/Sub-Xaero/stimulus-library/commit/d94875e7beffa85749f2efa36e92fe775e19003d))

### [0.3.8](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.7...v0.3.8) (2021-07-07)


### Bug Fixes

* NavigateFormErrorsController - The first click after the controller connects will just scroll to the first error, without advancing the count. Fixes bug where controller jumps straight to second error. ([df39c5d](https://github.com/Sub-Xaero/stimulus-library/commit/df39c5dae6c091bcdfb141e0feef2e7b889eedce))

### [0.3.7](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.6...v0.3.7) (2021-07-07)


### Features

* ValueWarnController - A form controller to display a warning message (rather than an outright validation error), when the value of a numeric input exceeds a given min/max ([2357660](https://github.com/Sub-Xaero/stimulus-library/commit/2357660291acd5629a36b1bb45139f048cabe062))


### Bug Fixes

* Fix indexing bug in NavigateFormErrorsController causing previous/next to not always fire. ([92d64e8](https://github.com/Sub-Xaero/stimulus-library/commit/92d64e844e516f6bb89f5c99f73c52d3184bfdf6))

### [0.3.6](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.5...v0.3.6) (2021-07-05)


### Features

* Add optional `success` and `fail` classes to FallbackImageController ([2dfac90](https://github.com/Sub-Xaero/stimulus-library/commit/2dfac903617aa03015d7ab12b2ff6b2da13c12e3))
* All controllers with `class` options now support multiple classes, as in utility-class framework environments. i.e. Tailwind ([51587bb](https://github.com/Sub-Xaero/stimulus-library/commit/51587bb08bd2c84c8d30c24c3fc95d63364aebc4))

### [0.3.5](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.4...v0.3.5) (2021-07-01)

### [0.3.4](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.3...v0.3.4) (2021-05-27)


### Bug Fixes

* DisableWithController - Re-enable buttons when a turbo(links) visit triggers ([2895ed1](https://github.com/Sub-Xaero/stimulus-library/commit/2895ed103d4cbc61b28fa160d969d6e3833b2570))

### [0.3.3](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.2...v0.3.3) (2021-05-21)


### Bug Fixes

* NavigateFormErrors - Clamp error index so that "current error" works even when index is out of bounds ([d09a66b](https://github.com/Sub-Xaero/stimulus-library/commit/d09a66b67afd5f87348c091c8277af5b0c17d0bd))

### [0.3.2](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.1...v0.3.2) (2021-05-21)


### Features

* BackLinkController - A controller to enable links to navigate back through the user's history to previous pages, falling back to a default href. ([9d68ed6](https://github.com/Sub-Xaero/stimulus-library/commit/9d68ed66e1d8d72b517fe63093f7d532dab755db))
* ClockController - A visual controller to display the current time ([ac122ae](https://github.com/Sub-Xaero/stimulus-library/commit/ac122ae9937d6f26d0e213abb087583d2df8256f))
* DurationController - A controller to display the duration that has elapsed since a given timestamp. Similar to TimeDistanceController, but with numbers instead of words. ([b634a3c](https://github.com/Sub-Xaero/stimulus-library/commit/b634a3c5885471416e2ae5692e73a37f83ed5908))
* Prefetch Controller - A controller to preload links when they come into view, or the user hovers over them. ([a27593f](https://github.com/Sub-Xaero/stimulus-library/commit/a27593f5edf552cce9e4d32581f9f6553e7baa2e))
* ScrollContainerController - Controller to allow control over a scrollable container element ([e953769](https://github.com/Sub-Xaero/stimulus-library/commit/e953769643151cf52b9408f9d3fd01fead4a0443))

### [0.3.1](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.0...v0.3.1) (2021-05-14)


### Bug Fixes

* TemporaryStateController - fix attributesValue check always throwing error ([6b12aa5](https://github.com/Sub-Xaero/stimulus-library/commit/6b12aa52b14797448821183835e2755c1b744224))

## [0.3.0](https://github.com/Sub-Xaero/stimulus-library/compare/v0.2.10...v0.3.0) (2021-05-13)


### ⚠ BREAKING CHANGES

* Rename AppearanceController as UserFocusController and tweak the event names.

### Features

* PresenceController - A utility controller to wire up other controllers when an element comes into or leaves the DOM ([#26](https://github.com/Sub-Xaero/stimulus-library/issues/26)) ([d3537d9](https://github.com/Sub-Xaero/stimulus-library/commit/d3537d9a9c0d666a2f795c34ab187b7b764d19b4))
* Rename AppearanceController as UserFocusController and tweak the event names. ([0aa88ca](https://github.com/Sub-Xaero/stimulus-library/commit/0aa88cad56d937b2352df4d8b359465aa053daac))
* TabsController - A presentational controller to enabled tabbed views ([db040e5](https://github.com/Sub-Xaero/stimulus-library/commit/db040e5925a607144b706c65cbe7598fae10eec3))
* TemporaryStateController - A controller to temporarily apply a state to an attribute of an element, and restore it back after a given time. Closes [#22](https://github.com/Sub-Xaero/stimulus-library/issues/22) ([#28](https://github.com/Sub-Xaero/stimulus-library/issues/28)) ([427d0fa](https://github.com/Sub-Xaero/stimulus-library/commit/427d0fa795c7a4ca7361aa3b50234a502df236cc))

### [0.2.10](https://github.com/Sub-Xaero/stimulus-library/compare/v0.2.9...v0.2.10) (2021-05-04)


### Features

* SyncInputsController - Inspired by Vue's v-bind and v-model. A controller to sync input vales to parts of the DOM, or the values of other inputs. ([9d5e847](https://github.com/Sub-Xaero/stimulus-library/commit/9d5e847904c354072714e3d0e80781b542119390))


### Bug Fixes

* AutoSubmitFormController - allow controller to submit normal forms as well as UJS forms. ([e1866e2](https://github.com/Sub-Xaero/stimulus-library/commit/e1866e2afc7f5c8fae56a755665b0de7777e52bc))
* ScrollTopController/ScrollBottomController - fix controller behaviour when inside an overflow container and mode is "nearest". And more consistent behaviour when mode is document. ([f36f9e6](https://github.com/Sub-Xaero/stimulus-library/commit/f36f9e6abb360e75160ed3631ae5786384c2393d))

### [0.2.9](https://github.com/Sub-Xaero/stimulus-library/compare/v0.2.8...v0.2.9) (2021-04-28)


### Features

* FallbackImageController - update the controller to support failing when the placeholder also fails. Also works more consistently in race-conditions when the image has already loaded when the controller mounts. ([1fd682d](https://github.com/Sub-Xaero/stimulus-library/commit/1fd682dc7185891217e97da5f66e14afb4679ed9))

### [0.2.8](https://github.com/Sub-Xaero/stimulus-library/compare/v0.2.7...v0.2.8) (2021-04-26)


### Features

* CountdownController - A controller to visualise a countdown to a date/time ([82c1bfe](https://github.com/Sub-Xaero/stimulus-library/commit/82c1bfe0ab168b864fb0d1c29f18ebda3fc00635))
* NavigateFormErrorsController - A controller to enable smoothscroll navigation between form errors on a page ([#23](https://github.com/Sub-Xaero/stimulus-library/issues/23)) ([dcebaf1](https://github.com/Sub-Xaero/stimulus-library/commit/dcebaf19a6735ed4e46ccc104f6a9ee7ddb9e1ef))
* TimeDistanceController - Controller that shows the distance in words between the current time and a specific UNIX timestamp. Updates intelligently according to time distance from current. ([#24](https://github.com/Sub-Xaero/stimulus-library/issues/24)) ([91269ea](https://github.com/Sub-Xaero/stimulus-library/commit/91269eabc911895420d4d6877bdf8e2a2c9cf470))


### Bug Fixes

* CountdownController - When errors happen on tick, kill tick interval. ([112039c](https://github.com/Sub-Xaero/stimulus-library/commit/112039cde8960885c2caea90d9f75933830a2e51))
* IntervalController - Throw exception when secondsValue is blank ([0a45825](https://github.com/Sub-Xaero/stimulus-library/commit/0a458255ef8483b3ebf4b6d038d1ef948ee62275))

### [0.2.7](https://github.com/Sub-Xaero/stimulus-library/compare/v0.2.5...v0.2.7) (2021-04-24)


### Features

* Add event logging to debug logging ([594553c](https://github.com/Sub-Xaero/stimulus-library/commit/594553c9b612b6203e51f95e765648b3b12b7294))
* AnchorSpyController - Controller to write anchors to the URL when actions happen, and detect when the page loads with an anchor (#), and wire up other controllers. i.e. To reopen accordions/tabs when the page opens with the correct anchor. Closes [#18](https://github.com/Sub-Xaero/stimulus-library/issues/18) ([#20](https://github.com/Sub-Xaero/stimulus-library/issues/20)) ([de0be82](https://github.com/Sub-Xaero/stimulus-library/commit/de0be82d17386393fcf0231bbf4af9f96b6d4f49))
* BaseController - An extendable controller that provides common useful behaviours and properties for all controllers that use it as a base ([a12b101](https://github.com/Sub-Xaero/stimulus-library/commit/a12b101c36352e392ec63d9da0010248394cc1dd))
* EphemeralController - an extendable base controller that can cleanly uninstall controllers/targets/classes/values from DOM elements ([34ebc58](https://github.com/Sub-Xaero/stimulus-library/commit/34ebc5837d741c65046339e034a3e2cbe89ca8db))
* IntervalController - a utility controller that fires an event every x seconds to wire up to other controllers ([c31fc3b](https://github.com/Sub-Xaero/stimulus-library/commit/c31fc3b33f43f8710372a3784d6892c5be82d285))
* MediaPlayerController - A thin stimulus controller wrapper around the native HTML5 video and audio tag controls ([#21](https://github.com/Sub-Xaero/stimulus-library/issues/21)) ([91bcf2b](https://github.com/Sub-Xaero/stimulus-library/commit/91bcf2b67a6218feff0dd39ff29883dfd4cd9cb2))
* TimeoutController - a utility controller that fires an event after x seconds to wire up to other controllers ([9f0e0da](https://github.com/Sub-Xaero/stimulus-library/commit/9f0e0da8d97fb7809b1d6a564ba2d3861dbf1417))


### Bug Fixes

* Missing sourceTarget in ClipboardController ([da222a7](https://github.com/Sub-Xaero/stimulus-library/commit/da222a7165dc24442bf59bb9d1e527c3e4cb11b1))

### [0.2.6](https://github.com/Sub-Xaero/stimulus-library/compare/v0.2.5...v0.2.6) (2021-04-23)


### Features

* AnchorSpyController - Controller to write anchors to the URL when actions happen, and detect when the page loads with an anchor (#), and wire up other controllers. i.e. To reopen accordions/tabs when the page opens with the correct anchor. Closes [#18](https://github.com/Sub-Xaero/stimulus-library/issues/18) ([#20](https://github.com/Sub-Xaero/stimulus-library/issues/20)) ([de0be82](https://github.com/Sub-Xaero/stimulus-library/commit/de0be82d17386393fcf0231bbf4af9f96b6d4f49))
* MediaPlayerController - A thin stimulus controller wrapper around the native HTML5 video and audio tag controls ([#21](https://github.com/Sub-Xaero/stimulus-library/issues/21)) ([91bcf2b](https://github.com/Sub-Xaero/stimulus-library/commit/91bcf2b67a6218feff0dd39ff29883dfd4cd9cb2))


### Bug Fixes

* Missing sourceTarget in ClipboardController ([da222a7](https://github.com/Sub-Xaero/stimulus-library/commit/da222a7165dc24442bf59bb9d1e527c3e4cb11b1))

### [0.2.5](https://github.com/Sub-Xaero/stimulus-library/compare/v0.2.4...v0.2.5) (2021-04-21)


### Features

* TableSortController - Allow sorting of tables by clicking on column headers ([2ba2560](https://github.com/Sub-Xaero/stimulus-library/commit/2ba25608f30412b1411423a172986d378bb55b04))
* TableTruncateController - Allow the collapsing of long tables, down to a specified number of rows, and a button to expand the table to full-height. ([c121cd7](https://github.com/Sub-Xaero/stimulus-library/commit/c121cd7395f4bd67ee6cf398147e2c9d54222ce9))

### [0.2.4](https://github.com/Sub-Xaero/stimulus-library/compare/v0.2.3...v0.2.4) (2021-04-13)


### Bug Fixes

* package.json pointing to incorrect Typescript output. Should be index.d.ts ([68e22d8](https://github.com/Sub-Xaero/stimulus-library/commit/68e22d80c5928648c947eb3f585bb6212c2a5b97))

### [0.2.3](https://github.com/Sub-Xaero/stimulus-library/compare/v0.2.1...v0.2.3) (2021-03-30)


### Features

* DetectDirtyFormController - A form controller that detects the dirty state of a whole form and any of its children. ([e173932](https://github.com/Sub-Xaero/stimulus-library/commit/e17393239790945c55fa597dfb19884debf0418a))
* Form RC Controller. Able to submit and reset a form from outside its child subtree. Closes [#7](https://github.com/Sub-Xaero/stimulus-library/issues/7) ([0fa1df0](https://github.com/Sub-Xaero/stimulus-library/commit/0fa1df0504114882a0e374611eac24e214302c51))

### [0.2.2](https://github.com/Sub-Xaero/stimulus-library/compare/v0.2.1...v0.2.2) (2021-03-26)


### Features

* Form RC Controller. Able to submit and reset a form from outside its child subtree. Closes [#7](https://github.com/Sub-Xaero/stimulus-library/issues/7) ([0fa1df0](https://github.com/Sub-Xaero/stimulus-library/commit/0fa1df0504114882a0e374611eac24e214302c51))

### [0.2.1](https://github.com/Sub-Xaero/stimulus-library/compare/v0.2.0...v0.2.1) (2021-03-11)


### Features

* ConfirmNavigationController - Support for Hotwire/Turbo and Turbolinks navigation events ([f698920](https://github.com/Sub-Xaero/stimulus-library/commit/f698920ad5fe0683cc826f0c4eefbb0a2360f1b2))
* DisableWithController - Controller to disable an element temporarily to prevent double clicks and submissions. Emulates UJS DisableWith for Hotwire applications. ([#12](https://github.com/Sub-Xaero/stimulus-library/issues/12)) ([1d675b0](https://github.com/Sub-Xaero/stimulus-library/commit/1d675b0bd3b8a3c2042c0e754394ae07d71f96d5))
* ElementSaveController - save the state of a single element to localstorage. Closes [#4](https://github.com/Sub-Xaero/stimulus-library/issues/4) ([#14](https://github.com/Sub-Xaero/stimulus-library/issues/14)) ([5b39deb](https://github.com/Sub-Xaero/stimulus-library/commit/5b39deb6dacc4acf9f062247e29c4a48084eea98))
* RemoteFormController - Controller for handling UJS remote form responses ([fdf0e5f](https://github.com/Sub-Xaero/stimulus-library/commit/fdf0e5f73801650897b6e170729117b4e8b2ef6c))
* TurboFrameRefreshController - a controller to either manually or periodically refresh the contents of a turboframe's src ([#13](https://github.com/Sub-Xaero/stimulus-library/issues/13)) ([f4dfd98](https://github.com/Sub-Xaero/stimulus-library/commit/f4dfd9895f365c3b0d8cb26b8e148dea82d7919a))


### Bug Fixes

* Accidentally using type-guards for HTMLLinkElement instead of HTMLAnchorElement. ([d3f2be9](https://github.com/Sub-Xaero/stimulus-library/commit/d3f2be9f191471c9c6071257de731f0fd3510460))

## [0.2.0](https://github.com/Sub-Xaero/stimulus-library/compare/v0.1.15...v0.2.0) (2021-03-02)


### ⚠ BREAKING CHANGES

* Remove lodash as a dependency

### Bug Fixes

* Fix bug in LimitedSelectionCheckboxesController where maxValue was being ignored ([fc639f6](https://github.com/Sub-Xaero/stimulus-library/commit/fc639f66709056a65625cac07e6a0ceb9913fb15))


* Remove lodash as a dependency ([d3990ea](https://github.com/Sub-Xaero/stimulus-library/commit/d3990eaf27a419086f4ddaed4e1aacda03535fab))

### [0.1.15](https://github.com/Sub-Xaero/stimulus-library/compare/v0.1.14...v0.1.15) (2021-03-01)


### Features

* Add optional selector and error-message values to async-block and lazy-block controllers. Users can choose to extract sub-content from HTML responses, and provide their own error messages when fetch fails. ([1c3be1e](https://github.com/Sub-Xaero/stimulus-library/commit/1c3be1eb840fe4f3518a5cca7b760b11730d4d43))

### [0.1.14](https://github.com/Sub-Xaero/stimulus-library/compare/v0.1.13...v0.1.14) (2021-02-26)


### Bug Fixes

* Fix NestedFormController - The ID generated by generateID needs to not have any decimal points. Math.random() gives a number between 0 and 1. Slice out decimal point ([684e073](https://github.com/Sub-Xaero/stimulus-library/commit/684e0736586d9834fee4305a392203284ecf8aa2))

### [0.1.13](https://github.com/Sub-Xaero/stimulus-library/compare/v0.1.12...v0.1.13) (2021-02-26)


### Bug Fixes

* Fix bug in Nested Form Controller where new class API was being used without the dot "." prefix in the selector ([315b1cf](https://github.com/Sub-Xaero/stimulus-library/commit/315b1cfe9d69097d7abd262ac8583ef6669821ec))

### [0.1.12](https://github.com/Sub-Xaero/stimulus-library/compare/v0.1.11...v0.1.12) (2021-02-11)


### Features

* AppearanceController - A utility controller to wire up Stimulus actions when the user focuses/minimises the page ([e15fe82](https://github.com/Sub-Xaero/stimulus-library/commit/e15fe8273aa00ddc263b087da152af698467e04a))
* IntersectionController - A utility controller to wire up Stimulus actions when an element moves in/out of the viewport ([dbda74f](https://github.com/Sub-Xaero/stimulus-library/commit/dbda74f2ad32e2b5badb34dd6e390edf10d7c6bc))

### [0.1.11](https://github.com/Sub-Xaero/stimulus-library/compare/v0.1.10...v0.1.11) (2021-02-10)


### Features

* StickyController - A controller to be able to style "sticky" elements depending on their "stuck" state. ([ce598eb](https://github.com/Sub-Xaero/stimulus-library/commit/ce598ebb50b588a639fd07adaed4c169852523dd))

### [0.1.10](https://github.com/Sub-Xaero/stimulus-library/compare/v0.1.9...v0.1.10) (2021-02-09)


### Bug Fixes

* Fix bug in CheckboxSelectAllController preventing connect() from adding event listeners ([db577a9](https://github.com/Sub-Xaero/stimulus-library/commit/db577a9768f04b47d1484d13e41cfbb2714476d3))
