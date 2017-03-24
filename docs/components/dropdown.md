# Dropdown Component
 
[Back to main page](../../README.md)

## Usage

*HTML*

```html
<!--
You only need to use the HTML tag to use the feature.
-->
<works-dropdown
    direction="{left | right | center | top | bottom }"
    pen="{selector: string <Target elmeent's css query string>}"
>
</works-dropdown>
```

## Example

*HTML*

```html

<works-dropdown class="dropdown-example" 
    pen=".btn-menu" 
    direction="right">
    <a href="#" class="dropdown-menu" (click)="action1();">
        <span>Menu 1</span>
    </a>
    <a href="#" class="dropdown-menu" (click)="action2();">
        <span>Menu2</span>
    </a>
</works-dropdown>

<a href="#" class="btn-menu">Menu</a>
```
