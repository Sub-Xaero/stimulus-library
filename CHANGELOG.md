# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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