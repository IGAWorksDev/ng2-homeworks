import { Directive, ElementRef, Renderer, Input } from '@angular/core';
import { Homeworks } from '../../core/homeworks';

const COMPONENT: string = 'ripple';

@Directive({
    selector: 'works-ripple, [ripple]'
 })
export class WorksRipple extends Homeworks {
    private $element: JQuery;

    @Input() ripple: string;

    constructor(
        protected renderer: Renderer,
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