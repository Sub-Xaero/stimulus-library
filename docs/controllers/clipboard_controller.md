# ClipboardController

## Purpose

Controller for adding 'copy-to-clipboard' functionality to a link/button/etc, with support for progressive enhancement.

If 'copy' is supported, the controller will select the contents of the given input and execute a "copy".

If 'copy' is NOT supported by the browser the controller will simply select the contents of the given input for the user to be able to copy manually.

You can also wire up the controller to have a copy button, and an optional fallback button (i.e. "Select this text") to show if clipboard controls are not supported by the user's browser. Setting the `removeUnused` value to `true` will make the controller remove whichever target is unused.

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

| Action | Purpose |
| --- | --- |
| `select` | Selects the content of the `source` target |
| `copy` | Selects the content of the `source` target, and executes a copy, if supported |

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

| Target | Purpose | Default |
| --- | --- | --- |
| `source` | The `<input>`, `<select>` or `<textarea>` to select/copy the value from | - |
| `copy` (Optional) | The element to remove if `removeUnused`  value is `true` and copy **is** supported | - |
| `fallback` (Optional) | The element to remove if `removeUnused` value  is `true` and copy is **not** supported | - |

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

[no-classes](../_partials/no-classes.md ':include')

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Type | Purpose | Default |
| --- | --- | --- | --- |
| `removeUnusedValue` | Boolean | If `copy` is not supported by the browser, remove the `copy` target from the DOM. Otherwise remove the `fallback` target | false |

## ** Events **

#### Events

[no-events](../_partials/no-events.md ':include')

## ** Side Effects **

None

<!-- tabs:end -->

# How to Use

```html

<p> PIN:</p>
<div class="input-group" data-controller="clipboard" data-clipboard-remove-unused-value="true">
  <input type="text" class="input input-group-field" data-clipboard-target="source" readonly="readonly" value="1234"/>
  <a href="#" class="button input-group-button clipboard-button" data-action="clipboard#copy">
    <span data-clipboard-target="copy">
      <i class="far fa-clipboard"></i>
      Copy
    </span>
    <span data-clipboard-target="fallback">
      <i class="far fa-hand-pointer"></i>
      Select
    </span>
  </a>
</div>
```


