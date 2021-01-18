# PasswordConfirmController

## Purpose

Controller to alert users when setting/changing their password, that their passwords don't match.

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-actions](../_partials/no-actions.md ':include')

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

| Target | Purpose | Default |
| --- | --- | --- |
| `password` | All the `<input>`s you want to be included in the equality check  | - |

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

| Class | Purpose |
| --- | --- |
| `error` | The class to apply to all `password` targets when they don't match  |

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

[no-values](../_partials/no-values.md ':include')

## ** Events **

#### Events

| Event | When | Dispatched on | `event.detail` |
| --- | --- | --- | --- |
| `password-confirm:match` | When all inputs match  | The controller element | - |
| `password-confirm:no-match` | When not all inputs match  | The controller element | - |

## ** Side Effects **

The controller will add `change` event listeners to all `password` targets.

<!-- tabs:end -->

# How to Use

One, Two (or more, we don't presume) password fields, annotated as `data-password-confirm-target='password'`.

The controller will do nothing until all password target's values are filled in.

Once all passwords have a value:

- if all passwords **do not** match then the controller will add the `error` class (if specified) to all inputs, and emit an event for other controllers to hook into.
- if all passwords **match** then the controller will remove the `error` class (if specified) from all inputs, and emit an event for other controllers to hook into.

If the user then corrects an input, the process runs again - any applied `error` class will be removed, and the success event will fire.

### Example

<!-- tabs:start -->
## ** HTML **
[example](../examples/password_confirm_controller.html ':include :type=code')
## ** HAML **
[example](../examples/password_confirm_controller.haml ':include :type=code')
<!-- tabs:end -->
