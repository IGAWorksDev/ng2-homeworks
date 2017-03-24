# Toggle Component

## Usage

*HTML*

```html
<!--
You only need to use the HTML tag to use the feature.
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
    (update)="onUpdate(event: HomeWorksEventObject)"
>
</works-toggle>
```

- **update**
 
  This event will called when a toggle element change occurs.

## EventObject

- **HomeWorksEventObject**

  This object is the global event model of all HomeWorks component.

  All update events pass this model as a parameter.

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

    changesOccured(value: HomeWorksEventObject) {
        console.log('value', value);
    }
}
```