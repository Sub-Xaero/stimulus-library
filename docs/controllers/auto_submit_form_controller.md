# AutoSubmitFormController

## Purpose

Auto submit a form when input values change - i.e. autosave.

## Use Case

This is mostly useful in an application where you have inline-editing, possibly using [TurboFrames](https://turbo.hotwire.dev/handbook/frames)

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

Adds event listeners for `input` and `change` to all `<input>` `<textarea>` and `<select>` elements in the controller's scope

# How to Use

```html

<form action="" data-controller="auto-submit">
  <label>
    What is your quest?
    <textarea name="user[quest]"></textarea>
  </label>
</form>
```
