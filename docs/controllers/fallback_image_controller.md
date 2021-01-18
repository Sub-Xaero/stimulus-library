# FallbackImageController

## Purpose

If an image fails to load from the source, provide a fallback image, or hide it from the DOM altogether to prevent the unsightly little broken-image icon.

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

None

<!-- tabs:end -->

# How to Use

To make the image hide from the dom if it fails to load

<!-- tabs:start -->
## ** HTML **
[example](../examples/fallback_image_controller.html ':include :type=code')
## ** HAML **
[example](../examples/fallback_image_controller.haml ':include :type=code')
<!-- tabs:end -->

To make the image change its `src` to the provided placeholder URL if it fails to load.

*Please note:* If the placeholder URL you provide fails to load, there is no fallback - the borked image icon may still show. This controller relies on the `onError` behaviour of the `img` tag, but it may only run once.

<!-- tabs:start -->
## ** HTML **
[example](../examples/fallback_image_controller_placeholder.html ':include :type=code')
## ** HAML **
[example](../examples/fallback_image_controller_placeholder.haml ':include :type=code')
<!-- tabs:end -->
