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
| `replace` | The element to replace when the fetch request succeed | The element the controller is mounted on |

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

[no-classes](../_partials/no-classes.md ':include')

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Type | Purpose | Default |
| --- | --- | --- | --- |
| `endpoint` | String | The URL to fetch content from | - |

## ** Events **

#### Events

| Event | When | `event.detail` |
| --- | --- |--- |
|`ajax:success` | When the content is fetch successfully | -
|`ajax:error` | When the block fails to get a response from the endpoint | - |
|`ajax:complete` | When the request finishes, regardless of success or failure | - |

## ** Side Effects **

None

<!-- tabs:end -->
# How to Use

[example](../examples/async_block_controller.html ':include :type=code')

The controller will send out a fetch request, and on success will replace the block with the HTML content of the response.

## See Also

[Lazy Block Controller](./controllers/lazy_block_controller.md)
