import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    Directive,
    ElementRef,
    EventEmitter,
    forwardRef,
    Input,
    Output,
    Renderer2
} from '@angular/core';
import {HomeworksManager} from "../../core/manager";

const COMPONENT: string = 'step';

@Component({
    selector: 'works-step',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.Default
})
export class WorksStep extends HomeworksManager {
    private $element: JQuery;
    private wrapperElement?: Element = null;
    private m_active: number = 0;

    @Output()
    activeChange: EventEmitter<number> = new EventEmitter<number>();

    @Input()
    get active(): number {
        return this.m_active;
    }
    set active(value: number) {
        const oldValue: number = this.m_active;
        this.m_active = value;
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

    @Output('move')
    onMove: EventEmitter<homeworks.StepEvent> = new EventEmitter <homeworks.StepEvent>();

    constructor(
        protected renderer: Renderer2,
        private elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT
        );
        const context = this;
        context.wrapperElement = context.renderer.createElement('div');
        context.renderer.appendChild(context.elementRef.nativeElement.parentNode, context.wrapperElement);
        context.wrapperElement.setAttribute("class", "works-step-wrapper");
        context.wrapperElement.appendChild(context.elementRef.nativeElement);
    }

    ngOnInit() {
        const context = this;
        context.$element = jQuery(context.elementRef.nativeElement);
    };

    ngAfterViewInit() {
        const context = this;
        context.$element.step({
            active: context.active
        });
        context.$element
            .on('step.move', (event: JQuery.Event, stepInfo: homeworks.StepEvent) => {
                if (context.active !== stepInfo.index) {
                    context.active = stepInfo.index;
                    context.onMove.emit(stepInfo);
                }
            });
    }
}

@Directive({
    selector: 'works-step-title'
})
export class WorksStepTitle extends HomeworksManager {
    private $element: JQuery;

    constructor(
        protected renderer: Renderer2,
        public elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT
        );
    }

    ngOnInit() {
        const context = this;
    }
}

@Component({
    selector: 'works-step-item',
    template: `
        <ng-content></ng-content>
    `
})
export class WorksStepItem extends HomeworksManager implements AfterContentInit {
    private $element: JQuery;

    private m_title: string;

    private titleElement?: Element = null;
    private contentElement?: Element = null;

    @ContentChild(forwardRef(() => WorksStepTitle)) titleChild: WorksStepTitle;

    @Input()
    get title(): string {
        return this.m_title;
    }
    set title(value: string) {
        this.m_title = value;

        if (this.titleElement !== null && !this.titleChild) {
            this.titleElement.textContent = this.title;
        }
    }

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
        let container: Element[] | Element = context.elementRef.nativeElement.parentNode.parentNode.querySelector('.step-container');
        if (container === null) {
            const wrapperElement: Element = context.renderer.createElement('div');
            context.renderer.appendChild(context.elementRef.nativeElement.parentNode.parentNode, wrapperElement);
            context.renderer.addClass(wrapperElement, 'step-container');
            container = wrapperElement;
        }

        context.titleElement = context.renderer.createElement('a');
        context.renderer.appendChild(context.elementRef.nativeElement.parentNode, context.titleElement);
        context.titleElement.setAttribute('href', '#');
        context.renderer.addClass(context.titleElement, 'step-item');
        context.titleElement.textContent = context.title;

        context.contentElement = context.renderer.createElement('div');
        context.renderer.appendChild(container, context.contentElement);
        context.renderer.addClass(context.contentElement, 'step-container-item');
        context.contentElement.appendChild(context.elementRef.nativeElement);

        (container as Element).parentElement.appendChild((container as Element));
    }

    ngAfterContentInit() {
        const context = this;

        if (context.titleChild) {
            context.titleElement.appendChild(context.titleChild.elementRef.nativeElement);
        }
    }
}
