# EnableInputsController

## Purpose

Enable other inputs if a checkbox is ticked.

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

Example - preventing inputs until T&Cs are checked

```html

<div data-controller="disable-inputs">
  <label>
    I agree to the terms and conditions of use
    <input type="checkbox" name="agree_to_terms" data-disable-inputs-target="disabler"/>
  </label>
  <label>
    Some Other Input>
    <input type="text" name="some_other_input" data-enable-inputs-target="enable"/>
  </label>
  <label>
    Some Other Input 2
    <input type="text" name="some_other_input_2" data-enable-inputs-target="enable">
  </label>
</div>
```

# See also

[DisableInputsController](./controllers/disable_inputs_controller.md)
