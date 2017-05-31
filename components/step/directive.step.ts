import { Component, Directive, ElementRef, Renderer, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Homeworks } from '../../core/homeworks';

const COMPONENT: string = 'step';

@Component({
    selector: 'works-step',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.Default
})
export class WorksStep extends Homeworks {
    private $element: JQuery;

    @Input() active: number;

    @Output('move')
    onMove: EventEmitter<HomeWorksStepEventObject> = new EventEmitter <HomeWorksStepEventObject>();

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
    };

    ngAfterViewInit() {
        const context = this;
        context.$element.step({
            active: context.active
        });
        context.$element.bind('step.move', (event: JQueryEventObject, stepInfo: HomeWorksStepEventObject) => {
            context.onMove.emit(stepInfo);
        });
    }
}

@Directive({
    selector: 'works-step-item'
})
export class WorksStepItem extends Homeworks {
    private $element: JQuery;

    private m_title: string;

    private titleElement: Element | null = null;
    private contentElement: Element | null = null;

    @Input()
    get title(): string {
        return this.m_title;
    }
    set title(value: string) {
        this.m_title = value;

        if (this.titleElement !== null) {
            this.titleElement.textContent = this.title;
        }
    }

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
        var container: Array<Element> | Element = context.elementRef.nativeElement.parentNode.parentNode.querySelector('.step-container');
        if (container === null) {
            let containerElement: Element = context.renderer.createElement(context.elementRef.nativeElement.parentNode.parentNode, 'div');
            context.renderer.setElementClass(containerElement, 'step-container', true);
            container = containerElement;
        }

        context.titleElement = context.renderer.createElement(context.elementRef.nativeElement.parentNode, 'a');
        context.titleElement.setAttribute('href', '#');
        context.renderer.setElementClass(context.titleElement, 'step-item', true);
        context.titleElement.textContent = context.title;

        context.contentElement = context.renderer.createElement(container, 'div');
        context.renderer.setElementClass(context.contentElement, 'step-container-item', true);
        context.contentElement.appendChild(context.elementRef.nativeElement);

        (container as Element).parentElement.appendChild((container as Element));
    }
}