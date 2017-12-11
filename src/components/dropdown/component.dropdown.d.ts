import { ElementRef, Renderer2 } from '@angular/core';
import { HomeworksManager } from "../../core/manager";
export declare class WorksDropdown extends HomeworksManager {
    protected renderer: Renderer2;
    private elementRef;
    private $element;
    private $dropdown;
    direction: string;
    pen: string;
    class: string;
    dropdownChild: ElementRef;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestory(): void;
}
