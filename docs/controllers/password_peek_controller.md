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

```html

<label for="email">
  Email:
  <input id="email" type="email">
</label>

<div class="input-group" data-controller="password-peek">
  <label for="password" class="input-group-label">
    Enter your password:
  </label>
  <input class="input-group-field" type="password" id="password" data-password-peek-target="password">
  <a href="" class="button input-group-button" data-action="password-peek#toggle">
    <i class="far fa-eye-slash"></i>
  </a>
</div>

```
