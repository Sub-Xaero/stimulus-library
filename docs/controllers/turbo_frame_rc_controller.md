# TurboFrameRCController

## Purpose

Remotely set the `src` of TurboFrames, and/or remotely clear their content.

### Use Case 1: Modal form.
![turbo_frame_rc_controller_example.gif](../_media/turbo_frame_rc_controller_example.gif)

### Use Case 2: Links to drive turbo-frame wrapped widgets
If you have an interactive widget/component wrapped in a turbo frame, you can use this links to swap
out the frame widget, or selectively load/unload it. 

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

| Action | Purpose |
| --- | --- |
| `setSrc` | Sets the src of the remote `<TurboFrame>` to the specified value, triggering a content load  |
| `clear` | Clear the `src` of the remote `<TurboFrame>`, and remove its `innerHTML` |
| `toggle` | If the `src` is empty, or different to the current specified value, calls `setSrc`. Otherwise, calls `clear` |

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

[no-targets](../_partials/no-targets.md ':include')

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

[no-classes](../_partials/no-classes.md ':include')

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Type | Purpose | Default |
| --- | --- | --- | --- |
| `frameId` | String | The ID of the frame to drive | - |
| `src` (Optional) | String | The URL set the remote frame's `src` to | If the controller root element is an `<a>`, the `href` of the element. Otherwise, throws an error. |
| `loadingMessage` (Optional) | String | The message to display while content is loading | - |

## ** Events **

#### Events

[no-events](../_partials/no-events.md ':include')

## ** Side Effects **

None

<!-- tabs:end -->

# How to Use

<!-- tabs:start -->

## ** HTML **
Example WIP
[comment]: <> ([example]&#40;../examples/turbo_frame_rc_controller.erb ':include :type=code'&#41;)

## ** HAML **
Example WIP
[comment]: <> ([example]&#40;../examples/turbo_frame_rc_controller.haml ':include :type=code'&#41;)
<!-- tabs:end -->

