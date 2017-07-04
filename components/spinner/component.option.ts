import { Component, Directive, ElementRef, Renderer, Input, Output, EventEmitter, forwardRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Homeworks } from '../../core/homeworks';

const COMPONENT: string = 'option';

@Component({
    selector: 'works-option',
    providers: [
    ],
    template: `
        <option #worksOption 
            [attr.label]="label"
            [disabled]="disabled"
            [selected]="selected"
            [attr.value]="value"
            >
            <ng-content></ng-content>
        </option>
    `,
    styles: [
    ],
    changeDetection: ChangeDetectionStrategy.Default
})
export class WorksOption extends Homeworks {
    private $element: JQuery;
    private $option: JQuery;
    private propagateChange: any = Function.prototype;
    private propagateTouch: any = Function.prototype;

    private m_label: string;
    private m_disabled: any;
    private m_selected: any;
    private m_value: string;

    @ViewChild('worksOption') optionChild: ElementRef;

    @Input()
    get label(): string {
        return this.m_label;
    }

    set label(value: string) {
        this.m_label = value;
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
    get selected(): any {
        return this.m_disabled;
    }

    set selected(value: any) {
        this.m_disabled = value;
        this.render();
    }

    @Input()
    get value(): string {
        return this.m_value;
    }

    set value(value: string) {
        this.m_value = value;
        this.render();
    }

    constructor(
        protected renderer: Renderer,
        private elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT
        );
    }

    render() {
        const context = this;
        if (typeof context.$option !== 'undefined') {
            context.$option.closest('select').triggerHandler('update');
        }
    }

    ngOnInit() {
        const context = this;
        context.$element = jQuery(context.elementRef.nativeElement);
        context.$option = jQuery(context.optionChild.nativeElement);
        context.$option.insertAfter(context.$element);
        context.$element.appendTo(context.$element.parent()).hide();
    }

    ngAfterViewInit() {
        const context = this;
        context.render();
    }
}