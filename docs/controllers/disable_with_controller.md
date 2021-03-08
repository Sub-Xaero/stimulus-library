# DisableWithController

## Purpose

Disable an input/button/link when it is clicked, to prevent double-submissions.

Designed to emulate UJS's `data-disable="true"` and  `data-disable-with="Please wait..."` for new applications, particularly those using Hotwired. 

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

| Action | Purpose |
| --- | --- |
| `disable` | Disable the connected element, cache its default text/label and set its text/label to the `messageValue`. Repeated calls to `disable`  will simply `event.preventDefault` to prevent clicks on the disabled event. |
| `enable` | Enable the connected element, and restore its default text value/label. Calling `enable` on an element that has not been disabled is a no-op.  |


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
| `message` (Optional) | String | The text to show in the connected element while it is disabled | `"Submitting..."` |

## ** Events **

#### Events

[no-events](../_partials/no-events.md ':include')

## ** Side Effects **

Sets an event listener for `click` on the connected element that fires the `disable` action.

Sets a timeout using `setTimeout` with the provided/default `timeoutValue`. 

<!-- tabs:end -->

# How to Use

Example - when creating an event that can have the `end_time` turned off with a boolean:

<!-- tabs:start -->

## ** HTML **

[example](../examples/disable_with_controller.html ':include :type=code')

## ** HAML **

[example](../examples/disable_with_controller.haml ':include :type=code')
<!-- tabs:end -->
