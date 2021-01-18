# ToggleClassController

## Purpose

To toggle a class on an element, based on various optional interactions i.e. On Hover, On click-away, on direct-click


<!-- tabs:start -->

## ** Actions **

#### [Actions](https://stimulus.hotwire.dev/reference/actions)

| Action | Purpose |
| --- | --- |
| `toggle` | If the class is currently applied, removed it. Otherwise, add it. |
| `on` | Add the class if it is currently missing |
| `off` | Remove the class if it is currently applied |

## ** Targets **

#### [Targets](https://stimulus.hotwire.dev/reference/targets)

| Target | Purpose | Default |
| --- | --- | --- |
| `toggle` | The target to toggle the class on  | - |

## ** Classes **

#### [Classes](https://stimulus.hotwire.dev/reference/classes)

[no-classes](../_partials/no-classes.md ':include')

## ** Values **

#### [Values](https://stimulus.hotwire.dev/reference/values)

| Value | Type | Purpose | Default |
| --- | --- | --- | --- |
| `class` | String | The space separated list of classes to toggle | `-` |
| `mouseEnter` (Optional) | String | One of `on`, `off`, or `toggle`, what to do when the user's mouse enters the controller scope | `-` |
| `mouseLeave` (Optional) | String | One of `on`, `off`, or `toggle`, what to do when the user's mouse leaves the controller scope | `-` |
| `clickAway` (Optional) | Boolean | When the user clicks outside of the controller scope, should any previously toggled classes be toggled back | `-` |
| `initial` (Optional) | Boolean | If `true`, the controller will ensure the class is always present when the controller connects. If `false`, it will ensure the class is **not** present on `connect`. If the option is not specified then the class will be left as it is in the DOM | `-` |

**Note**: If you use Turbo/Turbolinks, it's best to specify a value for `initial`, otherwise the Turbo(links) cache can put the class into a strange state and the toggle will be inverted.

## ** Events **

#### Events

[no-events](../_partials/no-events.md ':include')

## ** Side Effects **

None

<!-- tabs:end -->

# How to Use

### Example - showing a dropdown menu on a click, and hiding it again if the user clicks away.

<!-- tabs:start -->
## ** HTML **
[example](../examples/toggle_class_controller_click.html ':include :type=code')
## ** HAML **
[example](../examples/toggle_class_controller_click.haml ':include :type=code')
<!-- tabs:end -->

![ezgif-3-697e3a644da7](https://user-images.githubusercontent.com/9960703/104182368-450ec700-5408-11eb-920b-becec527311d.gif)

### Example, showing an action button on hover

<!-- tabs:start -->
## ** HTML **
[example](../examples/toggle_class_controller_hover.html ':include :type=code')
## ** HAML **
[example](../examples/toggle_class_controller_hover.haml ':include :type=code')
<!-- tabs:end -->

![ezgif-3-dd9317a73732](https://user-images.githubusercontent.com/9960703/104182370-45a75d80-5408-11eb-8b3d-8feae48bbc5a.gif)
