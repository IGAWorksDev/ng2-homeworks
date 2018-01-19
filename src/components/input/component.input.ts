import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output,
    Renderer2, ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HomeworksManager } from '../../core/manager';

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
            [disabled]="disabled"
            [readonly]="readonly"
            [required]="required"
            [attr.placeholder]="placeholder" />
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
export class WorksInput extends HomeworksManager implements ControlValueAccessor {
    @ViewChild('worksInput') inputChild: ElementRef;
    @Input() type: string = 'text';
    @Input() id: string;
    @Input() name: string;
    @Input() title: string;
    @Input() validation: boolean;
    @Output('update')
    onUpdate: EventEmitter<homeworks.Event> = new EventEmitter<homeworks.Event>();
    private $element: JQuery;
    private $input: JQuery;
    private propagateChange: any = Function.prototype;
    private propagateTouch: any = Function.prototype;
    private _model: any;
    private _color: string;
    private _size: string;
    private _disabled: any;
    private _readonly: any;
    private _required: any;
    private _placeholder: string;
    private _block: boolean;

    constructor(
        protected renderer: Renderer2,
        private elementRef: ElementRef,
        private changeDectecterRef: ChangeDetectorRef
    ) {
        super(
            renderer,
            COMPONENT
        );
    }

    @Input()
    set class(value: string) {
        this.setPropagateChildClass(this.elementRef.nativeElement, this.inputChild.nativeElement, value);
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
    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
        this.setColor(this.inputChild.nativeElement, value);
    }

    @Input()
    get size(): string {
        return this._size;
    }

    set size(value: string) {
        this._size = value;
        this.setSize(this.inputChild.nativeElement, value);
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

    get model(): any {
        return this._model;
    }

    set model(value: any) {
        this._model = value;
        this.propagateChange(value);
        this.changeDectecterRef.detectChanges();
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
        setTimeout(
            () => {
                if (this.$input)
                    this.$input.triggerHandler('update', this._model);
            },
            0
        );
    }

    onInput($event: Event) {
        const eventObject: homeworks.Event = {
            value: this.$element.val(),
            element: this.$element
        };
        this.onUpdate.emit(eventObject);
    }

    setBlock(block: boolean) {
        if (block) {
            if (this.$input) {
                this.$input.addClass('input-block');
                this.setRootElementClass(this.elementRef.nativeElement, 'block', true);
            }
        }
    }

    ngOnInit() {
        this.$element = jQuery(this.elementRef.nativeElement);
        this.$input = jQuery(this.inputChild.nativeElement);
        this.setBlock(this.block);
        this.$input
            .input()
            .on('input', event => {
                const value: homeworks.Event = {
                    value: this.$input.val(),
                    element: this.$input
                };
                this.onUpdate.emit(value);
            });
    }

    ngAfterViewInit() {
        this.render();
    }
}
