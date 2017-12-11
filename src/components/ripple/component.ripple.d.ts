import { ElementRef, Renderer2 } from '@angular/core';
import { HomeworksManager } from "../../core/manager";
export declare class WorksRipple extends HomeworksManager {
    protected renderer: Renderer2;
    private elementRef;
    private $element;
    ripple: string;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
}
