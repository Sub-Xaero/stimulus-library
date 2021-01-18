# ResponsiveIFrame

## Purpose

To make seamless, responsive iframes that resize themselves to the size of their content.

This behaviour uses two controllers.

1. `ResponsiveIframeWrapperController`
1. `ResponsiveIframeBodyController`

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

[no-events](../_partials/no-events.md ':include')

## ** Side Effects **

`ResponsiveIframeWrapperController`

- Adds an event listener for `message` on the `window` for messages posted on the iframe it is attached to.

---

`ResponsiveIframeBodyController`

- Uses a [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) to observe the inner iframe `window` size.
- Passes `messages` to the iframe document's `window.parent` to get messages from the iframe body, to the outer document.

<!-- tabs:end -->

# How to Use

You need to have access to both the frame content, and the parent iframe.

On the parent iframe

<!-- tabs:start -->
## ** HTML **
[example](../examples/responsive_iframe_wrapper_controller.html ':include :type=code')
## ** HAML **
[example](../examples/responsive_iframe_wrapper_controller.haml ':include :type=code')
<!-- tabs:end -->

In the content page

<!-- tabs:start -->
## ** HTML **
[example](../examples/responsive_iframe_body_controller.html ':include :type=code')
## ** HAML **
[example](../examples/responsive_iframe_body_controller.haml ':include :type=code')
<!-- tabs:end -->

The `responsive-body` controller then installs a resize observer that uses the message-passing ability of the browser to pass messages to the enclosing parent document. Every time the document inside the iframe gets resized, it will report the recalculated size to the parent scope.

The parent scope listens for messages from iframes, and when it receives a message with the name
`iframe-body`, it will set the `height` of the iframe to the value passed.

You can then set a `max-height` on the `<iframe>` to make sure it fits your design and never grows too large. 
You can either fix the width, or let it be responsive - the ResizeObserver inside the `<iframe>` will handle any size changes and adjust the height automatically to compensate. 
