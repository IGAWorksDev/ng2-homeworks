import { Component, Directive, ElementRef, Renderer, Input, Output, EventEmitter, forwardRef, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Homeworks } from '../../core/homeworks';

const COMPONENT: string = 'input';

@Component({
    selector: 'works-input',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => WorksInput),
            multi: true
        }
    ],
    template: `
        <input #worksInput
            class="input"
            [(ngModel)]="model"
            [attr.type]="type"
            [attr.id]="id"
            [attr.name]="name"
            [attr.title]="title"
            [attr.disabled]="disabled"
            [attr.readonly]="readonly"
            [attr.required]="required"
            [attr.placeholder]="placeholder"
            [attr.value]="value" />
    `,
    styles: [`
        :host {
            display: inline-block;
            vertical-align: middle;
        }

        :host.block {
            display: block;
            vertical-align: initial;
        }
    `],
    host: {
        input: 'onInput($event)'
    },
    changeDetection: ChangeDetectionStrategy.Default
})
export class WorksInput extends Homeworks implements ControlValueAccessor {
    private $element: JQuery;
    private $input: JQuery;

    private propagateChange: any = Function.prototype;
    private propagateTouch: any = Function.prototype;

    private m_model: any;
    private m_color: string;
    private m_size: string;
    private m_placeholder: string;
    private m_block: boolean;

    @ViewChild('worksInput') inputChild: ElementRef;

    @Input()
    set class(value: string) {
        this.setPropagateChildClass(this.elementRef.nativeElement, this.inputChild.nativeElement, value);
    }

    @Input()
    get placeholder(): string {
        return this.m_placeholder;
    }
    set placeholder(value: string) {
        this.m_placeholder = value;
        this.changeDectecterRef.detectChanges();
        this.render();
    }

    @Input()
    get color(): string {
        return this.m_color;
    }
    set color(value: string) {
        this.m_color = value;
        this.setColor(this.inputChild.nativeElement, value);
    }

    @Input()
    get size(): string {
        return this.m_size;
    }
    set size(value: string) {
        this.m_size = value;
        this.setSize(this.inputChild.nativeElement, value);
    }

    @Input()
    get block(): any {
        return this.m_block;
    }
    set block(value: any) {
        if (typeof value !== 'undefined') {
            this.m_block = true;
        } else {
            this.m_block = false;
        }
    }

    @Input() type: string = 'text';

    @Input() id: string;

    @Input() name: string;

    @Input() title: string;

    @Input() disabled: any;

    @Input() readonly: any;

    @Input() required: any;

    @Input() validation: boolean;

    @Input() value: any;

    get model(): any {
        return this.m_model;
    }
    set model(value: any) {
        this.m_model = value;
        this.propagateChange(value);
        this.render();
    }

    @Output('update')
    onUpdate: EventEmitter<HomeWorksEventObject> = new EventEmitter<HomeWorksEventObject>();

    constructor(
        protected renderer: Renderer,
        private elementRef: ElementRef,
        private changeDectecterRef: ChangeDetectorRef
    ) {
        super(
            renderer,
            COMPONENT
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

        if (typeof context.$input !== 'undefined') {
            context.$input.triggerHandler('update');
        }
    }

    onInput($event: Event) {
        var context = this;

        var eventObject: HomeWorksEventObject = {
            value: context.$element.val(),
            element: context.$element
        };
        context.onUpdate.emit(eventObject);
    }

    setBlock(block: boolean) {
        let context = this;

        if (block === true) {
            if (typeof context.$input !== 'undefined') {
                context.$input.addClass('input-block');
                context.setRootElementClass(context.elementRef.nativeElement, 'block', true);
            }
        }
    }

    ngOnInit() {
        var context = this;

        context.$element = jQuery(context.elementRef.nativeElement);
        context.$input = jQuery(context.inputChild.nativeElement);
        
        context.setBlock(context.block);

        this.$input
            .input()
            .bind('input', event => {
                var value: HomeWorksEventObject = {
                    value: context.$input.val(),
                    element: context.$input
                }
                context.onUpdate.emit(value);
            });
    }
}