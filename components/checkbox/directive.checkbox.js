"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var homeworks_1 = require("../../core/homeworks");
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
        _this.onUpdate = new core_1.EventEmitter();
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
    Object.defineProperty(WorksCheckbox.prototype, "value", {
        get: function () {
            return this.m_value;
        },
        set: function (value) {
            this.m_value = value;
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
    return WorksCheckbox;
}(homeworks_1.Homeworks));
__decorate([
    core_1.ViewChild('worksCheckbox'),
    __metadata("design:type", core_1.ElementRef)
], WorksCheckbox.prototype, "checkboxChild", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], WorksCheckbox.prototype, "class", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], WorksCheckbox.prototype, "color", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksCheckbox.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksCheckbox.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksCheckbox.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksCheckbox.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WorksCheckbox.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WorksCheckbox.prototype, "checked", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WorksCheckbox.prototype, "readonly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WorksCheckbox.prototype, "required", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], WorksCheckbox.prototype, "value", null);
__decorate([
    core_1.Output('update'),
    __metadata("design:type", core_1.EventEmitter)
], WorksCheckbox.prototype, "onUpdate", void 0);
WorksCheckbox = WorksCheckbox_1 = __decorate([
    core_1.Component({
        selector: 'works-checkbox',
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return WorksCheckbox_1; }),
                multi: true
            }
        ],
        template: "\n        <input #worksCheckbox\n            class=\"input\"\n            [attr.type]=\"type\"\n            [attr.id]=\"id\"\n            [attr.name]=\"name\"\n            [attr.title]=\"title\"\n            [attr.disabled]=\"disabled\"\n            [attr.checked]=\"checked\"\n            [attr.readonly]=\"readonly\"\n            [attr.required]=\"required\"\n            [attr.value]=\"value\" />\n    ",
        changeDetection: core_1.ChangeDetectionStrategy.Default
    }),
    __metadata("design:paramtypes", [core_1.Renderer,
        core_1.ElementRef])
], WorksCheckbox);
exports.WorksCheckbox = WorksCheckbox;
var WorksCheckbox_1;
//# sourceMappingURL=directive.checkbox.js.map