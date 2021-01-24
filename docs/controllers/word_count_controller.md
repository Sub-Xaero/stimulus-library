# WordCountController

## Purpose

Add a visual count of the number of words in a textarea/string input, with a option for highlighting min/max words.

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-actions](../_partials/no-actions.md ':include')

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

| Target | Purpose | Default |
| --- | --- | --- |
| `input` | The `<input>` or `<textarea>` to count words on | - |
| `output` | The place where the word count will be output | - |

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

| Class | Purpose |
| --- | --- |
| `error` (Optional) | The class to apply if the user does not meet the min/max words (if specified) |

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Type | Description | Default |
| --- | --- | --- | --- |
| `min` | Number | The minimum number of words. This will add an `error` class (See: Classes) to the input if the min words are not met | 0 |
| `max` | Number | The maximum number of words. This will add an `error` class (See: Classes) to the input if the max words are exceeded | 99,999 |

## ** Events **

#### Events

[no-events](../_partials/no-events.md ':include')

## ** Side Effects **

The controller will add an event listener for `input` to the `input` target.

<!-- tabs:end -->

# How to Use

<!-- tabs:start -->
## ** HTML **
[example](../examples/word_count_controller.html ':include :type=code')
## ** HAML **
[example](../examples/word_count_controller.haml ':include :type=code')
<!-- tabs:end -->
