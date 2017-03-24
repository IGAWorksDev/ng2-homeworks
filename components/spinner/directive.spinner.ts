﻿import { Component, Directive, ElementRef, Renderer, Input, Output, EventEmitter, forwardRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Homeworks } from '../../core/homeworks';

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
            [attr.disabled]="disabled"
            [attr.readonly]="readonly"
            [attr.required]="required"
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
export class WorksSpinner extends Homeworks implements ControlValueAccessor {
    private $element: JQuery;
    private $select: JQuery;
    private propagateChange: any = Function.prototype;
    private propagateTouch: any = Function.prototype;

    private m_model: any;
    private m_placeholder: string;
    private m_block: boolean;

    @ViewChild('worksSelect') selectChild: ElementRef;

    @Input()
    set class(value: string) {
        this.setPropagateChildClass(this.elementRef.nativeElement, this.selectChild.nativeElement, value);
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

    @Input() id: string;

    @Input() name: string;

    @Input() title: string;

    @Input() disabled: any;

    @Input() readonly: any;

    @Input() required: any;

    @Output('update')
    onUpdate: EventEmitter<HomeWorksEventObject> = new EventEmitter<HomeWorksEventObject>();

    get model(): any {
        return this.m_model;
    }
    set model(value: any) {
        this.m_model = value;
        this.propagateChange(value);
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

        if (typeof context.$select !== 'undefined') {
            context.$select.triggerHandler('update', context.m_model);
        }
    }

    setBlock(block: boolean) {
        let context = this;

        if (block === true) {
            if (typeof context.$select !== 'undefined') {
                context.$select.addClass('spinner-block');
                context.renderer.setElementClass(context.elementRef.nativeElement, 'block', true);
            }
        }
    }

    ngOnInit() {
        var context = this;

        context.$element = jQuery(context.elementRef.nativeElement);
        context.$select = jQuery(context.selectChild.nativeElement);

        context.$select
            .spinner({
            })
            .bind('change', event => {
                var value: HomeWorksEventObject = {
                    value: context.$select.val(),
                    element: context.$select
                };
                context.model = context.$select.val();
                context.onUpdate.emit(value);
            });

        context.setBlock(context.block);
    }
}