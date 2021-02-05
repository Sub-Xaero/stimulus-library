# LightboxImageController

## Purpose

To expand/show images in a lightbox view, for galleries or expanding thumbnails.

![lightbox_image_controller_example.gif](../_media/lightbox_image_controller_example.gif)

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

| Action | Purpose |
| --- | --- |
| `open` | Creates and opens a `<dialog>`, with a copy of the given image. |
| `close` | Called automatically when the used presses `Esc` or clicks away from the `<dialog>`, but can be called manually to close and remove the `<dialog>` and cleanup. |

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

[no-targets](../_partials/no-targets.md ':include')

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

| Class | Purpose | Default |
| --- | --- | --- |
| `modal` (Optional) | The class(es) to apply to the created `<dialog>` element | `image-lightbox-dialog` |
| `image` (Optional)| The class(es) to apply to the `<img>` inside the `<dialog>` | `image-lightbox-image` |

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Type | Description | Default |
| --- | --- | --- | --- |
| `src` (Optional) | String | If you wish to override the `src` given to the image rendered inside the `<dialogue>`  to be different to the `src` of the controller attached image | The `src` attribute of the controller element |
| `srcSet` (Optional) | String | If you wish to override the `srcSet` given to the image rendered inside the `<dialogue>`  to be different to the controller `srcSet` of the attached image | The `srcSet` attribute of the controller element |
| `sizes` (Optional) | String | If you wish to override the `sizes` given to the image rendered inside the `<dialogue>`  to be different to the `sizes` of the controller attached image | The `sizes` attribute of the controller element |

## ** Events **

#### Events

[no-events](../_partials/no-events.md ':include')

## ** Side Effects **

When the `open` action runs the controller will create a `<dialog>` element and insert it after the controller root element, and immediately open it.

There is also an event listener installed on the created `<dialog>` element to handle closing it when the user presses `Esc` or clicks away.

<!-- tabs:end -->

# How to Use

This controller needs to be mounted on an `<img>` tag to work. 

On the `open` action - the controller will create a `<dialog>` element, insert it into the DOM after the controller root element, and immediately open it. You will want to style this according to your application, some examples are given below.
The `<dialog>` will have only one element inside of it, a new `<img>` with the `src`, `srcset` and `sizes` attributes either taken from the values API or copied from the controller root element.

This uses the [DialogPolyfill](https://github.com/GoogleChrome/dialog-polyfill) library to make sure this behaviour is compatible with all browsers, but as such, is subject to the same limitations.

In particular - when styling the `::backdrop`(https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop) you will need to style both `dialog::backdrop` and `dialog + .backdrop` to account for the polyfilled behaviour.

### Warning

While in testing, this component has always performed perfectly - the polyfill mentioned above warns that if you experience issues with stacking contexts, and the dialogue not properly rendering at the topmost Z-Index, it is likely due to your browser having poor support for `<dialog>` and this library being able 
to fully mock the behaviour. [See the limitations section of DialogPolyfill]([DialogPolyfill](https://github.com/GoogleChrome/dialog-polyfill#limitations)) for more
information.


<!-- tabs:start -->

## ** HTML **

[example](../examples/lightbox_image_controller.html ':include :type=code')

## ** HAML **

[example](../examples/lightbox_image_controller.haml ':include :type=code')

## ** CSS **

[example](../examples/lightbox_image_controller.css ':include :type=code')
<!-- tabs:end -->
