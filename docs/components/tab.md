# Tab Component

[Back to main page](../../README.md)

## Usage

*HTML*

```html
<!--
You only need to use the HTML tag to use the feature.
-->
<works-tab
    active="activeIndex: number [=1] <Start from 1.>"
>
    <works-tab-item
        title="{titleName: string}"
    >
    <!-- This area is the tab content area. -->
    </works-tab-item>
</works-tab>
```

## Events

```html
<works-tab
    (move)="onMove(event: HomeWorksTabEventObject)"
>
</works-tab>
```

- **move**
 
  This event will called when a change to the tab content occurs.

## EventObject

- **HomeWorksTabEventObject**

  The event model is used only the tab component.

*Typescript Definition*

```typescript
declare interface HomeWorksTabEventObject {
    header: Array<JQuery>;
    index: number;
    length: number;
}
```

## Example

*HTML*

```html
<works-tab
    active="tabIndex"
    (move)="tabMove($event);"
>
    <works-tab-item
        title="Tab 1 title"
    >
        <div class="guide">
            Tab 1 contents
        </div>
    </works-tab-item>

    <works-tab-item
        title="Tab 2 title"
    >
        <div class="guide">
            Tab 2 contents
        </div>
    </works-tab-item>
</works-tab>
```

*Typescript*
```typescript
@Component({
    selector: 'example',
    templateUrl: 'templates/example'
})
export class Example {
    public tabIndex = 2;

    ngOnInit() {
    }

    tabMove(value: HomeWorksTabEventObject) {
        console.log('value', value);
    }
}
```
