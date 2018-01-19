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
var COMPONENT = 'input';
var WorksInput = /** @class */ (function (_super) {
    __extends(WorksInput, _super);
    function WorksInput(renderer, elementRef, changeDectecterRef) {
        var _this = _super.call(this, renderer, COMPONENT) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.changeDectecterRef = changeDectecterRef;
        _this.type = 'text';
        _this.onUpdate = new core_1.EventEmitter();
        _this.propagateChange = Function.prototype;
        _this.propagateTouch = Function.prototype;
        return _this;
    }
    WorksInput_1 = WorksInput;
    Object.defineProperty(WorksInput.prototype, "class", {
        set: function (value) {
            this.setPropagateChildClass(this.elementRef.nativeElement, this.inputChild.nativeElement, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksInput.prototype, "placeholder", {
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
    Object.defineProperty(WorksInput.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
            this.setColor(this.inputChild.nativeElement, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksInput.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
            this.setSize(this.inputChild.nativeElement, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksInput.prototype, "block", {
        get: function () {
            return this._block;
        },
        set: function (value) {
            this._block = typeof value !== 'undefined';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksInput.prototype, "disabled", {
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
    Object.defineProperty(WorksInput.prototype, "readonly", {
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
    Object.defineProperty(WorksInput.prototype, "required", {
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
    Object.defineProperty(WorksInput.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
            this.propagateChange(value);
            this.changeDectecterRef.detectChanges();
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    WorksInput.prototype.writeValue = function (value) {
        this.model = value;
    };
    WorksInput.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    WorksInput.prototype.registerOnTouched = function (fn) {
        this.propagateTouch = fn;
    };
    WorksInput.prototype.render = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.$input)
                _this.$input.triggerHandler('update', _this._model);
        }, 0);
    };
    WorksInput.prototype.onInput = function ($event) {
        var eventObject = {
            value: this.$element.val(),
            element: this.$element
        };
        this.onUpdate.emit(eventObject);
    };
    WorksInput.prototype.setBlock = function (block) {
        if (block) {
            if (this.$input) {
                this.$input.addClass('input-block');
                this.setRootElementClass(this.elementRef.nativeElement, 'block', true);
            }
        }
    };
    WorksInput.prototype.ngOnInit = function () {
        var _this = this;
        this.$element = jQuery(this.elementRef.nativeElement);
        this.$input = jQuery(this.inputChild.nativeElement);
        this.setBlock(this.block);
        this.$input
            .input()
            .on('input', function (event) {
            var value = {
                value: _this.$input.val(),
                element: _this.$input
            };
            _this.onUpdate.emit(value);
        });
    };
    WorksInput.prototype.ngAfterViewInit = function () {
        this.render();
    };
    __decorate([
        core_1.ViewChild('worksInput'),
        __metadata("design:type", core_1.ElementRef)
    ], WorksInput.prototype, "inputChild", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WorksInput.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WorksInput.prototype, "id", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WorksInput.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WorksInput.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WorksInput.prototype, "validation", void 0);
    __decorate([
        core_1.Output('update'),
        __metadata("design:type", core_1.EventEmitter)
    ], WorksInput.prototype, "onUpdate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WorksInput.prototype, "class", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WorksInput.prototype, "placeholder", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WorksInput.prototype, "color", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WorksInput.prototype, "size", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorksInput.prototype, "block", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorksInput.prototype, "disabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorksInput.prototype, "readonly", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorksInput.prototype, "required", null);
    WorksInput = WorksInput_1 = __decorate([
        core_1.Component({
            selector: 'works-input',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return WorksInput_1; }),
                    multi: true
                }
            ],
            template: "\n        <input #worksInput\n            class=\"input\"\n            [(ngModel)]=\"model\"\n            [attr.type]=\"type\"\n            [attr.id]=\"id\"\n            [attr.name]=\"name\"\n            [attr.title]=\"title\"\n            [disabled]=\"disabled\"\n            [readonly]=\"readonly\"\n            [required]=\"required\"\n            [attr.placeholder]=\"placeholder\" />\n    ",
            styles: ["\n        :host {\n            display: inline-block;\n            vertical-align: middle;\n        }\n\n        :host.block {\n            display: block;\n            vertical-align: initial;\n        }\n    "],
            host: {
                input: 'onInput($event)'
            },
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }),
        __metadata("design:paramtypes", [core_1.Renderer2,
            core_1.ElementRef,
            core_1.ChangeDetectorRef])
    ], WorksInput);
    return WorksInput;
    var WorksInput_1;
}(manager_1.HomeworksManager));
exports.WorksInput = WorksInput;
//# sourceMappingURL=component.input.js.map