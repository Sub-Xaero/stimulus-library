# EmptyDOMController

## Purpose

Mainly for use with TurboStreams or AJAX loaded content that modifies a container interactively. When interactions mutate the DOM and add/remove content, detect when the container you attach the controller to becomes empty/not empty.

You can then style the controller, or show a nice placeholder when the container is empty, rather than showing empty space.

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-actions](../_partials/no-actions.md ':include')

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

[no-targets](../_partials/no-targets.md ':include')

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

| Class | Purpose | Default |
| --- | --- | --- | 
| `empty` (Optional) | The class to apply to the attached element when it is empty | `-` |

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Type | Purpose | Default |
| --- | --- | --- | --- |
| `scopeSelector` | String | A CSS selector to pass to `querySelectorAll` to limit what elements are included in the count of empty/not-empty | All child elements of controller element |

## ** Events **

#### Events

| Event | When | Dispatched on | `event.detail` |
| --- | --- | --- | --- |
| `dom:empty` | When the subtree of the attached element becomes empty | The controller element | - |
| `dom:not-empty` | When the subtree of the attached element is no longer empty | The controller element  | - |

## ** Side Effects **

None

<!-- tabs:end -->

# How to Use

## Simple Case

The controller emits an event `dom:empty` when the container becomes empty, and `dom:not-empty` when it is no longer empty. Use those events to hook up other Stimulus actions. This particular example toggles the hide/show of a nice status message when the container is empty.


<!-- tabs:start -->
## ** HTML **
[example](../examples/empty_dom_controller.html.erb ':include :type=code')
## ** HAML **
[example](../examples/empty_dom_controller.html.haml ':include :type=code')
<!-- tabs:end -->

## Advanced Case

You can scope what the controller watches for inside the container using a CSS selector in the `data-empty-dom-scope-selector-value` attribute.

The selector you specify will be used to `querySelectorAll` the children/subtree of the container you attach the controller too, and fire the
`dom:empty` and `dom:not-empty` events when the results of the query are empty/not empty.

<!-- tabs:start -->
## ** HTML **
[example](../examples/empty_dom_controller_advanced.html.erb ':include :type=code')
## ** HAML **
[example](../examples/empty_dom_controller_advanced.html.haml ':include :type=code')
<!-- tabs:end -->
