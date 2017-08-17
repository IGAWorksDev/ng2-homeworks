# Step Component

[:arrow_backward: Back to main page](../../README.md)

## Usage

*HTML*

```html
<!--
This simple HTML tag at below is all you need to use this feature.
-->
<works-step
    active="activeIndex: number [=1] <Start from 1.>"
>
    <works-step-item
        title="{titleName: string}"
    >
    <!-- This area is the step content area. -->
    </works-step-item>
    <works-step-item
        title="{titleName: string}"
    >
        <works-step-title>
        <!--
        If you want to display the title as HTML, This could be help.
        The content inside in this tag will be displayed instead title attribute value of works-step-item.
        -->
        </works-step-title>
    </works-step-item>
</works-step>
```

## Events

```html
<works-step
    (move)="onMove(event: HomeWorksStepEventObject)"
>
</works-step>
```

- **move**
 
  This event will be called when the spinner element's change occurs.

## EventObject

- **HomeWorksStepEventObject**

  This event model is used only the step component.

*Typescript Definition*

```typescript
declare interface HomeWorksStepEventObject {
    header: Array<JQuery>;
    index: number;
    length: number;
}
```

## Example

*HTML*

```html
<works-step
    active="stepIndex"
    (move)="stepMove($event);"
>
    <works-step-item
        title="Step 1 title"
    >
        <div class="guide">
            Step 1 contents
        </div>
    </works-step-item>

    <works-step-item
        title="Step 2 title"
    >
        <div class="guide">
            Step 2 contents
        </div>
    </works-step-item>
</works-step>
```

*Typescript*
```typescript
@Component({
    selector: 'example',
    templateUrl: 'templates/example'
})
export class Example {
    public stepIndex = 2;

    ngOnInit() {
    }

    stepMove(value: HomeWorksStepEventObject) {
        console.log('value', value);
    }
}
```
