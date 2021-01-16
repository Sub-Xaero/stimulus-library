# CharCountController

## Purpose

Add a visual count of the number of characters in a textarea/string input, with an option for highlighting min/max characters.

## [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-actions](../_partials/no-actions.md ':include')

## [Targets](https://stimulus.hotwire.dev/reference/targets)

| Target | Purpose | Default |
| --- | --- | --- |
| `input` | The `<input>` or `<textarea>` to count characters on | - |
| `output` | The place where the characters count will be output | - |

## [Classes](https://stimulus.hotwire.dev/reference/classes)

| Action | Purpose |
| --- | --- |
| `error` (Optional) | The class to apply if the user does not meet the min/max characters (if specified) |

## [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Type | Purpose | Default |
| --- | --- | --- | --- |
| `min` | Number | The minimum number of character. This will add an `error` class (See: Classes) to the input if the min character are not met | 0 |
| `max` | Number | The maximum number of character. This will add an `error` class (See: Classes) to the input if the max character are exceeded | 99,999 |

## Events

[no-events](../_partials/no-events.md ':include')

## Side Effects

The controller will add an event listener for `input` to the `input` target.

## How to Use

```html

<label>
  <abbr title="required" class="required">*</abbr>
  What is your quest?
  We suggest at least 250 characters, but no more than 2000 characters.
</label>
<div data-controller="char-count" data-char-count-min-value="250" data-char-count-max-value="2000">
  <textarea name="quest" data-char-count-target="input"></textarea>
  <div class="text-right">
    <span data-char-count-target="output"></span>
    <span data-char-count-target="output">/2000</span>
  </div>
</div>
```
