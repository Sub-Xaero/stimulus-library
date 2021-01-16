# AutosizeController

## Purpose

Auto-resize text-areas when the amount of content inside them changes. Attach it to a textarea that you want to autosize, and forget about it.

**Note:**
Only works for user-initiated changes, if changes are made in JavaScript and `input` events are not emitted then the resize may not trigger.

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

- Adds event listeners to the attached element for `focus`, `input`.
- Uses a [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) to observe the `window`.
- Sets the `style.height` property on the element to the calculated height of the content.

## How to Use

```html

<textarea name="autosize"></textarea>
```

