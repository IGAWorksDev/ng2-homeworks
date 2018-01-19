import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output,
    Renderer2, ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HomeworksManager } from '../../core/manager';

const COMPONENT: string = 'checkbox';
const ALIAS: string = 'input';

@Component({
    selector: 'works-toggle',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => WorksToggle),
            multi: true
        }
    ],
    template: `
        <input #worksToggle
            class="input"
            [attr.type]="type"
            [attr.type]="type"
            [attr.id]="id"
            [attr.name]="name"
            [attr.title]="title"
            [disabled]="disabled"
            [checked]="checked"
            [readonly]="readonly"
            [required]="required"
            [attr.value]="value" />
    `,
    changeDetection: ChangeDetectionStrategy.Default
})
export class WorksToggle extends HomeworksManager implements ControlValueAccessor {
    @ViewChild('worksToggle') toggleChild: ElementRef;
    @Input() type: string = 'radio';
    @Input() id: string;
    @Input() name: string;
    @Input() title: string;
    @Input() value: any;
    @Output('update')
    onUpdate: EventEmitter<any> = new EventEmitter();
    private $element: JQuery;
    private $toggle: JQuery;
    private propagateChange: any = Function.prototype;
    private propagateTouch: any = Function.prototype;
    private _model: any;
    private _disabled: any;
    private _checked: any;
    private _readonly: any;
    private _required: any;
    private _placeholder: any;
    private _color: string;

    constructor(
        protected renderer: Renderer2,
        private changeDetectorRef: ChangeDetectorRef,
        private elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT,
            ALIAS
        );
    }

    @Input('ngModel')
    get model() {
        return this._model;
    }

    set model(value: any) {
        this._model = value;
        this.propagateChange(value);
        if (value === true || value === false) {
            this.checked = value;
        }
        this.render();
    }

    @Input()
    get placeholder(): any {
        return this._placeholder;
    }

    set placeholder(value: any) {
        let parseValue: any = value;
        if (value) {
            try {
                if (typeof value === 'string') {
                    const targetString: string = value.replace(/\'/gi, '\"');
                    parseValue = JSON.parse(targetString);
                }
            } catch (e) {
                ;
            }

            this._placeholder = parseValue;

            if (this.$toggle)
                this.$toggle.triggerHandler('update', {
                    placeholder: value
                });
        }
    }

    @Input()
    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
        this.setColor(this.toggleChild.nativeElement, value);
    }

    @Input()
    set class(value: string) {
        this.setPropagateChildClass(this.elementRef.nativeElement, this.toggleChild.nativeElement, value);
    }

    @Input()
    get checked(): any {
        return this._checked;
    }

    set checked(value: any) {
        this._checked = value;
        this.changeDetectorRef.detectChanges();
        this.render();
    }

    @Input()
    get disabled(): any {
        return this._disabled;
    }

    set disabled(value: any) {
        this._disabled = value;
        this.render();
    }

    @Input()
    get readonly(): any {
        return this._readonly;
    }

    set readonly(value: any) {
        this._readonly = value;
        this.render();
    }

    @Input()
    get required(): any {
        return this._required;
    }

    set required(value: any) {
        this._required = value;
        this.render();
    }

    writeValue(value: any) {
        this.model = value;
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) {
        this.propagateTouch = fn;
    }

    render() {
        if (this.$toggle) {
            this.$toggle.triggerHandler('update');
        }
    }

    ngOnInit() {
        this.$element = jQuery(this.elementRef.nativeElement);
        this.$toggle = jQuery(this.toggleChild.nativeElement);

        this.$toggle
            .toggle({
                placeholder: this.placeholder
            })
            .on('change', (event: JQuery.Event) => {
                const value: homeworks.Event = {
                    checked: this.$toggle.prop('checked'),
                    value: this.$toggle.val(),
                    element: this.$toggle
                };
                this.onUpdate.emit(value);
            });
    }

    ngAfterViewInit() {
        this.render();
    }
}
