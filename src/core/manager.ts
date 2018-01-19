import { Renderer2 } from '@angular/core';
import { COLORS, SIZES } from './model';

export class HomeworksManager {
    private _component: string;
    private _class: string[] = [];

    constructor(
        protected renderer: Renderer2,
        component: string,
        alias: string = null
    ) {
        this._component = alias
            ? alias
            : component;
    }

    protected setRootElementClass(el: Element, className: string, isAdd: boolean = true): void {
        const index: number = this._class.indexOf(className);
        if (isAdd)
            if (this._class.includes(className)) {
                this._class.splice(index, 1);
            } else {
                this._class.push(className.replace(/\s/g, '-'));
            }

        this.updateRootElementClass(el);
    }

    protected updateRootElementClass(el: Element) {
        this.renderer.setAttribute(el, 'class', '');
        for (const idx in this._class) {
            this.renderer.addClass(el, this._class[idx]);
        }
    }

    protected setElementClass(el: Element, className: string, isAdd: boolean = true): void {
        const classFullName: string = `${this._component}-${className}`;
        if (isAdd)
            this.renderer.addClass(el, classFullName);
        else
            this.renderer.removeClass(el, classFullName);
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
        const targetIndex: number = COLORS.indexOf(color);
        if (targetIndex !== -1) {
            COLORS
                .filter((_, index) => targetIndex !== index)
                .map(element => {
                    this.setElementClass(el, element, false);
                });
            this.setElementClass(el, color);
        }
    }

    protected setSize(el: Element, size: string): void {
        const sizeClassName: string = HomeworksManager.getSizeClassName(size);
        /*
        SIZES
            .filter(element => element !== size)
            .map(element => {
                const removeSizeName: string = this.getSizeClassName(element);
            });
        */
        this.setElementClass(el, sizeClassName);
    }

    protected static getSizeClassName(size: string): string {
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

    public static disableHook(): void {
        const homeworks = window['homeworks'];

        if (!homeworks)
            throw new Error('`homeworks` library is must declared.\nType npm install homeworks --save.');

        homeworks.hook = false;
    }
}
