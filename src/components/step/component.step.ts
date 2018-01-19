import {
    AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, Directive, ElementRef, EventEmitter,
    forwardRef, Input, Output, Renderer2
} from '@angular/core';
import { HomeworksManager } from '../../core/manager';

const COMPONENT: string = 'step';

@Component({
    selector: 'works-step',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.Default
})
export class WorksStep extends HomeworksManager {
    @Output()
    activeChange: EventEmitter<number> = new EventEmitter<number>();
    @Output('move')
    onMove: EventEmitter<homeworks.StepEvent> = new EventEmitter<homeworks.StepEvent>();
    private $element: JQuery;
    private wrapperElement?: Element = null;
    private _active: number = 0;

    constructor(
        protected renderer: Renderer2,
        private elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT
        );
        this.wrapperElement = this.renderer.createElement('div');
        this.renderer.appendChild(this.elementRef.nativeElement.parentNode, this.wrapperElement);
        this.wrapperElement.setAttribute('class', 'works-step-wrapper');
        this.wrapperElement.appendChild(this.elementRef.nativeElement);
    }

    @Input()
    get active(): number {
        return this._active;
    }

    set active(value: number) {
        const oldValue: number = this._active;
        this._active = value;
        if (this.$element) {
            if (oldValue !== value) {
                this.$element.triggerHandler('step.set', value);
            }
        }
        this.activeChange.emit(value);
    };

    @Input()
    set class(value: string) {
        this.setPropagateChildClass(this.elementRef.nativeElement, this.wrapperElement, value);
    }

    ngOnInit() {
        this.$element = jQuery(this.elementRef.nativeElement);
    };

    ngAfterViewInit() {
        this.$element.step({
            active: this.active
        });
        this.$element
            .on('step.move', (event: JQuery.Event, stepInfo: homeworks.StepEvent) => {
                if (this.active !== stepInfo.index) {
                    this.active = stepInfo.index;
                    this.onMove.emit(stepInfo);
                }
            });
    }
}

@Directive({
    selector: 'works-step-title'
})
export class WorksStepTitle extends HomeworksManager {
    constructor(
        protected renderer: Renderer2,
        public elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT
        );
    }
}

@Component({
    selector: 'works-step-item',
    template: `<ng-content></ng-content>`
})
export class WorksStepItem extends HomeworksManager implements AfterContentInit {
    @ContentChild(forwardRef(() => WorksStepTitle)) titleChild: WorksStepTitle;
    private _title: string;
    private titleElement?: Element = null;
    private contentElement?: Element = null;

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
    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;

        if (
            this.titleElement &&
            !this.titleChild
        ) {
            this.titleElement.textContent = this.title;
        }
    }

    ngOnInit() {
        let container: Element[] | Element = this.elementRef.nativeElement.parentNode.parentNode.querySelector('.step-container');
        if (!container) {
            const wrapperElement: Element = this.renderer.createElement('div');
            this.renderer.appendChild(this.elementRef.nativeElement.parentNode.parentNode, wrapperElement);
            this.renderer.addClass(wrapperElement, 'step-container');
            container = wrapperElement;
        }

        this.titleElement = this.renderer.createElement('a');
        this.renderer.appendChild(this.elementRef.nativeElement.parentNode, this.titleElement);
        this.titleElement.setAttribute('href', '#');
        this.renderer.addClass(this.titleElement, 'step-item');
        this.titleElement.textContent = this.title;

        this.contentElement = this.renderer.createElement('div');
        this.renderer.appendChild(container, this.contentElement);
        this.renderer.addClass(this.contentElement, 'step-container-item');
        this.contentElement.appendChild(this.elementRef.nativeElement);

        (container as Element).parentElement.appendChild((container as Element));
    }

    ngOnDestroy() {
        this.contentElement.remove();
        this.titleElement.remove();
    }

    ngAfterContentInit() {
        if (this.titleChild)
            this.titleElement.appendChild(this.titleChild.elementRef.nativeElement);
    }
}
