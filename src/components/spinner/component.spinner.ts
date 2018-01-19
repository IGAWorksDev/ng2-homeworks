import {
    ChangeDetectionStrategy, Component, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2,
    ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HomeworksManager } from '../../core/manager';

const COMPONENT: string = 'spinner';

@Component({
    selector: 'works-spinner',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => WorksSpinner),
            multi: true
        }
    ],
    template: `
        <select #worksSelect 
            [(ngModel)]="model"
            [attr.id]="id"
            [attr.name]="name"
            [attr.title]="title"
            [disabled]="disabled"
            [attr.readonly]="readonly"
            [required]="required"
            [attr.placeholder]="placeholder" >
            <ng-content></ng-content>
        </select>
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
    changeDetection: ChangeDetectionStrategy.Default
})
export class WorksSpinner extends HomeworksManager implements ControlValueAccessor {
    @ViewChild('worksSelect') selectChild: ElementRef;
    @Input() id: string;
    @Input() name: string;
    @Input() title: string;
    @Output('update')
    onUpdate: EventEmitter<homeworks.Event> = new EventEmitter<homeworks.Event>();
    private $element: JQuery;
    private $select: JQuery;
    private propagateChange: any = Function.prototype;
    private propagateTouch: any = Function.prototype;
    private _model: any;
    private _disabled: any;
    private _readonly: any;
    private _required: any;
    private _placeholder: string;
    private _block: boolean;
    private _size: string;

    constructor(
        protected renderer: Renderer2,
        private elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT
        );
    }

    @Input()
    set class(value: string) {
        this.setPropagateChildClass(this.elementRef.nativeElement, this.selectChild.nativeElement, value);
    }

    @Input()
    get placeholder(): string {
        return this._placeholder;
    }

    set placeholder(value: string) {
        this._placeholder = value;
        this.render();
    }

    @Input()
    get block(): any {
        return this._block;
    }

    set block(value: any) {
        this._block = !!value;
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

    @Input()
    get size(): string {
        return this._size;
    }

    set size(value: string) {
        this._size = value;
        if (this.$select && this.$select.find('.spinner').length) {
            this.setSize(this.$select.find('.spinner')[0], value);
        }
    }

    get model(): any {
        return this._model;
    }

    set model(value: any) {
        this._model = value;
        this.propagateChange(value);
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
        if (this.$select) {
            this.$select.triggerHandler('update', this.model);
        }
    }

    setBlock(block: boolean) {
        if (block) {
            if (this.$element) {
                this.$element.find('.spinner').addClass('spinner-block');
                this.renderer.addClass(this.elementRef.nativeElement, 'block');
            }
        }
    }

    ngOnInit() {
        this.$element = jQuery(this.elementRef.nativeElement);
        this.$select = jQuery(this.selectChild.nativeElement);
        this.$select
            .spinner({})
            .on('change', event => {
                const value: homeworks.Event = {
                    value: this.$select.val(),
                    element: this.$select
                };
                this.model = this.$select.val();
                this.onUpdate.emit(value);

            });

        this.setBlock(this.block);
    }

    ngAfterViewInit() {
        this.render();
    }
}
