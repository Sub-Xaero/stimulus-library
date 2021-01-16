# AsyncBlockController

## Purpose

AJAX load heavy content after the initial page load, while showing a placeholder.

## [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-actions](../_partials/no-actions.md ':include')

## [Targets](https://stimulus.hotwire.dev/reference/targets)

| Target | Purpose | Default |
| --- | --- | --- |
| `replace` | The element to replace when the fetch request succeed | The element the controller is mounted on |

## [Classes](https://stimulus.hotwire.dev/reference/classes)

[no-classes](../_partials/no-classes.md ':include')

## [Values](https://stimulus.hotwire.dev/reference/values)

[no-values](../_partials/no-values.md ':include')

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

<div data-controller="async-block" data-endpoint="/cats/mr-tibbins" data-async-block-target="replace">
  <i class="fas fa-spinner fa-spin mr-10"></i>
  Loading, please wait ...
</div>
```

The controller will send out a fetch request, and on success will replace the block with the HTML content of the response.

## See Also

[Lazy Block Controller](./controllers/lazy_block_controller.md)
