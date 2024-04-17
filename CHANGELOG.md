# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.2.0](https://github.com/Sub-Xaero/stimulus-library/compare/v1.1.0...v1.2.0) (2024-04-17)


### Features

* **CountdownController:** New configuration value `padZeros` to control whether hours, minutes and seconds are output as zero-padded or not. Also fixed `removeUnused` behaviour. ([#351](https://github.com/Sub-Xaero/stimulus-library/issues/351)) ([9a4ad0b](https://github.com/Sub-Xaero/stimulus-library/commit/9a4ad0bd7ce014a4bb9e827df125c9b52b03dbd2))





# [1.1.0](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.7...v1.1.0) (2024-03-15)


### Features

* **AutoSubmitFormController:** Allow AutoSubmitFormController to work with elements outside the form annotated with the `form` attribute ([#330](https://github.com/Sub-Xaero/stimulus-library/issues/330)) ([d37c0ca](https://github.com/Sub-Xaero/stimulus-library/commit/d37c0caeaa883528b11e4af9e70b3adcb10d7cfa)), closes [#329](https://github.com/Sub-Xaero/stimulus-library/issues/329)





## [1.0.7](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.6...v1.0.7) (2024-03-15)

**Note:** Version bump only for package stimulus-library





## [1.0.6](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.5...v1.0.6) (2023-12-13)


### Bug Fixes

* **SignalControllers:** Fix bug preventing OR expressions ever returning true ([10bffb2](https://github.com/Sub-Xaero/stimulus-library/commit/10bffb2daf858d3edea78458d638542f5b364f12))





## [1.0.5](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.4...v1.0.5) (2023-12-13)

**Note:** Version bump only for package stimulus-library





## [1.0.4](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.3...v1.0.4) (2023-10-13)


### Bug Fixes

* NestedFormController _wrapperClass value ([fef66c2](https://github.com/Sub-Xaero/stimulus-library/commit/fef66c262584637c3c74ff95a29edc1409161542))
* NestedFormController flipped error logic ([963de08](https://github.com/Sub-Xaero/stimulus-library/commit/963de08bc8b2c18ead8f9a7d7600f39559eafcec))





## [1.0.3](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.2...v1.0.3) (2023-09-22)

**Note:** Version bump only for package stimulus-library





## [1.0.2](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.1...v1.0.2) (2023-08-17)

**Note:** Version bump only for package stimulus-library





## [1.0.1](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.0-alpha.8...v1.0.1) (2023-08-17)


### Features

* **useLocalStorage:** useLocalStorage mixin now listens for `storage` events and updates the key accordingly. ([b78833f](https://github.com/Sub-Xaero/stimulus-library/commit/b78833f3609f43eda92c9d143bc204b0ee2b40b1))





# [1.0.0-alpha.8](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.0-alpha.7...v1.0.0-alpha.8) (2023-08-17)


### Features

* **useLocalStorage:** Add `onChange` callback to useLocalStorage mixin. ([e928c9d](https://github.com/Sub-Xaero/stimulus-library/commit/e928c9d73c49aa8255b11472f200c9d50e681d45))





# [1.0.0-alpha.7](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2023-08-17)

**Note:** Version bump only for package stimulus-library





# [1.0.0-alpha.6](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2023-06-15)


### Bug Fixes

* **FormDirtyConfirmNavigationController:** Handle turbo form submissions ([bbf6b93](https://github.com/Sub-Xaero/stimulus-library/commit/bbf6b9394b774b371559c1f6e4a9dbb18ef71d44))





# [1.0.0-alpha.5](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2023-06-15)


### Bug Fixes

* **FormDirtyConfirmNavigationController:** Fix bug where form submissions were asking for confirmation. ([a9f869e](https://github.com/Sub-Xaero/stimulus-library/commit/a9f869e38fdd5a53570ccad36667c37bc3a3e8f7))





# [1.0.0-alpha.4](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2023-06-10)


### Features

* **useTextSelection:** A mixin that allows you to be notified when a user selects or deselects something on the page. ([bfa8369](https://github.com/Sub-Xaero/stimulus-library/commit/bfa83697a38bd08a372dc71820eca2fb45f19b9b))





# [1.0.0-alpha.3](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.0-alpha.0...v1.0.0-alpha.3) (2023-06-10)


### Features

* **FormDirtyConfirmNavigationController:** New controller to prevent users from accidentally leaving a page that has unsaved changes on it ([2c6f7d3](https://github.com/Sub-Xaero/stimulus-library/commit/2c6f7d37b93212c7c6feabb18ac4f1a768ad9504))
* **useDirtyFormTracking:** New mixin  to track whether a form or individual input have been changed from its original value ([1dc8bbd](https://github.com/Sub-Xaero/stimulus-library/commit/1dc8bbdcf7511a8c19da40f7a6f6a961a6c331bb))





# [1.0.0-alpha.2](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.0-alpha.0...v1.0.0-alpha.2) (2023-03-10)

**Note:** Version bump only for package stimulus-library





# [1.0.0-alpha.1](https://github.com/Sub-Xaero/stimulus-library/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2023-03-10)

### Bug Fixes

* Fix dependencies for sub-packages


## [1.0.0-alpha.0](https://github.com/Sub-Xaero/stimulus-library/compare/v0.9.11...v1.0.0-alpha.0) (2023-03-09)


### Bug Fixes

* **SignalInputController:** Fix wrong event triggered when SignalInputController set to synthesize input  events when they sync values ([a0fde82](https://github.com/Sub-Xaero/stimulus-library/commit/a0fde821907a16872916ea2a65f6e73dd36de87e))


### Features

* **TweenNumberController:** Add options to allow formatting of the tweened number ([b660317](https://github.com/Sub-Xaero/stimulus-library/commit/b660317cc3d014aee7d60b52fe8f89af54789e87))


### [0.9.11](https://github.com/Sub-Xaero/stimulus-library/compare/v0.9.10...v0.9.11) (2023-03-06)


### Features

* **SignalInputController:** Add stimulus config values to allow SignalInputController to optionally synthesize input and change events when they sync values ([c694625](https://github.com/Sub-Xaero/stimulus-library/commit/c694625350c2cb1ca93c66abbbd4374cbcfc3d60))

### [0.9.10](https://github.com/Sub-Xaero/stimulus-library/compare/v0.9.9...v0.9.10) (2023-03-06)


### Features

* **SignalInputController:** Add functionality so that two inputs with SignalInputControllers on them can sync their values ([e145df9](https://github.com/Sub-Xaero/stimulus-library/commit/e145df9ac866c0807bd4a5c6e0b4cfbd87cb918b))

### [0.9.9](https://github.com/Sub-Xaero/stimulus-library/compare/v0.9.8...v0.9.9) (2023-02-20)


### Bug Fixes

* Type declarations weren't being exported ([1f877b3](https://github.com/Sub-Xaero/stimulus-library/commit/1f877b3ee86493f44f030a2aa502e54f055dae75))

### [0.9.8](https://github.com/Sub-Xaero/stimulus-library/compare/v0.9.7...v0.9.8) (2023-02-18)


### Bug Fixes

* **Exports:** Fix missing export for useResizeObserver mixin ([cc01f5e](https://github.com/Sub-Xaero/stimulus-library/commit/cc01f5e464509487578bef4866d02a4d514e2ec2))

### [0.9.7](https://github.com/Sub-Xaero/stimulus-library/compare/v0.9.6...v0.9.7) (2023-02-07)


### Features

* **Controllers:** TurboFrameHistoryController - a controller that syncs the navigation of a turbo-frame element with the browser history and URL. ([f2b5d2a](https://github.com/Sub-Xaero/stimulus-library/commit/f2b5d2a201a029f1c8607caeeecbfa6edcc0a7ef)), closes [#97](https://github.com/Sub-Xaero/stimulus-library/issues/97)
* **Mixins:** useResizeObserver - a mixin that wraps up the ResizeObserver API for use in Stimulus components, automating registering and cleaning up the observer on connect and disconnect. ([b535a17](https://github.com/Sub-Xaero/stimulus-library/commit/b535a170a64d1f5837c8ef478b2a2abe31fc2a39)), closes [#98](https://github.com/Sub-Xaero/stimulus-library/issues/98)
* **TableSortController:** Allow sorting by custom values other than the cell content ([d50e9d9](https://github.com/Sub-Xaero/stimulus-library/commit/d50e9d9f0c0e985c81c5609bc3f66c838b1a344b))


### Bug Fixes

* **CountdownController:** Stop ticking and firing events after countdown ended ([621d26e](https://github.com/Sub-Xaero/stimulus-library/commit/621d26eec75855cf0286cd5a2129331e2b3dbae7)), closes [#86](https://github.com/Sub-Xaero/stimulus-library/issues/86)

### [0.9.6](https://github.com/Sub-Xaero/stimulus-library/compare/v0.9.5...v0.9.6) (2023-01-19)


### Bug Fixes

* TweenNumberController - Only run on first intersect, not every time the element enters the viewport ([39f6e3c](https://github.com/Sub-Xaero/stimulus-library/commit/39f6e3c34e20eed6edd83c40fb8c8dcc8d9fcf46))

### [0.9.5](https://github.com/Sub-Xaero/stimulus-library/compare/v0.9.4...v0.9.5) (2022-12-20)


### Features

* **Mixin:** UseIntersection - A mixin that wraps setting up an IntersectionObserver ([ea27e1b](https://github.com/Sub-Xaero/stimulus-library/commit/ea27e1bb19a19c5a8f30641e6b058cc80e29b9c1))
* **Mixin:** UseMutationObserver - A mixin that wraps setting up an MutationObserver ([03e41bf](https://github.com/Sub-Xaero/stimulus-library/commit/03e41bf4c9cff3f73919290f87ae7092842458e3))

### [0.9.4](https://github.com/Sub-Xaero/stimulus-library/compare/v0.9.3...v0.9.4) (2022-12-19)


### Bug Fixes

* TabsController - valueChanged getting called before class methods mixin. ([5ababe3](https://github.com/Sub-Xaero/stimulus-library/commit/5ababe3e286144bdee608e2949e21cb8b6dcac1a))

### [0.9.3](https://github.com/Sub-Xaero/stimulus-library/compare/v0.9.2...v0.9.3) (2022-12-19)


### Bug Fixes

* **Controller:** Fix bug in Signal controllers preventing controllers seeing any expressions. Regression introduced in 2430d07ac60c06d25a9e50f67c47919fbb536e0a ([9bc878c](https://github.com/Sub-Xaero/stimulus-library/commit/9bc878c80bee51d195db701e0bba99ed6322941e))
* **Controller:** Fix bug in SignalVisibility controllers, where visibility classes weren't set. Regression introduced by 2430d07ac60c06d25a9e50f67c47919fbb536e0a ([bb062f2](https://github.com/Sub-Xaero/stimulus-library/commit/bb062f28554bc551b9892eee1a9ead32e59cb522))

### [0.9.2](https://github.com/Sub-Xaero/stimulus-library/compare/v0.9.1...v0.9.2) (2022-10-20)


### Features

* **Controller:** TableSortController - Improvements to the default sort mechanism to correctly set `data-sort-asc`/`data-sort-desc` on first sort ([0ee8c86](https://github.com/Sub-Xaero/stimulus-library/commit/0ee8c866224784658bc241a09cc702ef05b532fb))


### Bug Fixes

* **Controller:** TableTruncateController - Small bug fixes for when controller is used on the same table as TableSortController. The "show more" element would appear on a table with too few elements, when it is sorted. This is now fixed. ([10689c4](https://github.com/Sub-Xaero/stimulus-library/commit/10689c4cf29fee912d8075751cdfd8830b490abe))
* CountdownController - Runtime error from missing CSS class toggling methods ([8c680e0](https://github.com/Sub-Xaero/stimulus-library/commit/8c680e0953a6c7415cb8addf4c1b80dc0a7cd18f))
* TurboFrameRefreshController - Latest version of turbo has a .reload() method, re-setting src no longer works ([6a32d71](https://github.com/Sub-Xaero/stimulus-library/commit/6a32d71c3ee7d86a6dab6d3134731c7660fcbcbd))

### [0.9.1](https://github.com/Sub-Xaero/stimulus-library/compare/v0.9.0...v0.9.1) (2022-09-14)


### Features

* **BaseController:** New method `eventName` to generate an event name using the controllers identifier ([c8a8d41](https://github.com/Sub-Xaero/stimulus-library/commit/c8a8d410f9f2e24c26026e76619f531eb9cecc51))
* **Controller:** New RefreshPageController that refreshes the users page, either as an action or on load ([d9aad93](https://github.com/Sub-Xaero/stimulus-library/commit/d9aad9335fabe5647550c63672259960934ae093))
* **Controller:** New SignalEnable and SignalDisable controllers which can enable/disable elements based on whether a value matches a given expression ([54d1757](https://github.com/Sub-Xaero/stimulus-library/commit/54d17571e551a4ab6cbe3089bb54815d4ed4ca19))
* **Controller:** New TweenNumberController that animates a number for visual effect, using a number of possible easing functions. ([75ec44d](https://github.com/Sub-Xaero/stimulus-library/commit/75ec44d27ea9207e1fb8d8fd76e7b8e98c6772bc))
* **Controller:** SignalDomChildrenController now emits the number of child nodes as a browser event as well an a signal ([7163747](https://github.com/Sub-Xaero/stimulus-library/commit/7163747afabcc1f1b15329afcf372f0e6fdf3abf))

## [0.9.0](https://github.com/Sub-Xaero/stimulus-library/compare/v0.7.5...v0.9.0) (2022-09-08)


### ⚠ BREAKING CHANGES

* Drop UMD and CommonJS builds of the library, and only support ESModules.

### Features

* **Controller:** PersistedDismissableController ([e622660](https://github.com/Sub-Xaero/stimulus-library/commit/e622660bb5b14c47b41522c847d0954f46e1d4cc))
* Drop UMD and CommonJS builds of the library, and only support ESModules. ([3b374f6](https://github.com/Sub-Xaero/stimulus-library/commit/3b374f62bf4c59501841461319287607246cdb5a))


### Bug Fixes

* Fix bug where FormRCController did not check for other config options that might be providing the form ([754d782](https://github.com/Sub-Xaero/stimulus-library/commit/754d782cd34d51b6b1bff6a0ea32d6bec63647a8))

## [0.8.0](https://github.com/Sub-Xaero/stimulus-library/compare/v0.8.0-beta...v0.8.0) (2022-06-07)

### [0.7.5](https://github.com/Sub-Xaero/stimulus-library/compare/v0.7.4...v0.7.5) (2022-04-12)


### Features

* For compatibility with multiple versions of Stimulus / @hotwired/stimulus npm packages, the runtime parts of stimulus necessary for the library to function are now bundled with the library instead of required as a peerDependency. Only incurs 2kb Gzipped. Will remove when @hotwired/stimulus has more market-share than stimulus, currently 50/50 ([50a97df](https://github.com/Sub-Xaero/stimulus-library/commit/50a97df7badc9ac4f91502e0cae6b61a2d8cc8c1))

### [0.7.4](https://github.com/Sub-Xaero/stimulus-library/compare/v0.7.3...v0.7.4) (2022-02-21)


### Features

* **New Controller:** EqualizeController - For equalizing the heights of all connected elements to the max observed size, and scaling them responsively to resize and device rotation events ([4ebcbee](https://github.com/Sub-Xaero/stimulus-library/commit/4ebcbee360a534376adc2df787ef5aef2ccb4468))

### [0.7.3](https://github.com/Sub-Xaero/stimulus-library/compare/v0.7.2...v0.7.3) (2022-02-16)


### Bug Fixes

* **SignalVisibilityController:** New hide/show events added in 0.7.2 should have included the nameValue. Now fixed. ([00dd27b](https://github.com/Sub-Xaero/stimulus-library/commit/00dd27b79a62032c286d16ddff9494c4585963e1))

### [0.7.2](https://github.com/Sub-Xaero/stimulus-library/compare/v0.7.1...v0.7.2) (2022-02-16)


### Features

* **Controllers:** New SignalDomChildrenController which emits signals when its children/descendants are added or removed ([115ab44](https://github.com/Sub-Xaero/stimulus-library/commit/115ab440a0a88d30a5667fe70a9b7e59c13b4a27))
* **Debugging:** Display more and clearer information for event logging in debug mode ([b9d4b95](https://github.com/Sub-Xaero/stimulus-library/commit/b9d4b95306a0536b1d2ef8ece3a76a0fdff06ea7))
* **SignalInputController:** Dispatch an event to the DOM when the value changes ([fccc822](https://github.com/Sub-Xaero/stimulus-library/commit/fccc82242993963ab85fa5de6a46c4f410f00f91))
* **SignalVisibilityController:** Predicate and value information is now attached to the events fired to the DOM. Allows for easier debugging, and can be used in other controllers if desired. ([fc02e05](https://github.com/Sub-Xaero/stimulus-library/commit/fc02e05b109e7a430268a4be1a162c7060b16e23))
* Add event dispatch to SignalVisibilityController that other controllers can use to trigger actions when the element is shown/hidden ([c62972b](https://github.com/Sub-Xaero/stimulus-library/commit/c62972b6a760a99f299a3b2adefe25786d80e2d7))


### Bug Fixes

* **SignalInputController:** Add tiny 1ms debounce to event handlers so that change and input don't both fire for the same change ([bb69d6b](https://github.com/Sub-Xaero/stimulus-library/commit/bb69d6bdb479ec08e25e1ca45c7db81c4ead7311))
* Don't duplicate Stimulus-3 built in logging. ([e2f64eb](https://github.com/Sub-Xaero/stimulus-library/commit/e2f64eb269251bd6bfdd82e64238b7a0a64cd55d))
* Ensure that dispatched events always have the target in the details obj ([07aa806](https://github.com/Sub-Xaero/stimulus-library/commit/07aa80686579650242998c2376b807bb870b3f78))
* Fix bug in SignalControllers expression parsing logic where expressions operating on the value "0" were not detected as valid expressions ([772ab33](https://github.com/Sub-Xaero/stimulus-library/commit/772ab331febeed8ff1ca06e4639612b2cc0c74bc))

### [0.7.1](https://github.com/Sub-Xaero/stimulus-library/compare/v0.7.0...v0.7.1) (2022-01-25)


### Bug Fixes

* BaseController infinite loop when dispatching an event ([6618122](https://github.com/Sub-Xaero/stimulus-library/commit/6618122063238d2cf4adcab1197d7d8f69cf9f0a))

## [0.7.0](https://github.com/Sub-Xaero/stimulus-library/compare/v0.6.5...v0.7.0) (2022-01-20)


### ⚠ BREAKING CHANGES

* Support for Stimulus 3.
* AutoSubmitFormController - Removed default debounce interval

### Features

* **Mixins:** New mixin useTemporaryContent for setting content of an element temporarily and restoring it either on demand or after a set time ([8f1d254](https://github.com/Sub-Xaero/stimulus-library/commit/8f1d254c78a1691b0e55ee4307030e37d2466789))
* AutoSubmitFormController - Change eventModeValue to support multiple events. Backwards compatible with old syntax. ([efaa124](https://github.com/Sub-Xaero/stimulus-library/commit/efaa1242a3772f20c840703f357590fa60fbfd67))
* AutoSubmitFormController - Removed default debounce interval ([7d0aa0b](https://github.com/Sub-Xaero/stimulus-library/commit/7d0aa0bf47b02b51c6575cdb54dfd35da78e36c2))
* Renamed `this.dispatch` to `this.dispatchEvent` to avoid collision with Stimulus 3. Stimulus 3 only supports dispatch on the controller root element, while dispatchEvent can be fired on any element. ([e7868e7](https://github.com/Sub-Xaero/stimulus-library/commit/e7868e780e7d61c962a0eefb113782a0385b616b))
* Support for Stimulus 3. ([60c84d8](https://github.com/Sub-Xaero/stimulus-library/commit/60c84d8ad46aff9745aaa2e25a5a79e6162fc2bf))
* **Mixins:** New mixin UseLocalstorage ([c323e7f](https://github.com/Sub-Xaero/stimulus-library/commit/c323e7f3e16f56686a85b56eb97735a559f982f8))


### Bug Fixes

* Exclude Trix/ActionText editors from AutoSubmitFormController, fixes Trix hyperlink dialogue submitting forms ([e0e2f52](https://github.com/Sub-Xaero/stimulus-library/commit/e0e2f52f50bc4191582ede7055c87a2e33380aab))

### [0.6.5](https://github.com/Sub-Xaero/stimulus-library/compare/v0.6.4...v0.6.5) (2021-12-06)


### Bug Fixes

* TableSortController - data-sort="false" property for preventing sort should be data-sortable="false" to avoid shadowing dataset property used internally to track current state of column ([cbcadb4](https://github.com/Sub-Xaero/stimulus-library/commit/cbcadb45ce0fbabfb2ea13da61cfe380777ffd11))

### [0.6.4](https://github.com/Sub-Xaero/stimulus-library/compare/v0.6.3...v0.6.4) (2021-12-06)


### Features

* TableSortController - Allow columns to be ignored when data-sort="false" is specified. ([8e71844](https://github.com/Sub-Xaero/stimulus-library/commit/8e71844d3d650f838eb49a0717a28c2c40068165))
* **Mixins:** useGeolocation - A mixin to enable a controller to subscribe to a device's location updates ([47d485d](https://github.com/Sub-Xaero/stimulus-library/commit/47d485d04bd00d71e421390c2a9ea564f1d666c2))
* Improvements to DetectDirtyController and DetectDirtyController to better handle changes in radio button groups ([c67bb05](https://github.com/Sub-Xaero/stimulus-library/commit/c67bb05f5200365d5a701dc7420daeadc916b201))
* New controller SignalActionController - A controller that receives value change updates from SignalInputController and can fire actions on other controllers. ([06df0c0](https://github.com/Sub-Xaero/stimulus-library/commit/06df0c02d5f5a04038dc0c5fe9791ce573c86708))
* SignalInputController now works as expected on radio button groups. Add some extra functionality to ensure that values sync up when the SignalInputController connects before the SignalVisibilityControllers. Add a configurable debounceIntervalValue to SignalInputController ([018d5a8](https://github.com/Sub-Xaero/stimulus-library/commit/018d5a8b79ff724859ef632bccf8be13826d3ff6))
* Throw an error in Signal controllers if the right-hand side of an expression is blank ([1d3eb68](https://github.com/Sub-Xaero/stimulus-library/commit/1d3eb6877bd154694ba5d7c6e7d904019f3ec6e7))


### Bug Fixes

* **Mixins:** Fix case where default classes was ignored in Stimulus2 polyfill for plural fooClasses method ([d949875](https://github.com/Sub-Xaero/stimulus-library/commit/d9498753f6cbeed31b8204c9d582d1e8d22c4cc1))
* Fix regex in ephemeral controller for whitespace ([8bd462f](https://github.com/Sub-Xaero/stimulus-library/commit/8bd462f4b58b0bd1311817887d54c72621108fb8))
* Fix Signal expressions being stripped of spaces, breaking compatibility with text inputs. Added better handling of whitespace to compensate. ([b0a494e](https://github.com/Sub-Xaero/stimulus-library/commit/b0a494e019a818db8bc89c1e3b23939efcc6523f))

### [0.6.3](https://github.com/Sub-Xaero/stimulus-library/compare/v0.6.2...v0.6.3) (2021-11-19)


### Features

* New pair of controllers SignalInputController and SignalVisibilityController. SignalInputController is a controller that broadcasts changes to an input's value, and SignalVisibilityController is a controller that can live anywhere in the DOM and react to named input events to hide or show content based on whether the value of the input matches simple predicates expressions i.e. `>3 && <10`. ([5e3db6c](https://github.com/Sub-Xaero/stimulus-library/commit/5e3db6c3c5fe6d7516a9b1f7a698767149c0eca7))
* **Controllers:** New utility controller FullscreenController for toggling fullscreen for a page or element in response to an event/action ([cad6d46](https://github.com/Sub-Xaero/stimulus-library/commit/cad6d4613575cbec6bf079367124d729d73171f7))
* **Mixins:** New mixin useFullscreen for enabling controllers to toggle fullscreen for a page or element ([533db5a](https://github.com/Sub-Xaero/stimulus-library/commit/533db5a5b83e3697b0356d05903a71afacc54b0e))
* Add functionality to AsyncBlock, PollBlock, LazyBlock and LoadBlock controllers to allow them to retry fetching content a set number of times when network errors occur. ([3368392](https://github.com/Sub-Xaero/stimulus-library/commit/33683923ad3a47e93565b87a4f5a5fcb484b1f2f))
* Add functionality to enable TrixModifierController to strip disallowed formatting from pasted text. ([acfa0a7](https://github.com/Sub-Xaero/stimulus-library/commit/acfa0a7f24a21017a9a8d5c6cbc27b14e6d0b922))
* AlertController - Small utility controller to fire alerts() in response to stimulus actions ([ca23d76](https://github.com/Sub-Xaero/stimulus-library/commit/ca23d76f55de26aa3532a27cc828098a2d26d009))
* AnchorSpyController - Add active and inactive classes to the controller element when the URL's hash matches, or doesnt match ([5ad8dbc](https://github.com/Sub-Xaero/stimulus-library/commit/5ad8dbc192dba8781e5a0513ab2ca7acf50415ca))
* CheckboxSelectAllController - Only tick checkboxes that are not readonly and not disabled ([fe9d185](https://github.com/Sub-Xaero/stimulus-library/commit/fe9d185bbe278fa93e349cc83139fbeb5447727f))
* CheckboxXORController - Controller to make a group of checkboxes behave like a radio button group where only one can be checked at a time. ([fb508bb](https://github.com/Sub-Xaero/stimulus-library/commit/fb508bb4ba8825c78fac00cc3c484f46a0a26f26))
* Controller for modifying ActionText/Trix behaviours. ([0d9c0ef](https://github.com/Sub-Xaero/stimulus-library/commit/0d9c0efa35d9f5fec8b3979fdc7b2ce868106246))
* NavigateFormErrorsController - Add current class to the element/error that is currently targeted by the controller ([a5ac9eb](https://github.com/Sub-Xaero/stimulus-library/commit/a5ac9ebeee8d3b5c27ea2ce045cf2de771f10a4b))
* **Mixins:** New mixins useCollectionEventListeners and useCollectionEventListener for adding event listeners to entire collections of elements ([f579b82](https://github.com/Sub-Xaero/stimulus-library/commit/f579b825397555f55aa8dd086541493a96bc80a2))


### Bug Fixes

* DurationController - Use new cleanup method for cleaning up event listeners early if errors occur during update ([e5682f8](https://github.com/Sub-Xaero/stimulus-library/commit/e5682f8f1ac59ab716e0ec8502438c22abb1aac8))
* Fix to FormRCController sometimes not submitting when form could not be detected from submit event ([cd29f13](https://github.com/Sub-Xaero/stimulus-library/commit/cd29f13e9a47f1e3ca3689e21b0ca3f84bd731f3))
* PresenceController - Fix event name not matching documentation ([0ab4011](https://github.com/Sub-Xaero/stimulus-library/commit/0ab40117e9289cc127b73f0010c90fede5f70fb0))

### [0.6.2](https://github.com/Sub-Xaero/stimulus-library/compare/v0.6.1...v0.6.2) (2021-11-03)


### Features

* Export more internal utilities for HTML insertion and DOM manipulation ([0c314e0](https://github.com/Sub-Xaero/stimulus-library/commit/0c314e039bc23688e2bbb67e548285487137f446))

### [0.6.1](https://github.com/Sub-Xaero/stimulus-library/compare/v0.6.0...v0.6.1) (2021-11-03)


### Features

* Export internal utilities as part of the library. Element manipulation, EventBus, scroll helpers, and form submission helpers ([d0b34d6](https://github.com/Sub-Xaero/stimulus-library/commit/d0b34d679b474a85f6831dd556015d91b58f4b1e))

## [0.6.0](https://github.com/Sub-Xaero/stimulus-library/compare/v0.5.0...v0.6.0) (2021-11-03)


### ⚠ BREAKING CHANGES

* Rename EnableInputsController and DisableInputsController to be CheckboxEnableInputsController and CheckboxDisableInputsController, to better describe the purpose of the controllers

### Features

* **Mixins:** Add mixins for injecting HTML that the controller needs, and auto-cleaning it up on disconnect ([77fe03c](https://github.com/Sub-Xaero/stimulus-library/commit/77fe03c29642e512b38ddc6f43182e88e41fb04d))
* Add submitMode value to FormRCController to allow changing between calling .submit and .requestSubmit ([7c057f1](https://github.com/Sub-Xaero/stimulus-library/commit/7c057f1efef48f848e77736415b9dc82a87a8738))
* AutosizeController - Fixed case when an autosize controller element starts life hidden, it will appear collased and incorrectly sized. It will now use an IntersectionObserver to resize on first appearance to the correct size. ([715d720](https://github.com/Sub-Xaero/stimulus-library/commit/715d720362b01611a3aea2388dab0fde1f4031af))
* EnableInputsController - Controller that provides an action that can enable/disable inputs ([2d2a51d](https://github.com/Sub-Xaero/stimulus-library/commit/2d2a51d9573ae0b5d7cc5550650f7682fc681eb2))
* Mixins - Created mixins useEventListener, useInterval, useTimeout, that can be called in controllers to install behaviours onto stimulus controllers and the behaviours will clean themselves up on disconnect. ([6cbf7e0](https://github.com/Sub-Xaero/stimulus-library/commit/6cbf7e0b3ecf1cfb022decca68854b69a61f558e))
* Rename EnableInputsController and DisableInputsController to be CheckboxEnableInputsController and CheckboxDisableInputsController, to better describe the purpose of the controllers ([1488469](https://github.com/Sub-Xaero/stimulus-library/commit/1488469fb98f9a06b60162b73bf3a6618ed0ef66))

## [0.5.0](https://github.com/Sub-Xaero/stimulus-library/compare/v0.4.0...v0.5.0) (2021-11-02)


### ⚠ BREAKING CHANGES

* AutoSubmitForm controller - Added new value to control the mode the controller uses to monitor inputs for events. Add new 'debounced' mode. Adds new debounceIntervalValue to allow users to customise the debounce interval in debounced mode. Changed modeValue to be submitModeValue to allow other modes like the new eventModeValue.

### Features

* AutoSubmitForm controller - Added new value to control the mode the controller uses to monitor inputs for events. Add new 'debounced' mode. Adds new debounceIntervalValue to allow users to customise the debounce interval in debounced mode. Changed modeValue to be submitModeValue to allow other modes like the new eventModeValue. ([f437706](https://github.com/Sub-Xaero/stimulus-library/commit/f437706baaa7ec3fe4c28e3d576ee889aaa460a4))
* FocusStealController - a controller to steal the users focus when a new input enters the page ([3cf7967](https://github.com/Sub-Xaero/stimulus-library/commit/3cf796755fe207ebf2336cc49faa6811d668f3df))
* PresenceController - Added an optional name value which if provided will be included in the presence event name so that other controllers can react to specific presence events if there are multiple in a given scope. ([a069d7b](https://github.com/Sub-Xaero/stimulus-library/commit/a069d7bf7f16e13db431dce1e98a96768238b26b))
* PrintController and PrintButtonController to enable buttons and actions to trigger the browser print dialogue ([ab95de7](https://github.com/Sub-Xaero/stimulus-library/commit/ab95de75d5c39db345099c30a013dae7a5b4c05d))

### [0.4.1](https://github.com/Sub-Xaero/stimulus-library/compare/v0.4.0...v0.4.1) (2021-10-09)


### Features

* FocusStealController - a controller to steal the users focus when a new input enters the page ([3cf7967](https://github.com/Sub-Xaero/stimulus-library/commit/3cf796755fe207ebf2336cc49faa6811d668f3df))

## [0.4.0](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.19...v0.4.0) (2021-10-08)


### ⚠ BREAKING CHANGES

* Change bundling setup to ViteJS. Outputs should be compatible, but releasing this as a breaking change for safety.

### Features

* Add data attribute to mark inputs as ignored for AutoSubmitFormController ([bc64359](https://github.com/Sub-Xaero/stimulus-library/commit/bc643598a6422dfb1a454a0e9b2995a1c5ae554b))
* Add the controller instance to the debug logging for actions and events ([0517f25](https://github.com/Sub-Xaero/stimulus-library/commit/0517f2529519bab83400f9d30b2fdac3be631bc8))
* Allow FormRCController to submit a form found either via a CSS selector or via a target ([d7c4ed4](https://github.com/Sub-Xaero/stimulus-library/commit/d7c4ed4dd613071f510057ad3e98283c25132878))
* Change bundling setup to ViteJS. Outputs should be compatible, but releasing this as a breaking change for safety. ([6c7ff8f](https://github.com/Sub-Xaero/stimulus-library/commit/6c7ff8f1b813526bf92f2360353d6a21bc303ccb))

### [0.3.19](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.18...v0.3.19) (2021-10-07)


### Features

* Change implementation of FormRCController to use requestSubmit, and requestReset to be close as possible to emulating a native button click. ([eaf9f4c](https://github.com/Sub-Xaero/stimulus-library/commit/eaf9f4c7af6fc92fce676a34e14ecb11760ce22e))

### [0.3.18](https://github.com/Sub-Xaero/stimulus-library/compare/v0.3.17...v0.3.18) (2021-10-07)


### Features

* RemoteFormController - Add an event for `remote-form:replace` to signify a replace has occurred ([c2663bb](https://github.com/Sub-Xaero/stimulus-library/commit/c2663bbb787b7980cb0b159b38d0aee68db7bae3))

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
