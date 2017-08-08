import { Component, Directive, ElementRef, Renderer, Input, Output, EventEmitter, forwardRef, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Homeworks } from '../../core/homeworks';

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
export class WorksToggle extends Homeworks implements ControlValueAccessor {
    private $element: JQuery;
    private $toggle: JQuery;
    private propagateChange: any = Function.prototype;
    private propagateTouch: any = Function.prototype;

    private m_model: any;
    private m_disabled: any;
    private m_checked: any;
    private m_readonly: any;
    private m_required: any;
    private m_placeholder: any;
    private m_color: string;

    @ViewChild('worksToggle') toggleChild: ElementRef;

    @Input('ngModel')
    get model() {
        return this.m_model;
    }
    set model(value: any) {
        this.m_model = value;
        this.propagateChange(value);
        if (value === true || value === false) {
            this.checked = value;
        }
        this.render();
    }

    @Input()
    get placeholder(): any {
        return this.m_placeholder;
    }
    set placeholder(value: any) {
        const context = this;

        if (value !== '') {
            try {
                if (typeof value !== 'undefined' && value !== null && value !== '') {
                    if (typeof value === 'string') {
                        value = value.replace(/\'/gi, "\"");
                        value = JSON.parse(value);
                    }
                } else {
                    value = null;
                }
            }
            catch (e) {
                value = null;
            }

            context.m_placeholder = value;

            if (typeof context.$toggle !== 'undefined') {
                context.$toggle.triggerHandler('update', {
                    placeholder: value
                });
            }
        }
    }

    @Input()
    get color(): string {
        return this.m_color;
    }
    set color(value: string) {
        this.m_color = value;
        this.setColor(this.toggleChild.nativeElement, value);
    }

    @Input()
    set class(value: string) {
        this.setPropagateChildClass(this.elementRef.nativeElement, this.toggleChild.nativeElement, value);
    }

    @Input() type: string = 'radio';

    @Input() id: string;

    @Input() name: string;

    @Input() title: string;

    @Input()
    get checked(): any {
        return this.m_checked;
    }

    set checked(value: any) {
        this.m_checked = value;
        this.changeDetectorRef.detectChanges();
        this.render();
    }

    @Input()
    get disabled(): any {
        return this.m_disabled;
    }

    set disabled(value: any) {
        this.m_disabled = value;
        this.render();
    }

    @Input()
    get readonly(): any {
        return this.m_readonly;
    }

    set readonly(value: any) {
        this.m_readonly = value;
        this.render();
    }

    @Input()
    get required(): any {
        return this.m_required;
    }

    set required(value: any) {
        this.m_required = value;
        this.render();
    }

    @Input() value: any;

    @Output('update')
    onUpdate: EventEmitter<any> = new EventEmitter();

    constructor(
        protected renderer: Renderer,
        private changeDetectorRef: ChangeDetectorRef,
        private elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT,
            ALIAS
        );
    }

    writeValue(value: any) {
        const context = this;
        context.model = value;
    }

    registerOnChange(fn: any) {
        const context = this;
        context.propagateChange = fn;
    }

    registerOnTouched(fn: any) {
        const context = this;
        context.propagateTouch = fn;
    }

    render() {
        const context = this;
        if (context.$toggle) {
            context.$toggle.triggerHandler('update');
        }
    }

    ngOnInit() {
        const context = this;
        context.$element = jQuery(context.elementRef.nativeElement);
        context.$toggle = jQuery(context.toggleChild.nativeElement);

        context.$toggle
            .toggle({
                placeholder: context.placeholder
            })
            .bind('change', (event: JQueryEventObject) => {
                const value: HomeWorksEventObject = {
                    checked: context.$toggle.prop('checked'),
                    value: context.$toggle.val(),
                    element: context.$toggle
                };
                context.onUpdate.emit(value);
            });
    }

    ngAfterViewInit() {
        const context = this;
        context.render();
    }
}