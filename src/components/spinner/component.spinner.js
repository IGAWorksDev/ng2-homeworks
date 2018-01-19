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
var COMPONENT = 'spinner';
var WorksSpinner = /** @class */ (function (_super) {
    __extends(WorksSpinner, _super);
    function WorksSpinner(renderer, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.onUpdate = new core_1.EventEmitter();
        _this.propagateChange = Function.prototype;
        _this.propagateTouch = Function.prototype;
        return _this;
    }
    WorksSpinner_1 = WorksSpinner;
    Object.defineProperty(WorksSpinner.prototype, "class", {
        set: function (value) {
            this.setPropagateChildClass(this.elementRef.nativeElement, this.selectChild.nativeElement, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksSpinner.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (value) {
            this._placeholder = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksSpinner.prototype, "block", {
        get: function () {
            return this._block;
        },
        set: function (value) {
            this._block = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksSpinner.prototype, "disabled", {
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
    Object.defineProperty(WorksSpinner.prototype, "readonly", {
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
    Object.defineProperty(WorksSpinner.prototype, "required", {
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
    Object.defineProperty(WorksSpinner.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
            if (this.$select && this.$select.find('.spinner').length) {
                this.setSize(this.$select.find('.spinner')[0], value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksSpinner.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
            this.propagateChange(value);
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    WorksSpinner.prototype.writeValue = function (value) {
        this.model = value;
    };
    WorksSpinner.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    WorksSpinner.prototype.registerOnTouched = function (fn) {
        this.propagateTouch = fn;
    };
    WorksSpinner.prototype.render = function () {
        if (this.$select) {
            this.$select.triggerHandler('update', this.model);
        }
    };
    WorksSpinner.prototype.setBlock = function (block) {
        if (block) {
            if (this.$element) {
                this.$element.find('.spinner').addClass('spinner-block');
                this.renderer.addClass(this.elementRef.nativeElement, 'block');
            }
        }
    };
    WorksSpinner.prototype.ngOnInit = function () {
        var _this = this;
        this.$element = jQuery(this.elementRef.nativeElement);
        this.$select = jQuery(this.selectChild.nativeElement);
        this.$select
            .spinner({})
            .on('change', function (event) {
            var value = {
                value: _this.$select.val(),
                element: _this.$select
            };
            _this.model = _this.$select.val();
            _this.onUpdate.emit(value);
        });
        this.setBlock(this.block);
    };
    WorksSpinner.prototype.ngAfterViewInit = function () {
        this.render();
    };
    __decorate([
        core_1.ViewChild('worksSelect'),
        __metadata("design:type", core_1.ElementRef)
    ], WorksSpinner.prototype, "selectChild", void 0);
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
        core_1.Output('update'),
        __metadata("design:type", core_1.EventEmitter)
    ], WorksSpinner.prototype, "onUpdate", void 0);
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorksSpinner.prototype, "disabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorksSpinner.prototype, "readonly", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorksSpinner.prototype, "required", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WorksSpinner.prototype, "size", null);
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
            template: "\n        <select #worksSelect \n            [(ngModel)]=\"model\"\n            [attr.id]=\"id\"\n            [attr.name]=\"name\"\n            [attr.title]=\"title\"\n            [disabled]=\"disabled\"\n            [attr.readonly]=\"readonly\"\n            [required]=\"required\"\n            [attr.placeholder]=\"placeholder\" >\n            <ng-content></ng-content>\n        </select>\n    ",
            styles: ["\n        :host {\n            display: inline-block;\n            vertical-align: middle;\n        }\n   \n        :host.block {\n            display: block;\n            vertical-align: initial;\n        }\n    "],
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }),
        __metadata("design:paramtypes", [core_1.Renderer2,
            core_1.ElementRef])
    ], WorksSpinner);
    return WorksSpinner;
    var WorksSpinner_1;
}(manager_1.HomeworksManager));
exports.WorksSpinner = WorksSpinner;
//# sourceMappingURL=component.spinner.js.map