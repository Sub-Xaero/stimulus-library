# CheckboxSelectAllController

## Purpose

Controller to enable select-all/select-none functionality for a group of checkboxes.

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-actions](../_partials/no-actions.md ':include')

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

| Target | Purpose | Default |
| --- | --- | --- |
| `selectAll` | The checkbox that controls the `Select All`/`Select None` functionality | - |
| `checkbox` | The checkboxes to be included in the `Select All`/`Select None` functionality | - |

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

[no-classes](../_partials/no-classes.md ':include')

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

[no-values](../_partials/no-values.md ':include')

## ** Events **

#### Events

[no-events](../_partials/no-events.md ':include')

## ** Side Effects **

The controller installs `change` events on all inputs that are annotated with `data-select-all-target="checkbox"`.

<!-- tabs:end -->
# How to Use

<!-- tabs:start -->
## ** HTML **
[example](../examples/checkbox_select_all_controller.html ':include :type=code')
## ** HAML **
[example](../examples/checkbox_select_all_controller.haml ':include :type=code')
<!-- tabs:end -->
