var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Renderer, Input, Output, EventEmitter, forwardRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Homeworks } from '../../core/homeworks';
var COMPONENT = 'checkbox';
var ALIAS = 'input';
var WorksCheckbox = WorksCheckbox_1 = (function (_super) {
    __extends(WorksCheckbox, _super);
    function WorksCheckbox(renderer, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT, ALIAS) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.propagateChange = Function.prototype;
        _this.propagateTouch = Function.prototype;
        _this.m_value = '';
        _this.type = 'checkbox';
        _this.onUpdate = new EventEmitter();
        return _this;
    }
    Object.defineProperty(WorksCheckbox.prototype, "model", {
        get: function () {
            return this.m_model;
        },
        set: function (value) {
            this.m_model = value;
            this.propagateChange(value);
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksCheckbox.prototype, "class", {
        set: function (value) {
            this.setPropagateChildClass(this.elementRef.nativeElement, this.checkboxChild.nativeElement, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksCheckbox.prototype, "color", {
        get: function () {
            return this.m_color;
        },
        set: function (value) {
            this.m_color = value;
            this.setColor(this.checkboxChild.nativeElement, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksCheckbox.prototype, "disabled", {
        get: function () {
            return this.m_disabled;
        },
        set: function (value) {
            this.m_disabled = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksCheckbox.prototype, "checked", {
        get: function () {
            return this.m_checked;
        },
        set: function (value) {
            this.m_checked = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksCheckbox.prototype, "readonly", {
        get: function () {
            return this.m_readonly;
        },
        set: function (value) {
            this.m_readonly = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksCheckbox.prototype, "required", {
        get: function () {
            return this.m_required;
        },
        set: function (value) {
            this.m_required = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksCheckbox.prototype, "value", {
        get: function () {
            return this.m_value;
        },
        set: function (value) {
            this.m_value = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    WorksCheckbox.prototype.writeValue = function (value) {
        var context = this;
        context.model = value;
    };
    WorksCheckbox.prototype.registerOnChange = function (fn) {
        var context = this;
        context.propagateChange = fn;
    };
    WorksCheckbox.prototype.registerOnTouched = function (fn) {
        var context = this;
        context.propagateTouch = fn;
    };
    WorksCheckbox.prototype.render = function () {
        var context = this;
        if (typeof context.$checkbox !== 'undefined') {
            context.$checkbox.triggerHandler('update');
        }
    };
    WorksCheckbox.prototype.ngOnInit = function () {
        var context = this;
        context.$element = jQuery(context.elementRef.nativeElement);
        context.$checkbox = jQuery(context.checkboxChild.nativeElement);
        context.$checkbox
            .checkbox()
            .bind('change', function (event) {
            var value = {
                checked: context.$checkbox.prop('checked'),
                value: context.$checkbox.val(),
                element: context.$checkbox
            };
            var formValue = context.$checkbox.val();
            var formChecked = context.$checkbox.prop('checked');
            var formValueExists = typeof formValue !== 'undefined' && formValue !== null && formValue !== '';
            if (formChecked === true) {
                if (formValueExists === true) {
                    context.model = context.$checkbox.val();
                }
                else {
                    context.model = formChecked;
                }
            }
            else {
                if (formValueExists === true) {
                    context.model = '';
                }
                else {
                    context.model = formChecked;
                }
            }
            context.onUpdate.emit(value);
        });
    };
    WorksCheckbox.prototype.ngAfterViewInit = function () {
        var context = this;
        context.render();
    };
    return WorksCheckbox;
}(Homeworks));
__decorate([
    ViewChild('worksCheckbox'),
    __metadata("design:type", ElementRef)
], WorksCheckbox.prototype, "checkboxChild", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], WorksCheckbox.prototype, "class", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], WorksCheckbox.prototype, "color", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], WorksCheckbox.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], WorksCheckbox.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], WorksCheckbox.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], WorksCheckbox.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], WorksCheckbox.prototype, "disabled", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], WorksCheckbox.prototype, "checked", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], WorksCheckbox.prototype, "readonly", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], WorksCheckbox.prototype, "required", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], WorksCheckbox.prototype, "value", null);
__decorate([
    Output('update'),
    __metadata("design:type", EventEmitter)
], WorksCheckbox.prototype, "onUpdate", void 0);
WorksCheckbox = WorksCheckbox_1 = __decorate([
    Component({
        selector: 'works-checkbox',
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(function () { return WorksCheckbox_1; }),
                multi: true
            }
        ],
        template: "\n        <input #worksCheckbox\n            class=\"input\"\n            [attr.type]=\"type\"\n            [attr.id]=\"id\"\n            [attr.name]=\"name\"\n            [attr.title]=\"title\"\n            [disabled]=\"disabled\"\n            [checked]=\"checked\"\n            [readonly]=\"readonly\"\n            [required]=\"required\"\n            [attr.value]=\"value\" />\n    ",
        changeDetection: ChangeDetectionStrategy.Default
    }),
    __metadata("design:paramtypes", [Renderer,
        ElementRef])
], WorksCheckbox);
export { WorksCheckbox };
var WorksCheckbox_1;
//# sourceMappingURL=directive.checkbox.js.map