# DismissableController

## Purpose

Add the ability to dismiss/remove an element from the DOM. i.e. Notifications, Flash messages. alerts

<!-- tabs:start -->
## ** Actions **
#### [Actions](https://stimulus.hotwire.dev/reference/actions)

| Action | Purpose |
| --- | --- |
| dismiss | Removes the element from the DOM |

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

None

<!-- tabs:end -->
# How to Use

A good example is a flash message, rather than it staying on the page forever, allowing the user to dismiss it with a little 'X' in the corner.

```html
<div class="flash-alert notice" data-controller="dismissable" role="notice">
  <div class="col-start-3 col-span-8 text-center"> Something went wrong, batten down the hatches</div>
  <div class="col-span-2 text-right">
    <a class="btn secondary tiny mr-2" data-action="dismissable#dismiss">X</a>
  </div>
</div>
```

# Browser support / Necessary polyfills

Please reference https://caniuse.com/childnode-remove, you may need to polyfill `ChildNode.remove()` using https://www.npmjs.com/package/element-remove-polyfill
if you need to support IE11 or below. 
