"use strict";
var model_1 = require("./model");
var Homeworks = (function () {
    function Homeworks(renderer, component, alias) {
        if (alias === void 0) { alias = null; }
        this.renderer = renderer;
        this.m_class = [];
        if (alias !== null) {
            this.m_component = alias;
        }
        else {
            this.m_component = component;
        }
    }
    Homeworks.prototype.setRootElementClass = function (el, className, isAdd) {
        if (isAdd === void 0) { isAdd = true; }
        var context = this;
        var index = context.m_class.indexOf(className);
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
    };
    Homeworks.prototype.updateRootElementClass = function (el) {
        var context = this;
        context.renderer.setElementAttribute(el, 'class', '');
        for (var idx in context.m_class) {
            context.renderer.setElementClass(el, context.m_class[idx], true);
        }
    };
    Homeworks.prototype.setElementClass = function (el, className, isAdd) {
        if (isAdd === void 0) { isAdd = true; }
        var context = this;
        var classFullName = context.m_component + "-" + className;
        context.renderer.setElementClass(el, classFullName, isAdd);
    };
    Homeworks.prototype.setPropagateChildClass = function (rootEl, childEl, className) {
        var _this = this;
        if (className !== null && className !== '') {
            className
                .split(' ')
                .filter(function (e, i, arr) {
                return arr.indexOf(e, i + 1) === -1;
            })
                .forEach(function (e, i) {
                _this.renderer.setElementClass(childEl, e, true);
            });
        }
        this.updateRootElementClass(rootEl);
    };
    Homeworks.prototype.setColor = function (el, color) {
        var context = this;
        var index = model_1.Colors.indexOf(color);
        if (index !== -1) {
            model_1.Colors.filter(function (e, i) {
                return i !== index;
            }).map(function (e, i) {
                context.setElementClass(el, e, false);
            });
            context.setElementClass(el, color);
        }
    };
    Homeworks.prototype.setSize = function (el, size) {
        var context = this;
        var sizeClassName = context.getSizeClassName(size);
        model_1.Sizes.filter(function (e, i) {
            return e !== size;
        }).map(function (e, i) {
            var removeSizeName = context.getSizeClassName(e);
            context.setElementClass(el, removeSizeName, false);
        });
        context.setElementClass(el, sizeClassName);
    };
    Homeworks.prototype.getSizeClassName = function (size) {
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
    return Homeworks;
}());
exports.Homeworks = Homeworks;
//# sourceMappingURL=homeworks.js.map