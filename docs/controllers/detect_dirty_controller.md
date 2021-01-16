# DetectDirtyController

## Purpose

Track whether an `<input>`, `<textarea>` or `<select>` has changed their value from the value they loaded with.

Adds `data-dirty` to the input being watched if it changes value, and removes it if it returns to its initial value.

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

| Action | Purpose |
| --- | --- |
| `restore` | Return the input to its original value |

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

Adds `input` and `change` event listeners to the attached input.

<!-- tabs:end -->

# How to Use

### Tracking dirty inputs

```html

<input type="text" data-controller="dirty"/>
```

### Build behaviours / style around dirty attributes

#### CSS

```css
input[data-dirty], textarea[data-dirty], select[data-dirty] {
  border-color: red;
}
```

#### JS

```js
import {isDirty} from '../shared/detect_dirty_controller';

if (isDirty(element)) {
  console.log("Keep your hands off");
  element.controller.restore();
}

```
