import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { HomeworksManager } from '../../core/manager';

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
export class WorksDropdown extends HomeworksManager {
    @Input() direction: string;
    @Input() pen: string;
    @ViewChild('worksDropdown') dropdownChild: ElementRef;
    private $element: JQuery;
    private $dropdown: JQuery;

    constructor(
        protected renderer: Renderer2,
        private elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT
        );
    }

    @Input()
    set class(value: string) {
        this.setPropagateChildClass(this.elementRef.nativeElement, this.dropdownChild.nativeElement, value);
    }

    ngOnInit() {
        this.$element = jQuery(this.elementRef.nativeElement);
        this.$dropdown = jQuery(this.dropdownChild.nativeElement);
    }

    ngAfterViewInit() {
        this.$dropdown.dropdown({
            target: this.pen ? $(this.pen) : null,
            direction: this.direction
        });
    }

    ngOnDestory() {
        if (this.$element) {
            this.$element.remove();
        }
    }
}
