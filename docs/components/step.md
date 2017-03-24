# Step Component

## Usage

*HTML*

```html
<!--
You only need to use the HTML tag to use the feature.
-->
<works-step
    active="activeIndex: number [=1] <Start from 1.>"
>
    <works-step-item
        title="{titleName: string}"
    >
    <!-- This area is the step content area. -->
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
 
  This event will called when a change to the step content occurs.

## EventObject

- **HomeWorksStepEventObject**

  The event model is used only the step component.

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