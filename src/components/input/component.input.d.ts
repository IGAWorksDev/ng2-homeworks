/// <reference types="homeworks" />
import { ChangeDetectorRef, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { HomeworksManager } from "../../core/manager";
export declare class WorksInput extends HomeworksManager implements ControlValueAccessor {
    protected renderer: Renderer2;
    private elementRef;
    private changeDectecterRef;
    private $element;
    private $input;
    private propagateChange;
    private propagateTouch;
    private m_model;
    private m_color;
    private m_size;
    private m_disabled;
    private m_readonly;
    private m_required;
    private m_placeholder;
    private m_block;
    inputChild: ElementRef;
    class: string;
    placeholder: string;
    color: string;
    size: string;
    block: any;
    type: string;
    id: string;
    name: string;
    title: string;
    disabled: any;
    readonly: any;
    required: any;
    validation: boolean;
    model: any;
    onUpdate: EventEmitter<homeworks.Event>;
    constructor(renderer: Renderer2, elementRef: ElementRef, changeDectecterRef: ChangeDetectorRef);
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    render(): void;
    onInput($event: Event): void;
    setBlock(block: boolean): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
