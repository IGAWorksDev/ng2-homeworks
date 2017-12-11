import { Renderer2 } from '@angular/core';
export declare class HomeworksManager {
    protected renderer: Renderer2;
    private m_component;
    private m_class;
    protected setRootElementClass(el: Element, className: string, isAdd?: boolean): void;
    protected updateRootElementClass(el: Element): void;
    protected setElementClass(el: Element, className: string, isAdd?: boolean): void;
    protected setPropagateChildClass(rootEl: Element, childEl: Element, className: string): void;
    protected setColor(el: Element, color: string): void;
    protected setSize(el: Element, size: string): void;
    protected getSizeClassName(size: string): string;
    constructor(renderer: Renderer2, component: string, alias?: string);
}
