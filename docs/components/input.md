# Input Component

[:arrow_backward: Back to main page](../../README.md)

## Usage

*HTML*

```html
<!--
This simple HTML tag at below is all you need to use this feature.
-->
<works-input
    color="{normal | default | force | primary | cobalt | notice | alert | danger | success}"
    size="{extra large | large | medium | normal | small | extra small}"
    block
    type="{type: string [=text]}"
    id="{id: string}"
    name="{name: string}"
    title="{title: string}"
    disabled="{disabled | true | false}"
    readonly="{readonly | true | false}"
    required="{required | true | false}"
    validation="useValidate: boolean [=true]"
    placeholder="{placeholder: string}"
    value="{value: string}"
    ngModel="ngModel"
>
</works-input>
```

## Events

```html
<works-input
    (update)="onUpdate(event: HomeWorksEventObject)"
>
</works-input>
```

- **update**
 
  This event will be called when the spinner element's change occurs.

## EventObject

- **HomeWorksEventObject**

  This object is the global event model used for everything in homeworks.

  All update events will be passed this object as a parameter.

*Typescript Definition*

```typescript
declare interface HomeWorksEventObject {
    element: JQuery;
    value: string;
    checked?: boolean;
}
```

## Example

*HTML*

```html
<works-input id="homeworks-input" class="homeworks-input"
    [(ngModel)]="inputValue"
    color="primary"
    size="large"
    block
    placeholder="This is an example element."
    (update)="changesOccured($event);"
    value="Hello World!"
>
</works-input>
```

*Typescript*
```typescript
@Component({
    selector: 'example',
    templateUrl: 'templates/example'
})
export class Example {
    public inputValue: string;

    ngOnInit() {    
    }

    changesOccured(value: HomeWorksEventObject) {
        console.log('value', value);
    }
}
```
