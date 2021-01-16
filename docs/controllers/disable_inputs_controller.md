# DisableInputsController

## Purpose

Disable other inputs if a checkbox is ticked.

## [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-actions](../_partials/no-actions.md ':include')

## [Targets](https://stimulus.hotwire.dev/reference/targets)

[no-targets](../_partials/no-targets.md ':include')

## [Classes](https://stimulus.hotwire.dev/reference/classes)

[no-classes](../_partials/no-classes.md ':include')

## [Values](https://stimulus.hotwire.dev/reference/values)

[no-values](../_partials/no-values.md ':include')

## Events

[no-events](../_partials/no-events.md ':include')

## Side Effects

None

# How to Use

Example - when creating an event that can have the `end_time` turned off with a boolean:

```html
<div class="cell medium-6" data-controller="disable-inputs">
  <label>
    What time does the event end?
    <input type="date" name="end_time" data-disable-inputs-target="disable"/>
  </label>
  <label>
    This event does not have an end time
    <input type="checkbox" data-disable-inputs-target="disabler"/>
  </label>
</div>
```

# See also

[EnableInputsController](./controllers/enable_inputs_controller.md)
