import { ElementRef, Renderer2 } from '@angular/core';
import { Homeworks } from '../../core/homeworks';
export declare class WorksRipple extends Homeworks {
    protected renderer: Renderer2;
    private elementRef;
    private $element;
    ripple: string;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
}
