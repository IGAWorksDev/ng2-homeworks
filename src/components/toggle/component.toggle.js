"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var homeworks_1 = require("../../core/homeworks");
var COMPONENT = 'checkbox';
var ALIAS = 'input';
var WorksToggle = WorksToggle_1 = (function (_super) {
    __extends(WorksToggle, _super);
    function WorksToggle(renderer, changeDetectorRef, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT, ALIAS) || this;
        _this.renderer = renderer;
        _this.changeDetectorRef = changeDetectorRef;
        _this.elementRef = elementRef;
        _this.propagateChange = Function.prototype;
        _this.propagateTouch = Function.prototype;
        _this.type = 'radio';
        _this.onUpdate = new core_1.EventEmitter();
        return _this;
    }
    Object.defineProperty(WorksToggle.prototype, "model", {
        get: function () {
            return this.m_model;
        },
        set: function (value) {
            this.m_model = value;
            this.propagateChange(value);
            if (value === true || value === false) {
                this.checked = value;
            }
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksToggle.prototype, "placeholder", {
        get: function () {
            return this.m_placeholder;
        },
        set: function (value) {
            var context = this;
            if (value !== '') {
                try {
                    if (typeof value !== 'undefined' && value !== null && value !== '') {
                        if (typeof value === 'string') {
                            value = value.replace(/\'/gi, "\"");
                            value = JSON.parse(value);
                        }
                    }
                    else {
                        value = null;
                    }
                }
                catch (e) {
                    value = null;
                }
                context.m_placeholder = value;
                if (typeof context.$toggle !== 'undefined') {
                    context.$toggle.triggerHandler('update', {
                        placeholder: value
                    });
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksToggle.prototype, "color", {
        get: function () {
            return this.m_color;
        },
        set: function (value) {
            this.m_color = value;
            this.setColor(this.toggleChild.nativeElement, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksToggle.prototype, "class", {
        set: function (value) {
            this.setPropagateChildClass(this.elementRef.nativeElement, this.toggleChild.nativeElement, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksToggle.prototype, "checked", {
        get: function () {
            return this.m_checked;
        },
        set: function (value) {
            this.m_checked = value;
            this.changeDetectorRef.detectChanges();
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksToggle.prototype, "disabled", {
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
    Object.defineProperty(WorksToggle.prototype, "readonly", {
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
    Object.defineProperty(WorksToggle.prototype, "required", {
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
    WorksToggle.prototype.writeValue = function (value) {
        var context = this;
        context.model = value;
    };
    WorksToggle.prototype.registerOnChange = function (fn) {
        var context = this;
        context.propagateChange = fn;
    };
    WorksToggle.prototype.registerOnTouched = function (fn) {
        var context = this;
        context.propagateTouch = fn;
    };
    WorksToggle.prototype.render = function () {
        var context = this;
        if (context.$toggle) {
            context.$toggle.triggerHandler('update');
        }
    };
    WorksToggle.prototype.ngOnInit = function () {
        var context = this;
        context.$element = jQuery(context.elementRef.nativeElement);
        context.$toggle = jQuery(context.toggleChild.nativeElement);
        context.$toggle
            .toggle({
            placeholder: context.placeholder
        })
            .on('change', function (event) {
            var value = {
                checked: context.$toggle.prop('checked'),
                value: context.$toggle.val(),
                element: context.$toggle
            };
            context.onUpdate.emit(value);
        });
    };
    WorksToggle.prototype.ngAfterViewInit = function () {
        var context = this;
        context.render();
    };
    return WorksToggle;
}(homeworks_1.Homeworks));
__decorate([
    core_1.ViewChild('worksToggle'),
    __metadata("design:type", core_1.ElementRef)
], WorksToggle.prototype, "toggleChild", void 0);
__decorate([
    core_1.Input('ngModel'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], WorksToggle.prototype, "model", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], WorksToggle.prototype, "placeholder", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], WorksToggle.prototype, "color", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], WorksToggle.prototype, "class", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksToggle.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksToggle.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksToggle.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksToggle.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], WorksToggle.prototype, "checked", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], WorksToggle.prototype, "disabled", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], WorksToggle.prototype, "readonly", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], WorksToggle.prototype, "required", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WorksToggle.prototype, "value", void 0);
__decorate([
    core_1.Output('update'),
    __metadata("design:type", core_1.EventEmitter)
], WorksToggle.prototype, "onUpdate", void 0);
WorksToggle = WorksToggle_1 = __decorate([
    core_1.Component({
        selector: 'works-toggle',
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return WorksToggle_1; }),
                multi: true
            }
        ],
        template: "\n        <input #worksToggle\n            class=\"input\"\n            [attr.type]=\"type\"\n            [attr.type]=\"type\"\n            [attr.id]=\"id\"\n            [attr.name]=\"name\"\n            [attr.title]=\"title\"\n            [disabled]=\"disabled\"\n            [checked]=\"checked\"\n            [readonly]=\"readonly\"\n            [required]=\"required\"\n            [attr.value]=\"value\" />\n    ",
        changeDetection: core_1.ChangeDetectionStrategy.Default
    }),
    __metadata("design:paramtypes", [core_1.Renderer2,
        core_1.ChangeDetectorRef,
        core_1.ElementRef])
], WorksToggle);
exports.WorksToggle = WorksToggle;
var WorksToggle_1;
//# sourceMappingURL=component.toggle.js.map