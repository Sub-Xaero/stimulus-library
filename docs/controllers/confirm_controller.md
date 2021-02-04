# ConfirmController

## Purpose

To allow links and forms to open a confirmation dialogue before proceeding with their default behaviour.

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-actions](../_partials/no-actions.md ':include')

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

[no-targets](../_partials/no-targets.md ':include')

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

[no-classes](../_partials/no-classes.md ':include')

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Type | Description | Default |
| --- | --- | --- | --- |
| `message` | String | The message to show to the user (if supported by the browser) | The native browser `are you sure?` dialogue |

## ** Events **

#### Events

| Event | When | Dispatched on | `event.detail` |
| --- | --- | --- | --- |
| `confirm:cancelled` | Fired when the user cancels the action | The controller element | - |


## ** Side Effects **

Adds event listeners to the controller root element. Either `submit` for forms, or `click`  for links.

Shows a native confirmation dialogue using `window.confirm` to the user with the specified message if they trigger the event.

<!-- tabs:end -->

# How to Use

On links/forms that would cause destructive/dangerous actions:

<!-- tabs:start -->
## ** HTML **
[example](../examples/confirm_controller.html ':include :type=code')
## ** HAML **
[example](../examples/confirm_controller.haml ':include :type=code')
<!-- tabs:end -->


