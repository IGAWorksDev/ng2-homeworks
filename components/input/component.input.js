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
var COMPONENT = 'input';
var WorksInput = WorksInput_1 = (function (_super) {
    __extends(WorksInput, _super);
    function WorksInput(renderer, elementRef, changeDectecterRef) {
        var _this = _super.call(this, renderer, COMPONENT) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.changeDectecterRef = changeDectecterRef;
        _this.propagateChange = Function.prototype;
        _this.propagateTouch = Function.prototype;
        _this.type = 'text';
        _this.onUpdate = new core_1.EventEmitter();
        return _this;
    }
    Object.defineProperty(WorksInput.prototype, "class", {
        set: function (value) {
            this.setPropagateChildClass(this.elementRef.nativeElement, this.inputChild.nativeElement, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksInput.prototype, "placeholder", {
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
    Object.defineProperty(WorksInput.prototype, "color", {
        get: function () {
            return this.m_color;
        },
        set: function (value) {
            this.m_color = value;
            this.setColor(this.inputChild.nativeElement, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksInput.prototype, "size", {
        get: function () {
            return this.m_size;
        },
        set: function (value) {
            this.m_size = value;
            this.setSize(this.inputChild.nativeElement, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksInput.prototype, "block", {
        get: function () {
            return this.m_block;
        },
        set: function (value) {
            if (value) {
                this.m_block = true;
            }
            else {
                this.m_block = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksInput.prototype, "disabled", {
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
    Object.defineProperty(WorksInput.prototype, "readonly", {
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
    Object.defineProperty(WorksInput.prototype, "required", {
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
    Object.defineProperty(WorksInput.prototype, "model", {
        get: function () {
            return this.m_model;
        },
        set: function (value) {
            this.m_model = value;
            this.propagateChange(value);
            this.changeDectecterRef.detectChanges();
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    WorksInput.prototype.writeValue = function (value) {
        var context = this;
        context.model = value;
    };
    WorksInput.prototype.registerOnChange = function (fn) {
        var context = this;
        context.propagateChange = fn;
    };
    WorksInput.prototype.registerOnTouched = function (fn) {
        var context = this;
        context.propagateTouch = fn;
    };
    WorksInput.prototype.render = function () {
        var context = this;
        if (context.$input) {
            context.$input.triggerHandler('update', context.m_model);
        }
    };
    WorksInput.prototype.onInput = function ($event) {
        var context = this;
        var eventObject = {
            value: context.$element.val(),
            element: context.$element
        };
        context.onUpdate.emit(eventObject);
    };
    WorksInput.prototype.setBlock = function (block) {
        var context = this;
        if (block === true) {
            if (context.$input) {
                context.$input.addClass('input-block');
                context.setRootElementClass(context.elementRef.nativeElement, 'block', true);
            }
        }
    };
    WorksInput.prototype.ngOnInit = function () {
        var context = this;
        context.$element = jQuery(context.elementRef.nativeElement);
        context.$input = jQuery(context.inputChild.nativeElement);
        context.setBlock(context.block);
        context.$input
            .input()
            .bind('input', function (event) {
            var value = {
                value: context.$input.val(),
                element: context.$input
            };
            context.onUpdate.emit(value);
        });
    };
    WorksInput.prototype.ngAfterViewInit = function () {
        var context = this;
        context.render();
    };
    return WorksInput;
}(homeworks_1.Homeworks));
__decorate([
    core_1.ViewChild('worksInput'),
    __metadata("design:type", core_1.ElementRef)
], WorksInput.prototype, "inputChild", void 0);
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WorksInput.prototype, "validation", void 0);
__decorate([
    core_1.Output('update'),
    __metadata("design:type", core_1.EventEmitter)
], WorksInput.prototype, "onUpdate", void 0);
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
    __metadata("design:paramtypes", [core_1.Renderer,
        core_1.ElementRef,
        core_1.ChangeDetectorRef])
], WorksInput);
exports.WorksInput = WorksInput;
var WorksInput_1;
//# sourceMappingURL=component.input.js.map