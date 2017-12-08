import {ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {Homeworks} from '../../core/homeworks';

const COMPONENT: string = 'dropdown';

@Component({
    selector: 'works-dropdown',
    template: `
        <div #worksDropdown
            class="dropdown">
            <ng-content></ng-content>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
 })
export class WorksDropdown extends Homeworks {
    private $element: JQuery;
    private $dropdown: JQuery;

    @Input() direction: string;

    @Input() pen: string;

    @Input()
    set class(value: string) {
        this.setPropagateChildClass(this.elementRef.nativeElement, this.dropdownChild.nativeElement, value);
    }

    @ViewChild('worksDropdown') dropdownChild: ElementRef;

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
        context.$dropdown = jQuery(context.dropdownChild.nativeElement);
    }

    ngAfterViewInit() {
        const context = this;
        context.$dropdown.dropdown({
            target: context.pen ? $(context.pen) : null,
            direction: context.direction
        });
    }

    ngOnDestory() {
        const context = this;
        if (context.$element) {
            context.$element.remove();
        }
    }
}
