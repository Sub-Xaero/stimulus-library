# ScrollToController

## Purpose

Enable links to scroll to arbitrary elements using smooth-scroll.

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

| Action | Purpose |
| --- | --- |
| `scroll` | Perform the scroll |

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

[no-targets](../_partials/no-targets.md ':include')

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

[no-classes](../_partials/no-classes.md ':include')

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

See [scrollIntoView documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) for possible values to `behaviour`, `block`, and `inline`.

**Note**: If the user's browser does not support smooth scrolling, the browser will ignore these values and scroll using the browser default.

| Value | Type | Description | Default |
| --- | --- | --- | --- |
| `target` | String | A CSS selector to the element you wish to scroll to | - |
| `behaviour` | String | One of `auto`, `smooth` | `auto` |
| `block` | String | One of `center`, `end`, `nearest`, `start` | `start` |
| `inline` | String | One of `center`, `end`, `nearest`, `start` | `nearest` |

## ** Events **

#### Events

[no-classes](../_partials/no-events.md ':include')

## ** Side Effects **

None

<!-- tabs:end -->

# How to Use

<!-- tabs:start -->

## ** HTML **

[example](../examples/scroll_to_controller.html ':include :type=code')

## ** HAML **

[example](../examples/scroll_to_controller.haml ':include :type=code')
<!-- tabs:end -->
