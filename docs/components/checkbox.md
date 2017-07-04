# Checkbox Component

[Back to main page](../../README.md)

## Usage

*HTML*

```html
<!--
This simple HTML tag at below is all you need to use this feature.
-->
<works-checkbox
    color="{normal | default | force | primary | cobalt | notice | alert | danger | success}"
    type="{type: string [=checkbox]}"
    id="{id: string}"
    name="{name: string}"
    title="{title: string}"
    disabled="{disabled | true | false}"
    checked="{checked | true | false}"
    readonly="{readonly | true | false}"
    required="{required | true | false}"
    value="value: string"
    ngModel="ngModel"
>
</works-checkbox>
```

## Events

```html
<works-checkbox
    (update)="onUpdate(event: HomeWorksEventObject)"
>
</works-checkbox>
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
<works-checkbox id="homeworks-checkbox" class="homeworks-checkbox"
    [(ngModel)]="checkboxValue"
    color="primary"
    (update)="changesOccured($event);"
    value="Hello World!"
>
</works-checkbox>
```

*Typescript*
```typescript
@Component({
    selector: 'example',
    templateUrl: 'templates/example'
})
export class Example {
    public checkboxValue: string;

    ngOnInit() {    
    }

    changesOccured(value: HomeWorksEventObject) {
        console.log('value', value);
    }
}
```
