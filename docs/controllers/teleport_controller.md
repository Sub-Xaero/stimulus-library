# TeleportController

## Purpose

Transport an element from one place in the DOM, to another.

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

| Value | Type | Purpose | Default |
| --- | --- | --- | --- |
| `target` | String | The CSS selector corresponding to the desired position in the DOM | - |
| `insert` | String | How to add the element to the DOM. Possible values: | - |
| | | Any one of the parameters accepted by [`insertAdjacentHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) | - |  
| | | `replaceOuter` - replace the destination element entirely | - |
| | | `replaceInner` - replace the inner contents of the destination element | - |
| | | `prepend` - add the element as the first child of the destination element (alias for `afterbegin`)  | - |
| | | `append` - add the element as the last child of the destination element (alias for `beforeend`) | - |

## ** Events **

#### Events


| Event | When | `event.detail` |
| --- | --- | --- |
| `teleport:error` | When the controller cannot find the target destination from the given selector  | - |


## ** Side Effects **

None

<!-- tabs:end -->

# How to Use


```html

<div>
  <div data-controller="teleport" data-teleport-target-value="#blue-portal" data-teleport-insert-value="replaceInner">
    Aperture Science Experiment #11616
  </div>

  <div id="blue-portal">
    The cake is a lie.
  </div>
</div>


```

Results in

```html

<div>

  <div id="blue-portal">
    <div>
      Aperture Science Experiment #11616
    </div>
  </div>

</div>


```
