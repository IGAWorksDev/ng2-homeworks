import { Component, Directive, ElementRef, Renderer, Input, Output, EventEmitter, AfterContentInit, ViewChild, ContentChild, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { Homeworks } from '../../core/homeworks';

const COMPONENT: string = 'tab';

@Component({
    selector: 'works-tab',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.Default
})
export class WorksTab extends Homeworks {
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
    onMove: EventEmitter<HomeWorksTabEventObject> = new EventEmitter<HomeWorksTabEventObject>();

    constructor(
        protected renderer: Renderer,
        private elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT
        );
        const context = this;
        context.wrapperElement = context.renderer.createElement(context.elementRef.nativeElement.parentNode, 'div');
        context.wrapperElement.setAttribute("class", "works-step-wrapper");
        context.wrapperElement.appendChild(context.elementRef.nativeElement);
    }

    ngOnInit() {
        const context = this;
        context.$element = jQuery(context.elementRef.nativeElement);
    };

    ngAfterViewInit() {
        const context = this;
        context.$element.tab({
            active: context.active
        });
        context.$element.bind('tab.move', (event: JQueryEventObject, tabInfo: HomeWorksTabEventObject) => {
            if (context.active !== tabInfo.index) {
                context.active = tabInfo.index;
                context.onMove.emit(tabInfo);
            }
        });
    }
}

@Component({
    selector: 'works-tab-item',
    template: `
        <ng-content></ng-content>
    `
})
export class WorksTabItem extends Homeworks implements AfterContentInit {
    private $element: JQuery;

    private m_title: string;

    private titleElement: Element | null = null;
    private contentElement: Element | null = null;

    @ContentChild(forwardRef(() => WorksTabTitle)) titleChild: WorksTabTitle;

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
        protected renderer: Renderer,
        private elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT
        );
        const context = this;
    }

    ngOnInit() {
        const context = this;
        var container: Element[] | Element = context.elementRef.nativeElement.parentNode.parentNode.querySelector('.tab-container');
        if (container === null) {
            let containerElement: Element = context.renderer.createElement(context.elementRef.nativeElement.parentNode.parentNode, 'div');
            context.renderer.setElementClass(containerElement, 'tab-container', true);
            container = containerElement;
        }

        context.titleElement = context.renderer.createElement(context.elementRef.nativeElement.parentNode, 'a');
        context.titleElement.setAttribute('href', '#');
        context.renderer.setElementClass(context.titleElement, 'tab-item', true);
        context.titleElement.textContent = context.title;

        context.contentElement = context.renderer.createElement(container, 'div');
        context.renderer.setElementClass(context.contentElement, 'tab-container-item', true);
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

@Directive({
    selector: 'works-tab-title'
})
export class WorksTabTitle extends Homeworks {
    private $element: JQuery;

    constructor(
        protected renderer: Renderer,
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