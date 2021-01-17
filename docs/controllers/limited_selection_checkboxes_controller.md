# LimitedSelectionCheckboxesController

## Purpose

To only allow a user to select a limited number of checkboxes

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-actions](../_partials/no-actions.md ':include')

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

| Target | Purpose | Default |
| --- | --- | --- |
| `input` | The checkbox inputs to be included in the restricted selection | - |
| `error` (Optional) | Where to show an error message when the user tries to select too many inputs | - |

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

[no-classes](../_partials/no-classes.md ':include')

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Type | Purpose | Default |
| --- | --- | --- | --- |
| `max` | Number | The maximum number of checkboxes that can be checked | - |
| `message` (Optional) | String | The error message to show when the user selects too many checkboxes | - |

## ** Events **

#### Events

| Event | When | `event.detail` |
| --- | --- |--- |
| `limited-selection:selection` | When the user checks a checkbox successfully | `target`: the element that the user selected |
| `limited-selection:too-many` | When the user tries to select too many checkboxes | `target`: the element that the user tried to select |

## ** Side Effects **

None

<!-- tabs:end -->

# How to Use

```html

<div data-controller="limited-selection-checkboxes" data-limited-selection-checkboxes-max-value="2" data-limited-selection-message-value="Please select a maximum of 3 flavours">
  <p> Pick 3 of your favourite ice cream flavours</p>
  <label>
    Chocolate
    <input type="checkbox"/>
  </label>
  <label>
    Vanilla
    <input type="checkbox"/>
  </label>
  <label>
    Strawberry
    <input type="checkbox"/>
  </label>
  <label>
    Coffee
    <input type="checkbox"/>
  </label>
  <label>
    Mint
    <input type="checkbox"/>
  </label>
  <label>
    Rum and Raisin
    <input type="checkbox"/>
  </label>
  <div class="input error" data-target="limited-selection-checkboxes.error"></div>
</div>

```
