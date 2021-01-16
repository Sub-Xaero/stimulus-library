# LazyBlockController

## Purpose

AJAX load content, only when it comes into view, while showing a placeholder.

## [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-actions](../_partials/no-actions.md ':include')

## [Targets](https://stimulus.hotwire.dev/reference/targets)

| Target | Purpose | Default |
| --- | --- | --- |
| `replace` | The element to replace when the fetch request succeed | The element the controller is mounted on |

## [Classes](https://stimulus.hotwire.dev/reference/classes)

[no-classes](../_partials/no-classes.md ':include')

## [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Purpose | Default |
| --- | --- | --- |
| `endpoint` | The URL to fetch content from | - |


## Events

| Event | When | `event.detail` |
| --- | --- |--- |
|`ajax:success` | When the content is fetch successfully | -
|`ajax:error` | When the block fails to get a response from the endpoint | - |
|`ajax:complete` | When the request finishes, regardless of success or failure | - |

## Side Effects

None

## How to Use

```html

<div data-controller="lazy-block" data-lazy-block-endpoint-value="/cats/mr-tibbins" data-lazy-block-target="replace">
  <i class="fas fa-spinner fa-spin mr-10"></i>
  Loading, please wait .......
</div>
```

If the client browser supports IntersectionObserver, the controller will send out a Fetch request when the user scrolls near the element.

If the element is in the viewpoint on load, or browser does not support IntersectionObserver then the controller will lazy-load the content immediately.

# See Also

[Async Block Controller](./controllers/async_block_controller.md) 
