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
var COMPONENT = 'spinner';
var WorksSpinner = WorksSpinner_1 = (function (_super) {
    __extends(WorksSpinner, _super);
    function WorksSpinner(renderer, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.propagateChange = Function.prototype;
        _this.propagateTouch = Function.prototype;
        _this.onUpdate = new core_1.EventEmitter();
        return _this;
    }
    Object.defineProperty(WorksSpinner.prototype, "class", {
        set: function (value) {
            this.setPropagateChildClass(this.elementRef.nativeElement, this.selectChild.nativeElement, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksSpinner.prototype, "placeholder", {
        get: function () {
            return this.m_placeholder;
        },
        set: function (value) {
            this.m_placeholder = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksSpinner.prototype, "block", {
        get: function () {
            return this.m_block;
        },
        set: function (value) {
            if (typeof value !== 'undefined') {
                this.m_block = true;
            }
            else {
                this.m_block = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksSpinner.prototype, "model", {
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
    WorksSpinner.prototype.writeValue = function (value) {
        var context = this;
        context.model = value;
    };
    WorksSpinner.prototype.registerOnChange = function (fn) {
        var context = this;
        context.propagateChange = fn;
    };
    WorksSpinner.prototype.registerOnTouched = function (fn) {
        var context = this;
        context.propagateTouch = fn;
    };
    WorksSpinner.prototype.render = function () {
        var context = this;
        if (typeof context.$select !== 'undefined') {
            context.$select.triggerHandler('update', context.m_model);
        }
    };
    WorksSpinner.prototype.setBlock = function (block) {
        var context = this;
        if (block === true) {
            if (typeof context.$select !== 'undefined') {
                context.$select.addClass('spinner-block');
                context.renderer.setElementClass(context.elementRef.nativeElement, 'block', true);
            }
        }
    };
    WorksSpinner.prototype.ngOnInit = function () {
        var context = this;
        context.$element = jQuery(context.elementRef.nativeElement);
        context.$select = jQuery(context.selectChild.nativeElement);
        context.$select
            .spinner({})
            .bind('change', function (event) {
            var value = {
                value: context.$select.val(),
                element: context.$select
            };
            context.model = context.$select.val();
            context.onUpdate.emit(value);
        });
        context.setBlock(context.block);
    };
    return WorksSpinner;
}(homeworks_1.Homeworks));
__decorate([
    core_1.ViewChild('worksSelect'),
    __metadata("design:type", core_1.ElementRef)
], WorksSpinner.prototype, "selectChild", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], WorksSpinner.prototype, "class", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], WorksSpinner.prototype, "placeholder", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], WorksSpinner.prototype, "block", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksSpinner.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksSpinner.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksSpinner.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WorksSpinner.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WorksSpinner.prototype, "readonly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WorksSpinner.prototype, "required", void 0);
__decorate([
    core_1.Output('update'),
    __metadata("design:type", core_1.EventEmitter)
], WorksSpinner.prototype, "onUpdate", void 0);
WorksSpinner = WorksSpinner_1 = __decorate([
    core_1.Component({
        selector: 'works-spinner',
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return WorksSpinner_1; }),
                multi: true
            }
        ],
        template: "\n        <select #worksSelect \n            [(ngModel)]=\"model\"\n            [attr.id]=\"id\"\n            [attr.name]=\"name\"\n            [attr.title]=\"title\"\n            [attr.disabled]=\"disabled\"\n            [attr.readonly]=\"readonly\"\n            [attr.required]=\"required\"\n            [attr.placeholder]=\"placeholder\" >\n            <ng-content></ng-content>\n        </select>\n    ",
        styles: ["\n        :host {\n            display: inline-block;\n            vertical-align: middle;\n        }\n   \n        :host.block {\n            display: block;\n            vertical-align: initial;\n        }\n    "],
        changeDetection: core_1.ChangeDetectionStrategy.Default
    }),
    __metadata("design:paramtypes", [core_1.Renderer,
        core_1.ElementRef])
], WorksSpinner);
exports.WorksSpinner = WorksSpinner;
var WorksSpinner_1;
//# sourceMappingURL=directive.spinner.js.map