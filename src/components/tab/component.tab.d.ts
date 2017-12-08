/// <reference types="homeworks" />
import { AfterContentInit, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { Homeworks } from '../../core/homeworks';
export declare class WorksTab extends Homeworks {
    protected renderer: Renderer2;
    private elementRef;
    private $element;
    private wrapperElement?;
    private m_active;
    activeChange: EventEmitter<number>;
    active: number;
    class: string;
    onMove: EventEmitter<homeworks.TabEvent>;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
export declare class WorksTabTitle extends Homeworks {
    protected renderer: Renderer2;
    elementRef: ElementRef;
    private $element;
    constructor(renderer: Renderer2, elementRef: ElementRef);
}
export declare class WorksTabItem extends Homeworks implements AfterContentInit {
    protected renderer: Renderer2;
    private elementRef;
    private $element;
    private m_title;
    private titleElement;
    private contentElement;
    titleChild: WorksTabTitle;
    title: string;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
}
