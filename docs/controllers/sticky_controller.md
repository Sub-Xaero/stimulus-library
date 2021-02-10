# StickyController

## Purpose

When a sticky element (that is, an element styled with CSS `position: sticky` - is "stuck", it is permanently in the viewport, we sometimes need a way to know when the viewport reaches/leaves
the "true" position of the element in the DOM to enable styling of sticky elements one way when they are fixed (or unstuck), and another way when they are sticky/stuck.

### Example Use Cases
- For a sticky navbar, you might want to know when the viewport leaves the bottom of the sticky element's "true" position so that you can shrink the navbar to be less obtrusive.
- For a sticky "action" bar, or bottom nav-bar, you want to know when the top of the element is entering/leaving the viewport so that you can inline it, instead of having it permanently stuck and obscuring end-of-page content.


![Sticky Action Bar](../_media/sticky_controller_example.gif)

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

[no-actions](../_partials/no-actions.md ':include')

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

[no-targets](../_partials/no-targets.md ':include')

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

| Class | Purpose | Default |
| --- | --- | --- |
| `stuck` | The class to apply the the sticky element when it is "stuck", and following the window.  | `stuck` |


## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Type | Description | Default |
| --- | --- | --- | --- |
| `mode` | String | One of `top` or `bottom`, as the position of where the magic element will be inserted relative to the bound sticky element.  | `top` |


## ** Events **

#### Events

[no-events](../_partials/no-events.md ':include')

## ** Side Effects **

Inserts a `magic` empty `<DIV>` element into the DOM adjacent to the element the controller is attached to, that is observed with an `IntersectionObserver`.

<!-- tabs:end -->

# How to Use

This controller, when attached to a sticky element, inserts an empty `magic` div element into the DOM. One that has no styles or content.
It is inserted either before or after the controller root element, based on `modeValue`, and then observed with an `IntersectionObserver`.

When the `magic` element is in the view, because it is directly adjacent to the sticky element's real position in the DOM, we know the 
sticky element is "unstuck". When the element leaves the view, we know the sticky element is "stuck".

We can then apply CSS classes to take advantage of this.

<!-- tabs:start -->
## ** HTML **
[example](../examples/sticky_controller.html ':include :type=code')
## ** SCSS **
[example](../examples/sticky_controller.scss ':include :type=code')
<!-- tabs:end -->
