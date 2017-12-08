import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Input,
    Output,
    Renderer2,
    ViewChild
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Homeworks} from '../../core/homeworks';

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
export class WorksCheckbox extends Homeworks implements ControlValueAccessor {
    private $element: JQuery;
    private $checkbox: JQuery;
    private propagateChange: any = Function.prototype;
    private propagateTouch: any = Function.prototype;

    private m_model: any;
    private m_color: string;
    private m_disabled: any;
    private m_checked: any;
    private m_readonly: any;
    private m_required: any;
    private m_value: string = '';

    @ViewChild('worksCheckbox') checkboxChild: ElementRef;

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

    get model(): any {
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

    @Input()
    get disabled(): any {
        return this.m_disabled;
    }

    set disabled(value: any) {
        this.m_disabled = value;
        this.render();
    }

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

    @Input()
    get value(): any {
        return this.m_value;
    }
    set value(value: any) {
        this.m_value = value;
        this.render();
    }

    @Output('update')
    onUpdate: EventEmitter<homeworks.Event> =
        new EventEmitter<homeworks.Event>();

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

    render() {
        const context = this;
        if (context.$checkbox) {
            context.$checkbox.triggerHandler('update');
        }
    }

    ngOnInit() {
        const context = this;

        context.$element = jQuery(context.elementRef.nativeElement);
        context.$checkbox = jQuery(context.checkboxChild.nativeElement);

        context.$checkbox
            .checkbox()
            .on('change', (event: JQuery.Event) => {
                const value: homeworks.Event = {
                    checked: context.$checkbox.prop('checked'),
                    value: context.$checkbox.val(),
                    element: context.$checkbox
                }
                const formValue: any = context.$checkbox.val();
                const formChecked: boolean = context.$checkbox.prop('checked');
                const formValueExists: boolean = typeof formValue !== 'undefined' && formValue !== null && formValue !== '';

                if (formChecked) {
                    if (formValueExists) {
                        context.model = context.$checkbox.val();
                    }
                    else {
                        context.model = formChecked;
                    }
                }
                else {
                    if (formValueExists) {
                        context.model = '';
                    }
                    else {
                        context.model = formChecked;
                    }
                }
                context.onUpdate.emit(value);
            });
    }

    ngAfterViewInit() {
        const context = this;
        context.render();
    }
}
