# ScrollIntoFocusController

## Purpose

For elements that demand the user's attention, scroll an element into the view as it appears.

[no-targets](../_partials/ephemeral.md ':include')

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-targets](../_partials/no-actions.md ':include')

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

[no-targets](../_partials/no-targets.md ':include')

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

[no-classes](../_partials/no-classes.md ':include')

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

See [scrollIntoView documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) for possible values.

**Note**: If the user's browser does not support smooth scrolling, the browser will ignore these values and scroll using the browser default. 

| Value | Type | Purpose | Default |
| --- | --- | --- | --- |
| `behaviour` | String | On of `auto`, `smooth` | `auto` |
| `block` | String | On of `center`, `end`, `nearest`, `start` | `start` |
| `inline` | String | On of `center`, `end`, `nearest`, `start` | `nearest` |

## ** Events **

#### Events

[no-classes](../_partials/no-events.md ':include')

## ** Side Effects **

None

<!-- tabs:end -->

# How to Use

<!-- tabs:start -->

## ** HTML **

[example](../examples/scroll_into_focus_controller.html ':include :type=code')

## ** HAML **

[example](../examples/scroll_into_focus_controller.haml ':include :type=code')
<!-- tabs:end -->
