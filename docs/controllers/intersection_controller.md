# IntersectionController

## Purpose

Utility controller to wire up other controller actions when an element comes into or leaves the viewport. 

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
| `threshold` | String | The single number or comma-separated list of thresholds to report intersection at. [See `IntersectionObserver` constructor options for more.](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)  | `0,1` |

## ** Events **

#### Events

| Event | When | Dispatched on | `event.detail` |
| --- | --- |--- | --- |
|`intersection:appear` | When the observed element enters the viewport | the controller root element | `element`: the observed controller root element |
|`intersection:disappear` | When the observed element leaves the viewport | the controller root element | `element`: the observed controller root element |

## ** Side Effects **

Installs an IntersectionObserver to watch the controller element

<!-- tabs:end -->

# How to Use

<!-- tabs:start -->

## ** HTML **

[example](../examples/intersection_controller.html ':include :type=code')

## ** HAML **

[example](../examples/intersection_controller.haml ':include :type=code')
<!-- tabs:end -->

