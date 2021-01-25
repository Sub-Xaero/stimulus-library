# FormSaveController

## Purpose

Save the value of a form and all of its inputs to LocalStorage, and restore it, at will.

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

| Action | Purpose |
| --- | --- |
| `save` | Save the contents of the form to localstorage |
| `restore` | Restore the form to its previous state from localstorage |
| `clear` | Clear any saved state from localstorage |

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
| `id` | `String` | The unique ID of this form on the page. This combined with the current URL will allow multiple forms on the same page to all save.  | The ID of the controller root element, or throw an error an ID is not found and this is not specified |
| `restoreOnLoad` | `Boolean` | Whether the controller should try to restore any previous state when the controller connects | true |
| `clearOnSubmit` | `Boolean` | Whether the controller should clean out the saved value when the form submits | true |

## ** Events **

#### Events

| Event | When | Dispatched on | `event.detail` |
| --- | --- | --- | --- |
| `form-save:cleared` | When the form is cleared, either by `submit` or when triggered by an action | The controller root element (the form) | - |
| `form-save:save:success` | When the form saves successfully | The controller root element (the form) | - |
| `form-save:restore:success` | When the form restores values successfully | The controller root element (the form) | - |
| `form-save:restore:empty` | When a restore is triggered, but there is nothing in localstorage to restore | The controller root element (the form) | - |



## ** Side Effects **

If  the `clearOnSubmit` value is set to `true`, a `submit` event listener will be installed on the form. 

<!-- tabs:end -->

# How to Use

<!-- tabs:start -->

## ** HTML **

[example](../examples/form_save_controller.html ':include :type=code')

## ** HAML **

[example](../examples/form_save_controller.haml ':include :type=code')
<!-- tabs:end -->

