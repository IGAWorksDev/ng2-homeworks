import { ElementRef, Renderer2 } from '@angular/core';
import { Homeworks } from '../../core/homeworks';
export declare class WorksDropdown extends Homeworks {
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
