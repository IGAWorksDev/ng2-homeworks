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
var manager_1 = require("../../core/manager");
var COMPONENT = 'option';
var WorksOption = /** @class */ (function (_super) {
    __extends(WorksOption, _super);
    function WorksOption(renderer, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.propagateChange = Function.prototype;
        _this.propagateTouch = Function.prototype;
        return _this;
    }
    Object.defineProperty(WorksOption.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorksOption.prototype, "disabled", {
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
    Object.defineProperty(WorksOption.prototype, "selected", {
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
    Object.defineProperty(WorksOption.prototype, "value", {
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
    WorksOption.prototype.render = function () {
        if (this.$option) {
            this.$option.closest('select').triggerHandler('update');
        }
    };
    WorksOption.prototype.ngOnInit = function () {
        this.$element = jQuery(this.elementRef.nativeElement);
        this.$option = jQuery(this.optionChild.nativeElement);
        this.$option.insertAfter(this.$element);
        this.$element.appendTo(this.$element.parent()).hide();
    };
    WorksOption.prototype.ngAfterViewInit = function () {
        this.render();
    };
    WorksOption.prototype.ngOnDestroy = function () {
        if (this.$option)
            this.$option.remove();
    };
    __decorate([
        core_1.ViewChild('worksOption'),
        __metadata("design:type", core_1.ElementRef)
    ], WorksOption.prototype, "optionChild", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WorksOption.prototype, "label", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorksOption.prototype, "disabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorksOption.prototype, "selected", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WorksOption.prototype, "value", null);
    WorksOption = __decorate([
        core_1.Component({
            selector: 'works-option',
            providers: [],
            template: "\n        <option #worksOption \n            [attr.label]=\"label\"\n            [disabled]=\"disabled\"\n            [selected]=\"selected\"\n            [attr.value]=\"value\"\n            >\n            <ng-content></ng-content>\n        </option>\n    ",
            styles: [],
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }),
        __metadata("design:paramtypes", [core_1.Renderer2,
            core_1.ElementRef])
    ], WorksOption);
    return WorksOption;
}(manager_1.HomeworksManager));
exports.WorksOption = WorksOption;
//# sourceMappingURL=component.option.js.map