"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var HomeworksManager = /** @class */ (function () {
    function HomeworksManager(renderer, component, alias) {
        if (alias === void 0) { alias = null; }
        this.renderer = renderer;
        this._class = [];
        this._component = alias
            ? alias
            : component;
    }
    HomeworksManager.prototype.setRootElementClass = function (el, className, isAdd) {
        if (isAdd === void 0) { isAdd = true; }
        var index = this._class.indexOf(className);
        if (isAdd)
            if (this._class.includes(className)) {
                this._class.splice(index, 1);
            }
            else {
                this._class.push(className.replace(/\s/g, '-'));
            }
        this.updateRootElementClass(el);
    };
    HomeworksManager.prototype.updateRootElementClass = function (el) {
        this.renderer.setAttribute(el, 'class', '');
        for (var idx in this._class) {
            this.renderer.addClass(el, this._class[idx]);
        }
    };
    HomeworksManager.prototype.setElementClass = function (el, className, isAdd) {
        if (isAdd === void 0) { isAdd = true; }
        var classFullName = this._component + "-" + className;
        if (isAdd)
            this.renderer.addClass(el, classFullName);
        else
            this.renderer.removeClass(el, classFullName);
    };
    HomeworksManager.prototype.setPropagateChildClass = function (rootEl, childEl, className) {
        var _this = this;
        if (className !== null && className !== '') {
            className
                .split(' ')
                .filter(function (element, index, array) {
                return array.indexOf(element, index + 1) === -1;
            })
                .forEach(function (element) {
                _this.renderer.addClass(childEl, element);
            });
        }
        this.updateRootElementClass(rootEl);
    };
    HomeworksManager.prototype.setColor = function (el, color) {
        var _this = this;
        var targetIndex = model_1.COLORS.indexOf(color);
        if (targetIndex !== -1) {
            model_1.COLORS
                .filter(function (_, index) { return targetIndex !== index; })
                .map(function (element) {
                _this.setElementClass(el, element, false);
            });
            this.setElementClass(el, color);
        }
    };
    HomeworksManager.prototype.setSize = function (el, size) {
        var sizeClassName = HomeworksManager.getSizeClassName(size);
        /*
        SIZES
            .filter(element => element !== size)
            .map(element => {
                const removeSizeName: string = this.getSizeClassName(element);
            });
        */
        this.setElementClass(el, sizeClassName);
    };
    HomeworksManager.getSizeClassName = function (size) {
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
    };
    HomeworksManager.disableHook = function () {
        var homeworks = window['homeworks'];
        if (!homeworks)
            throw new Error('`homeworks` library is must declared.\nType npm install homeworks --save.');
        homeworks.hook = false;
    };
    return HomeworksManager;
}());
exports.HomeworksManager = HomeworksManager;
//# sourceMappingURL=manager.js.map