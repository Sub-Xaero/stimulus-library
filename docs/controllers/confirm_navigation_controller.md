# ConfirmNavigationController

## Purpose

Alert the user when they try to navigate away from a page that might have unsaved changes on it. Form submissions will not trigger the dialogue, but closing the page or navigating away will get a confirmation dialogue.

Works with Turbolinks and Hotwire/Turbo.

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

| Value | Type | Description | Default |
| --- | --- | --- | --- |
| `message` | String | The message to show to the user (if supported by the browser) | The native browser `are you sure?` dialogue |

## ** Events **

#### Events

[no-events](../_partials/no-events.md ':include')

## ** Side Effects **

Adds event listeners onto the `window`, and shows a confirmation dialogue for:
- `popstate`
- `submit`.
- `turbolinks:before-visit`
- `turbo:before-visit`.

Also adds a native confirmation dialogue using `window.onbeforeunload`, to detect tab closing. 

<!-- tabs:end -->

# How to Use

When an event occurs that would cause a page to be unloaded, replaced, or otherwise navigated away from:
this controller will show a confirm dialogue to the user with the specified message, that will cancel said event if the user clicks "cancel".

Therefore, to prevent accidental navigation on pages where you apply changes that might get lost. You might do: 
<!-- tabs:start -->
## ** HTML **
[example](../examples/confirm_navigation_controller.html ':include :type=code')
## ** HAML **
[example](../examples/confirm_navigation_controller.haml ':include :type=code')
<!-- tabs:end -->

Or if you are applying changes using Javascript that might get lost, 
you could add the following to prevent lost changes:

[example](../examples/confirm_navigation_controller.js ':include :type=code')
