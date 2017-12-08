# Spinner Component

[:arrow_backward: Back to main page](../../README.md)

## Usage

*HTML*

```html
<!--
This simple HTML tag at below is all you need to use this feature.
-->
<works-spinner
    color="{normal | default | force | primary | cobalt | notice | alert | danger | success}"
    size="{extra large | large | medium | normal | small | extra small}"
    block
    id="{id: string}"
    name="{name: string}"
    title="{title: string}"
    disabled="{disabled | true | false}"
    readonly="{readonly | true | false}"
    required="{required | true | false}"
    placeholder="{placeholder: string}"
    ngModel="ngModel"
>
    <works-option
        label="{label: string}"
        selected="selected | true | false"
        disabled="disabled | true | false"
        value="value1"        
        >
        Option1
    </works-option>
    <works-option value="value2">Option2</works-option>
    <works-option value="value3">Option3</works-option>
</works-spinner>
```

## Events

```html
<works-spinner
    (update)="onUpdate(event: homeworks.Event)"
>
</works-spinner>
```

- **update**
 
  This event will be called when the spinner element's change occurs.

## EventObject

- **homeworks.Event**

  This object is the global event model used for everything in homeworks.

  All update events will be passed this object as a parameter.

*Typescript Definition*

```typescript
interface Event {
    element: JQuery;
    value: string;
    checked?: boolean;
}
```

## Example

*HTML*

```html
<works-spinner id="homeworks-spinner" class="homeworks-spinner"
    [(ngModel)]="spinnerValue"
    color="primary"
    size="large"
    block
    placeholder="This is an example element."
    (update)="changesOccured($event);"
>
    <works-option value="apple">Apple</works-option>
    <works-option value="banana">Banana</works-option>
</works-spinner>
```

*Typescript*
```typescript
@Component({
    selector: 'example',
    templateUrl: 'templates/example'
})
export class Example {
    public spinnerValue: string;

    ngOnInit() {
    }

    changesOccured(value: homeworks.Event) {
        console.log('value', value);
    }
}
```
