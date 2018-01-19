import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { HomeworksManager } from '../../core/manager';

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
export class WorksOption extends HomeworksManager {
    private $element: JQuery;
    private $option: JQuery;
    private propagateChange: any = Function.prototype;
    private propagateTouch: any = Function.prototype;

    private _label: string;
    private _disabled: any;
    private _selected: any;
    private _value: string;

    @ViewChild('worksOption') optionChild: ElementRef;

    @Input()
    get label(): string {
        return this._label;
    }

    set label(value: string) {
        this._label = value;
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
    get selected(): any {
        return this._disabled;
    }

    set selected(value: any) {
        this._disabled = value;
        this.render();
    }

    @Input()
    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
        this.render();
    }

    constructor(
        protected renderer: Renderer2,
        private elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT
        );
    }

    render() {
        if (this.$option) {
            this.$option.closest('select').triggerHandler('update');
        }
    }

    ngOnInit() {
        this.$element = jQuery(this.elementRef.nativeElement);
        this.$option = jQuery(this.optionChild.nativeElement);
        this.$option.insertAfter(this.$element);
        this.$element.appendTo(this.$element.parent()).hide();
    }

    ngAfterViewInit() {
        this.render();
    }

    ngOnDestroy() {
        if (this.$option)
            this.$option.remove();
    }
}
