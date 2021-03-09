# RemoteFormController

## Purpose

A Stimulus controller to deal with Rails UJS remote forms and their submission responses.

<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

| Action | Purpose |
| --- | --- |
| `replace` | Replace the attached form with the contents of the response. Needs to be wired up to the UJS `ajax:success` and/or `ajax:error` events. |

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
| `selector` (Optional) | String | A css selector to query the response with. The selected element(s) are what the attached form will be replaced with.  | The controller identifier. It looks for another form with the same controller in the response |

## ** Events **

#### Events

[no-events](../_partials/no-events.md ':include')

## ** Side Effects **

None

<!-- tabs:end -->

# How to Use

Annotate a Rails form with `data-remote: true` and add this controller. You can then send HTML responses from the server that this controller will pick up and replace the connected form element with.

<!-- tabs:start -->

## ** HTML/ERB **

[example](../examples/remote_form_controller.erb ':include :type=code')

## ** HAML **

[example](../examples/remote_form_controller.haml ':include :type=code')
<!-- tabs:end -->
