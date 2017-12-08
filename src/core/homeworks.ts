import {Renderer2} from '@angular/core';
import {Colors, Sizes} from './model';

export class Homeworks {
    private m_component: string;
    private m_class: Array<string> = [];

    protected setRootElementClass(el: Element, className: string, isAdd: boolean = true): void {
        const context = this;
        const index: number = context.m_class.indexOf(className);
        if (index === -1) {
            if (isAdd === true) {
                context.m_class.push(className.replace(/\s/g, '-'));
            }
        }
        else {
            if (isAdd === false) {
                context.m_class.splice(index, 1);
            }
        }

        context.updateRootElementClass(el);
    }

    protected updateRootElementClass(el: Element) {
        const context = this;
        context.renderer.setAttribute(el, 'class', '');
        for (let idx in context.m_class) {
            context.renderer.addClass(el, context.m_class[idx]);
        }
    }

    protected setElementClass(el: Element, className: string, isAdd: boolean = true): void {
        const context = this;
        const classFullName: string = `${context.m_component}-${className}`;
        if (isAdd)
            context.renderer.addClass(el, classFullName);
        else
            context.renderer.removeClass(el, classFullName);
    }

    protected setPropagateChildClass(rootEl: Element, childEl: Element, className: string): void {
        if (className !== null && className !== '') {
            className
                .split(' ')
                .filter((element, index, array) => {
                    return array.indexOf(element, index + 1) === -1;
                })
                .forEach(element => {
                    this.renderer.addClass(childEl, element);
                });
        }
        this.updateRootElementClass(rootEl);
    }

    protected setColor(el: Element, color: string): void {
        const context = this;
        const index: number = Colors.indexOf(color);
        if (index !== -1) {
            Colors.filter((e, i) => {
                return i !== index;
            }).map((e, i) => {
                context.setElementClass(el, e, false);
            });
            context.setElementClass(el, color);
        }
    }

    protected setSize(el: Element, size: string): void {
        const context = this;
        const sizeClassName: string = context.getSizeClassName(size);
        Sizes.filter((element: string, index: number) => {
            return element !== size;
        }).map((element: string, index: number) => {
            const removeSizeName: string = context.getSizeClassName(element);
        });
        context.setElementClass(el, sizeClassName);
    }

    protected getSizeClassName(size: string): string {
        switch (size) {
            case 'extra large':
                return 'xg';
            case 'large':
                return 'lg';
            case 'medium':
            case 'normal':
                return 'md';
            case 'small':
                return 'sm';
            case 'extra small':
                return 'xs';
        }
        return 'md';
    }

    constructor(
        protected renderer: Renderer2,
        component: string,
        alias: string = null
    ) {
        if (alias !== null) {
            this.m_component = alias;
        }
        else {
            this.m_component = component;
        }
    }
}
