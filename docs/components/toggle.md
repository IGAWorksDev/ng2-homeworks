# Toggle Component

[:arrow_backward: Back to main page](../../README.md)

## Usage

*HTML*

```html
<!--
This simple HTML tag at below is all you need to use this feature.
-->
<works-toggle
    color="{normal | default | force | primary | cobalt | notice | alert | danger | success}"
    type="{type: string [=radio]}"
    id="{id: string}"
    name="{name: string}"
    title="{title: string}"
    disabled="{disabled | true | false}"
    checked="{checked | true | false}"
    readonly="{readonly | true | false}"
    required="{required | true | false}"
    placeholder="placeholder: string"
    value="value: string"
    ngModel="ngModel"
>
</works-toggle>
```

## Events

```html
<works-toggle
    (update)="onUpdate(event: homeworks.Event)"
>
</works-toggle>
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
<works-toggle id="homeworks-toggle" class="homeworks-toggle"
    [(ngModel)]="toggleValue"
    color="primary"
    checked="true"
    (update)="changesOccured($event);"
    placeholder="['Off Label', 'On Label']"
    value="Hello World!"
>
</works-toggle>
```

*Typescript*
```typescript
@Component({
    selector: 'example',
    templateUrl: 'templates/example'
})
export class Example {
    public toggleValue: string;

    ngOnInit() {    
    }

    changesOccured(value: homeworks.Event) {
        console.log('value', value);
    }
}
```
