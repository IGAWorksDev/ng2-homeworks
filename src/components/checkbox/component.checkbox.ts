import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output,
    Renderer2, ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HomeworksManager } from '../../core/manager';

const COMPONENT: string = 'checkbox';
const ALIAS: string = 'input';

@Component({
    selector: 'works-checkbox',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => WorksCheckbox),
            multi: true
        }
    ],
    template: `
        <input #worksCheckbox
            class="input"
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
export class WorksCheckbox extends HomeworksManager implements ControlValueAccessor {
    @ViewChild('worksCheckbox') checkboxChild: ElementRef;
    @Input() type: string = 'checkbox';
    @Input() id: string;
    @Input() name: string;
    @Input() title: string;
    @Output('update')
    onUpdate: EventEmitter<homeworks.Event> =
        new EventEmitter<homeworks.Event>();
    private $element: JQuery;
    private $checkbox: JQuery;
    private propagateChange: any = Function.prototype;
    private propagateTouch: any = Function.prototype;
    private _model: any;
    private _color: string;
    private _disabled: any;
    private _checked: any;
    private _readonly: any;
    private _required: any;
    private _value: string = '';

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

    get model(): any {
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
    set class(value: string) {
        this.setPropagateChildClass(this.elementRef.nativeElement, this.checkboxChild.nativeElement, value);
    }

    @Input()
    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
        this.setColor(this.checkboxChild.nativeElement, value);
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
    get checked(): any {
        return this._checked;
    }

    set checked(value: any) {
        this._checked = value;
        this.changeDetectorRef.detectChanges();
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

    @Input()
    get value(): any {
        return this._value;
    }

    set value(value: any) {
        this._value = value;
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
        if (this.$checkbox) {
            this.$checkbox.triggerHandler('update');
        }
    }

    ngOnInit() {
        this.$element = jQuery(this.elementRef.nativeElement);
        this.$checkbox = jQuery(this.checkboxChild.nativeElement);

        this.$checkbox
            .checkbox()
            .on('change', event => {
                const value: homeworks.Event = {
                    checked: this.$checkbox.prop('checked'),
                    value: this.$checkbox.val(),
                    element: this.$checkbox
                }
                const formValue: any = this.$checkbox.val();
                const formChecked: boolean = this.$checkbox.prop('checked');
                const formValueExists: boolean = !!formValue;

                if (formChecked) {
                    if (formValueExists) {
                        this.model = this.$checkbox.val();
                    } else {
                        this.model = formChecked;
                    }
                } else {
                    if (formValueExists) {
                        this.model = '';
                    } else {
                        this.model = formChecked;
                    }
                }
                this.onUpdate.emit(value);
            });
    }

    ngAfterViewInit() {
        this.render();
    }
}
