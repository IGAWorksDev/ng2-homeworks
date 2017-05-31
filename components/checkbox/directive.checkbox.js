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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var homeworks_1 = require('../../core/homeworks');
var COMPONENT = 'checkbox';
var ALIAS = 'input';
var WorksCheckbox = (function (_super) {
    __extends(WorksCheckbox, _super);
    function WorksCheckbox(renderer, elementRef, changeDetectorRef) {
        _super.call(this, renderer, COMPONENT, ALIAS);
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.propagateChange = Function.prototype;
        this.propagateTouch = Function.prototype;
        this.m_value = '';
        this.type = 'checkbox';
        this.onUpdate = new core_1.EventEmitter();
    }
    Object.defineProperty(WorksCheckbox.prototype, "model", {
        get: function () {
            return this.m_model;
        },
        set: function (value) {
            this.m_model = value;
            this.propagateChange(value);
            if (value === true) {
                this.checked = true;
                this.changeDetectorRef.detectChanges();
            }
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
            console.log('event', event);
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
    __decorate([
        core_1.ViewChild('worksCheckbox'), 
        __metadata('design:type', core_1.ElementRef)
    ], WorksCheckbox.prototype, "checkboxChild", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], WorksCheckbox.prototype, "class", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WorksCheckbox.prototype, "color", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WorksCheckbox.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WorksCheckbox.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WorksCheckbox.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WorksCheckbox.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WorksCheckbox.prototype, "disabled", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WorksCheckbox.prototype, "checked", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WorksCheckbox.prototype, "readonly", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WorksCheckbox.prototype, "required", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WorksCheckbox.prototype, "value", null);
    __decorate([
        core_1.Output('update'), 
        __metadata('design:type', core_1.EventEmitter)
    ], WorksCheckbox.prototype, "onUpdate", void 0);
    WorksCheckbox = __decorate([
        core_1.Component({
            selector: 'works-checkbox',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return WorksCheckbox; }),
                    multi: true
                }
            ],
            template: "\n        <input #worksCheckbox\n            class=\"input\"\n            [attr.type]=\"type\"\n            [attr.id]=\"id\"\n            [attr.name]=\"name\"\n            [attr.title]=\"title\"\n            [disabled]=\"disabled\"\n            [checked]=\"checked\"\n            [readonly]=\"readonly\"\n            [required]=\"required\"\n            [attr.value]=\"value\" />\n    ",
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef, core_1.ChangeDetectorRef])
    ], WorksCheckbox);
    return WorksCheckbox;
}(homeworks_1.Homeworks));
exports.WorksCheckbox = WorksCheckbox;
//# sourceMappingURL=directive.checkbox.js.map