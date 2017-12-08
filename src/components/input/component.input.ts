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
export class WorksInput extends Homeworks implements ControlValueAccessor {
    private $element: JQuery;
    private $input: JQuery;

    private propagateChange: any = Function.prototype;
    private propagateTouch: any = Function.prototype;

    private m_model: any;
    private m_color: string;
    private m_size: string;
    private m_disabled: any;
    private m_readonly: any;
    private m_required: any;
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

    @Input() validation: boolean;

    get model(): any {
        return this.m_model;
    }
    set model(value: any) {
        this.m_model = value;
        this.propagateChange(value);
        this.changeDectecterRef.detectChanges();
        this.render();
    }

    @Output('update')
    onUpdate: EventEmitter<HomeWorksEventObject> = new EventEmitter<HomeWorksEventObject>();

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
        setTimeout(() => {
            if (context.$input) {
                context.$input.triggerHandler('update', context.m_model);
            }
        }, 0);
    }

    onInput($event: Event) {
        const context = this;
        const eventObject: HomeWorksEventObject = {
            value: context.$element.val(),
            element: context.$element
        };
        context.onUpdate.emit(eventObject);
    }

    setBlock(block: boolean) {
        const context = this;
        if (block === true) {
            if (context.$input) {
                context.$input.addClass('input-block');
                context.setRootElementClass(context.elementRef.nativeElement, 'block', true);
            }
        }
    }

    ngOnInit() {
        const context = this;
        context.$element = jQuery(context.elementRef.nativeElement);
        context.$input = jQuery(context.inputChild.nativeElement);
        context.setBlock(context.block);
        context.$input
            .input()
            .on('input', event => {
                const value: HomeWorksEventObject = {
                    value: context.$input.val(),
                    element: context.$input
                }
                context.onUpdate.emit(value);
            });
    }

    ngAfterViewInit() {
        const context = this;

        context.render();
    }
}
