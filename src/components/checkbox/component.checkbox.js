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
var manager_1 = require("../../core/manager");
var COMPONENT = 'checkbox';
var ALIAS = 'input';
var WorksCheckbox = /** @class */ (function (_super) {
    __extends(WorksCheckbox, _super);
    function WorksCheckbox(renderer, changeDetectorRef, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT, ALIAS) || this;
        _this.renderer = renderer;
        _this.changeDetectorRef = changeDetectorRef;
        _this.elementRef = elementRef;
        _this.type = 'checkbox';
        _this.onUpdate = new core_1.EventEmitter();
        _this.propagateChange = Function.prototype;
        _this.propagateTouch = Function.prototype;
        _this._value = '';
        return _this;
    }
    WorksCheckbox_1 = WorksCheckbox;
    Object.defineProperty(WorksCheckbox.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
            this.propagateChange(value);
            if (value === true || value === false) {
                this.checked = value;
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
            return this._color;
        },
        set: function (value) {
            this._color = value;
            this.setColor(this.checkboxChild.nativeElement, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksCheckbox.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksCheckbox.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (value) {
            this._checked = value;
            this.changeDetectorRef.detectChanges();
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksCheckbox.prototype, "readonly", {
        get: function () {
            return this._readonly;
        },
        set: function (value) {
            this._readonly = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksCheckbox.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (value) {
            this._required = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksCheckbox.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    WorksCheckbox.prototype.writeValue = function (value) {
        this.model = value;
    };
    WorksCheckbox.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    WorksCheckbox.prototype.registerOnTouched = function (fn) {
        this.propagateTouch = fn;
    };
    WorksCheckbox.prototype.render = function () {
        if (this.$checkbox) {
            this.$checkbox.triggerHandler('update');
        }
    };
    WorksCheckbox.prototype.ngOnInit = function () {
        var _this = this;
        this.$element = jQuery(this.elementRef.nativeElement);
        this.$checkbox = jQuery(this.checkboxChild.nativeElement);
        this.$checkbox
            .checkbox()
            .on('change', function (event) {
            var value = {
                checked: _this.$checkbox.prop('checked'),
                value: _this.$checkbox.val(),
                element: _this.$checkbox
            };
            var formValue = _this.$checkbox.val();
            var formChecked = _this.$checkbox.prop('checked');
            var formValueExists = !!formValue;
            if (formChecked) {
                if (formValueExists) {
                    _this.model = _this.$checkbox.val();
                }
                else {
                    _this.model = formChecked;
                }
            }
            else {
                if (formValueExists) {
                    _this.model = '';
                }
                else {
                    _this.model = formChecked;
                }
            }
            _this.onUpdate.emit(value);
        });
    };
    WorksCheckbox.prototype.ngAfterViewInit = function () {
        this.render();
    };
    __decorate([
        core_1.ViewChild('worksCheckbox'),
        __metadata("design:type", core_1.ElementRef)
    ], WorksCheckbox.prototype, "checkboxChild", void 0);
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
        core_1.Output('update'),
        __metadata("design:type", core_1.EventEmitter)
    ], WorksCheckbox.prototype, "onUpdate", void 0);
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorksCheckbox.prototype, "disabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorksCheckbox.prototype, "checked", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorksCheckbox.prototype, "readonly", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorksCheckbox.prototype, "required", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorksCheckbox.prototype, "value", null);
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
            template: "\n        <input #worksCheckbox\n            class=\"input\"\n            [attr.type]=\"type\"\n            [attr.id]=\"id\"\n            [attr.name]=\"name\"\n            [attr.title]=\"title\"\n            [disabled]=\"disabled\"\n            [checked]=\"checked\"\n            [readonly]=\"readonly\"\n            [required]=\"required\"\n            [attr.value]=\"value\" />\n    ",
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }),
        __metadata("design:paramtypes", [core_1.Renderer2,
            core_1.ChangeDetectorRef,
            core_1.ElementRef])
    ], WorksCheckbox);
    return WorksCheckbox;
    var WorksCheckbox_1;
}(manager_1.HomeworksManager));
exports.WorksCheckbox = WorksCheckbox;
//# sourceMappingURL=component.checkbox.js.map