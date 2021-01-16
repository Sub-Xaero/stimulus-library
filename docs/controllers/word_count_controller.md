# WordCountController

## Purpose

Add a visual count of the number of words in a textarea/string input, with a option for highlighting min/max words.

## [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-actions](../_partials/no-actions.md ':include')

## [Targets](https://stimulus.hotwire.dev/reference/targets)

| Target | Purpose | Default |
| --- | --- | --- |
| `input` | The `<input>` or `<textarea>` to count words on | - |
| `output` | The place where the word count will be output | - |

## [Classes](https://stimulus.hotwire.dev/reference/classes)

| Class | Purpose |
| --- | --- |
| `error` (Optional) | The class to apply if the user does not meet the min/max words (if specified) |

## [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Purpose | Default |
| --- | --- | --- |
| `min` | The minimum number of words. This will add an `error` class (See: Classes) to the input if the min words are not met | - |
| `max` | The maximum number of words. This will add an `error` class (See: Classes) to the input if the max words are exceeded | - |

## Events

[no-events](../_partials/no-events.md ':include')

## Side Effects

The controller will add an event listener for `input` to the `input` target.

## How to Use

```html

<label>
  <abbr title="required" class="required">*</abbr>
  What is your quest?
  We suggest at least 250 words, but no more than 2000 words.
</label>
<div data-controller="word-count" data-word-count-min-value="250" data-word-count-max-value="2000">
  <textarea name="quest" data-word-count-target="input"></textarea>
  <div class="text-right">
    <span data-word-count-target="output"></span>
    <span data-word-count-target="output">/2000</span>
  </div>
</div>
```
