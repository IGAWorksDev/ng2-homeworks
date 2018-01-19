import {
    AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, Directive, ElementRef, EventEmitter,
    forwardRef, Input, Output, Renderer2
} from '@angular/core';
import { HomeworksManager } from '../../core/manager';

const COMPONENT: string = 'tab';

@Component({
    selector: 'works-tab',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.Default
})
export class WorksTab extends HomeworksManager {
    @Output()
    activeChange: EventEmitter<number> = new EventEmitter<number>();
    @Output('move')
    onMove: EventEmitter<homeworks.TabEvent> = new EventEmitter<homeworks.TabEvent>();
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
        this.$element.tab({
            active: this.active
        });
        this.$element
            .on('tab.move', (event: JQuery.Event, tabInfo: homeworks.TabEvent) => {
                if (this.active !== tabInfo.index) {
                    this.active = tabInfo.index;
                    this.onMove.emit(tabInfo);
                }
            });
    }
}

@Directive({
    selector: 'works-tab-title'
})
export class WorksTabTitle extends HomeworksManager {
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
    selector: 'works-tab-item',
    template: `
        <ng-content></ng-content>
    `
})
export class WorksTabItem extends HomeworksManager implements AfterContentInit {
    @ContentChild(forwardRef(() => WorksTabTitle)) titleChild: WorksTabTitle;
    private $element: JQuery;
    private titleElement: Element | null = null;
    private contentElement: Element | null = null;

    constructor(
        protected renderer: Renderer2,
        private elementRef: ElementRef
    ) {
        super(
            renderer,
            COMPONENT
        );
    }

    private _title: string;

    @Input()
    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;

        if (this.titleElement !== null && !this.titleChild) {
            this.titleElement.textContent = this.title;
        }
    }

    ngOnInit() {
        let container: Element[] | Element = this.elementRef.nativeElement.parentNode.parentNode.querySelector('.tab-container');
        if (!container) {
            const containerElement: Element = this.renderer.createElement('div');
            this.renderer.appendChild(this.elementRef.nativeElement.parentNode.parentNode, containerElement);
            this.renderer.addClass(containerElement, 'tab-container');
            container = containerElement;
        }

        this.titleElement = this.renderer.createElement('a');
        this.renderer.appendChild(this.elementRef.nativeElement.parentNode, this.titleElement);
        this.titleElement.setAttribute('href', '#');
        this.renderer.addClass(this.titleElement, 'tab-item');
        this.titleElement.textContent = this.title;

        this.contentElement = this.renderer.createElement('div');
        this.renderer.appendChild(container, this.contentElement);
        this.renderer.addClass(this.contentElement, 'tab-container-item');
        this.contentElement.appendChild(this.elementRef.nativeElement);

        (container as Element).parentElement.appendChild((container as Element));
    }

    ngAfterContentInit() {
        if (this.titleChild)
            this.titleElement.appendChild(this.titleChild.elementRef.nativeElement);
    }
}
