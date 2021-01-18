# PasswordPeekController

## Purpose

Toggle a password input between `type="password"` and `type="text"` to allow the user to see what they have typed.

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

| Action | Purpose |
| --- | --- |
| `peak` | Turn the `password` input into a `text` input  |
| `hide` | Turn the `text` input into a `password` input |
| `toggle` | Toggle the input between `password` and `text` types |

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

| Target | Purpose | Default |
| --- | --- | --- |
| `password` | The password input to allow peeking on | - |


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

Within a wrapper that loads the controller, add an `input[type="password"]` with a `data-password-peek-target='password'`
and an adjacent button/link with `data-password-peek-target='button'`

<!-- tabs:start -->
## ** HTML **
[example](../examples/password_peek_controller.html ':include :type=code')
## ** HAML **
[example](../examples/password_peek_controller.haml ':include :type=code')
<!-- tabs:end -->
