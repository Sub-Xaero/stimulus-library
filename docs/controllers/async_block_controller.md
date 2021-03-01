# AsyncBlockController

## Purpose

AJAX load heavy content after the initial page load, while showing a placeholder.

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-actions](../_partials/no-actions.md ':include')

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

| Target | Purpose | Default |
| --- | --- | --- |
| `replace` (Optional) | The element to replace when the fetch request succeed | The element the controller is mounted on |

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

[no-classes](../_partials/no-classes.md ':include')

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Type | Description | Default |
| --- | --- | --- | --- |
| `endpoint` | String | The URL to fetch content from | - |
| `errorMessage` (Optional) | String | The error message to display when the remote content fails to load | `This content failed to load` |
| `selector` (Optional) | String | The selector of the element(s) to extract from the returned response | Empty. The entire HTML response will be loaded |

## ** Events **

#### Events

| Event | When | Dispatched on | `event.detail` |
| --- | --- | --- | --- |
|`ajax:success` | When the content is fetch successfully | the controller root element | - |
|`ajax:error` | When the block fails to get a response from the endpoint | the controller root element | - |
|`ajax:complete` | When the request finishes, regardless of success or failure | the controller root element | - |

## ** Side Effects **

None

<!-- tabs:end -->

# How to Use

<!-- tabs:start -->
## ** HTML **
[example](../examples/async_block_controller.html ':include :type=code')
## ** HAML **
[example](../examples/async_block_controller.haml ':include :type=code')
<!-- tabs:end -->

The controller will send out a fetch request, and on success will replace the block with the HTML content of the response.

## See Also

[Lazy Block Controller](./controllers/lazy_block_controller.md)
