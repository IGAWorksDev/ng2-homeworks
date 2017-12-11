import { Renderer2, ElementRef } from '@angular/core';
import { HomeworksManager } from "../../core/manager";
export declare class WorksOption extends HomeworksManager {
    protected renderer: Renderer2;
    private elementRef;
    private $element;
    private $option;
    private propagateChange;
    private propagateTouch;
    private m_label;
    private m_disabled;
    private m_selected;
    private m_value;
    optionChild: ElementRef;
    label: string;
    disabled: any;
    selected: any;
    value: string;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    render(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
