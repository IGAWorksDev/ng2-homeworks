﻿import { Component, Directive, ElementRef, Renderer, Input, Output, EventEmitter, forwardRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Homeworks } from '../../core/homeworks';

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
            [attr.disabled]="disabled"
            [attr.checked]="checked"
            [attr.readonly]="readonly"
            [attr.required]="required"
            [attr.value]="value" />
    `,
    changeDetection: ChangeDetectionStrategy.Default
})
export class WorksCheckbox extends Homeworks implements ControlValueAccessor {
    private $element: JQuery;
    private $checkbox: JQuery;
    private propagateChange: any = Function.prototype;
    private propagateTouch: any = Function.prototype;

    private m_model: any;
    private m_color: string;
    private m_value: string = '';

    @ViewChild('worksCheckbox') checkboxChild: ElementRef;

    get model(): any {
        return this.m_model;
    }
    set model(value: any) {
        this.m_model = value;
        this.propagateChange(value);
        this.render();
    }

    @Input()
    set class(value: string) {
        this.setPropagateChildClass(this.elementRef.nativeElement, this.checkboxChild.nativeElement, value);
    }

    @Input()
    get color(): string {
        return this.m_color;
    }
    set color(value: string) {
        this.m_color = value;
        this.setColor(this.checkboxChild.nativeElement, value);
    }

    @Input() type: string = 'checkbox';

    @Input() id: string;

    @Input() name: string;

    @Input() title: string;

    @Input() disabled: any;

    @Input() checked: any;

    @Input() readonly: any;

    @Input() required: any;

    @Input()
    get value(): any {
        return this.m_value;
    }
    set value(value: any) {
        this.m_value = value;
    }

    @Output('update')
    onUpdate: EventEmitter<HomeWorksEventObject> = new EventEmitter<HomeWorksEventObject>();

    constructor(
        protected renderer: Renderer,
        private elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT,
            ALIAS
        );
    }

    writeValue(value: any) {
        var context = this;
        context.model = value;
    }

    registerOnChange(fn: any) {
        var context = this;
        context.propagateChange = fn;
    }

    registerOnTouched(fn: any) {
        var context = this;
        context.propagateTouch = fn;
    }

    render() {
        var context = this;

        if (typeof context.$checkbox !== 'undefined') {
            context.$checkbox.triggerHandler('update');
        }
    }

    ngOnInit() {
        var context = this;

        context.$element = jQuery(context.elementRef.nativeElement);
        context.$checkbox = jQuery(context.checkboxChild.nativeElement);

        context.$checkbox
            .checkbox()
            .bind('change', event => {
                var value: HomeWorksEventObject = {
                    checked: context.$checkbox.prop('checked'),
                    value: context.$checkbox.val(),
                    element: context.$checkbox
                }

                var formValue: any = context.$checkbox.val();
                var formChecked: boolean = context.$checkbox.prop('checked');
                var formValueExists: boolean = typeof formValue !== 'undefined' && formValue !== null && formValue !== '';

                if (formChecked === true) {
                    if (formValueExists === true) {
                        context.model = context.$checkbox.val();
                    } else {
                        context.model = formChecked;                        
                    }
                } else {
                    if (formValueExists === true) {
                        context.model = '';
                    } else {
                        context.model = formChecked;
                    }
                }

                context.onUpdate.emit(value);
            });
    }
}