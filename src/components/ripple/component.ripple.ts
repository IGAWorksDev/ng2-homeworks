import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {HomeworksManager} from "../../core/manager";

const COMPONENT: string = 'ripple';

@Directive({
    selector: 'works-ripple, [ripple]'
 })
export class WorksRipple extends HomeworksManager {
    private $element: JQuery;

    @Input() ripple: string;

    constructor(
        protected renderer: Renderer2,
        private elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT
        );
    }

    ngOnInit() {
        const context = this;
        context.$element = jQuery(context.elementRef.nativeElement);
        context.$element.ripple({
            theme: context.ripple
        });
    }
}
