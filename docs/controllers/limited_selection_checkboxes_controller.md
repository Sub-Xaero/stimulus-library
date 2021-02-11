# LimitedSelectionCheckboxesController

## Purpose

To only allow a user to select a limited number of checkboxes

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-actions](../_partials/no-actions.md ':include')

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

| Target | Purpose | Default |
| --- | --- | --- |
| `input` | The checkbox inputs to be included in the restricted selection | - |
| `error` (Optional) | Where to show an error message when the user tries to select too many inputs | - |

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

[no-classes](../_partials/no-classes.md ':include')

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Type | Description | Default |
| --- | --- | --- | --- |
| `max` | Number | The maximum number of checkboxes that can be checked | - |
| `message` (Optional) | String | The error message to show when the user selects too many checkboxes | - |

## ** Events **

#### Events

| Event | When | Dispatched on | `event.detail` |
| --- | --- | --- | --- |
| `limited-selection:selection` | When the user checks a checkbox successfully | the checkbox that was ticked | `target`: the element that the user selected |
| `limited-selection:too-many` | When the user tries to select too many checkboxes | the checkbox that was ticked | `target`: the element that the user tried to select |

## ** Side Effects **

None

<!-- tabs:end -->

# How to Use

<!-- tabs:start -->
## ** HTML **
[example](../examples/limited_selection_checkboxes_controller.html ':include :type=code')
## ** HAML **
[example](../examples/limited_selection_checkboxes_controller.haml ':include :type=code')
<!-- tabs:end -->
