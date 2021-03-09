# TurboFrameRefreshController

## Purpose

Refresh the contents of a remote turbo frame.


<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

| Action | Purpose |
| --- | --- |
| `refresh` | Sets the src of the connected `<TurboFrame>` to the same value it already has, triggering a content re-load  |

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
| `poll` | Boolean | Whether the the `<turbo-frame>` should periodically refresh itself | `false` |
| `interval` (Optional) | Number | The time, in milliseconds, between each refresh of the frame. | - |

## ** Events **

#### Events

[no-events](../_partials/no-events.md ':include')

## ** Side Effects **

Sets a timeout on the `window` using `setTimeout` if `pollValue` is true.

<!-- tabs:end -->

# How to Use

<!-- tabs:start -->

## ** HTML **

[example](../examples/turbo_frame_refresh_controller.html ':include :type=code')

## ** HAML **

[example](../examples/turbo_frame_refresh_controller.haml ':include :type=code')
<!-- tabs:end -->

