# SelfDestructController

## Purpose

Remove elements a set amount of time after loading - primarily for flash notifications.

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
| `secondsValue` | Number | The number of seconds before the element removes itself from the DOM | - |


## ** Events **

#### Events

[no-events](../_partials/no-events.md ':include')

## ** Side Effects **

The element the controller is installed on will be removed from the DOM after the specified time.

<!-- tabs:end -->

# How to Use

```html

<div class="callout success" data-controller="self-destruct" data-self-destruct-seconds-value="5">
  <!-- Flash message, will disappear after 5 seconds -->
  Saved successfully!
</div>
```
