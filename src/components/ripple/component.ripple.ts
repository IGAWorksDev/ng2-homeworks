import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { HomeworksManager } from '../../core/manager';

const COMPONENT: string = 'ripple';

@Directive({
    selector: 'works-ripple, [ripple]'
})
export class WorksRipple extends HomeworksManager {
    @Input() ripple: string;
    private $element: JQuery;

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
        this.$element = jQuery(this.elementRef.nativeElement);
        this.$element.ripple({
            theme: this.ripple
        });
    }
}
