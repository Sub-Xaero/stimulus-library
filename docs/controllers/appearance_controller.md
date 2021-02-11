# AppearanceController

## Purpose

A utility controller to wire up other stimulus actions when the user is active on a page, and when the page gets minimised/loses focus.

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

[no-values](../_partials/no-values.md ':include')

## ** Events **

#### Events

| Event | When | Dispatched on | `event.detail` |
| --- | --- | --- |--- |
|`appearance:appear` | When the user becomes active on the page | the controller root element | - |
|`appearance:away` | When the page gets minimized or loses focus | the controller root element | - |

## ** Side Effects **

The controller will install event listeners for:

`Window`:
- `focus`
- `blur`


`Document`:
- `visibilitychange`

<!-- tabs:end -->

# How to Use

<!-- tabs:start -->

## ** HTML **

[example](../examples/appearance_controller.html ':include :type=code')

## ** HAML **

[example](../examples/appearance_controller.haml ':include :type=code')
<!-- tabs:end -->

