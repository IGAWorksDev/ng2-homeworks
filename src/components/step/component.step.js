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
var COMPONENT = 'step';
var WorksStep = /** @class */ (function (_super) {
    __extends(WorksStep, _super);
    function WorksStep(renderer, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.activeChange = new core_1.EventEmitter();
        _this.onMove = new core_1.EventEmitter();
        _this.wrapperElement = null;
        _this._active = 0;
        _this.wrapperElement = _this.renderer.createElement('div');
        _this.renderer.appendChild(_this.elementRef.nativeElement.parentNode, _this.wrapperElement);
        _this.wrapperElement.setAttribute('class', 'works-step-wrapper');
        _this.wrapperElement.appendChild(_this.elementRef.nativeElement);
        return _this;
    }
    Object.defineProperty(WorksStep.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            var oldValue = this._active;
            this._active = value;
            if (this.$element) {
                if (oldValue !== value) {
                    this.$element.triggerHandler('step.set', value);
                }
            }
            this.activeChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WorksStep.prototype, "class", {
        set: function (value) {
            this.setPropagateChildClass(this.elementRef.nativeElement, this.wrapperElement, value);
        },
        enumerable: true,
        configurable: true
    });
    WorksStep.prototype.ngOnInit = function () {
        this.$element = jQuery(this.elementRef.nativeElement);
    };
    ;
    WorksStep.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.$element.step({
            active: this.active
        });
        this.$element
            .on('step.move', function (event, stepInfo) {
            if (_this.active !== stepInfo.index) {
                _this.active = stepInfo.index;
                _this.onMove.emit(stepInfo);
            }
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], WorksStep.prototype, "activeChange", void 0);
    __decorate([
        core_1.Output('move'),
        __metadata("design:type", core_1.EventEmitter)
    ], WorksStep.prototype, "onMove", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], WorksStep.prototype, "active", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WorksStep.prototype, "class", null);
    WorksStep = __decorate([
        core_1.Component({
            selector: 'works-step',
            template: "<ng-content></ng-content>",
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }),
        __metadata("design:paramtypes", [core_1.Renderer2,
            core_1.ElementRef])
    ], WorksStep);
    return WorksStep;
}(manager_1.HomeworksManager));
exports.WorksStep = WorksStep;
var WorksStepTitle = /** @class */ (function (_super) {
    __extends(WorksStepTitle, _super);
    function WorksStepTitle(renderer, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        return _this;
    }
    WorksStepTitle = __decorate([
        core_1.Directive({
            selector: 'works-step-title'
        }),
        __metadata("design:paramtypes", [core_1.Renderer2,
            core_1.ElementRef])
    ], WorksStepTitle);
    return WorksStepTitle;
}(manager_1.HomeworksManager));
exports.WorksStepTitle = WorksStepTitle;
var WorksStepItem = /** @class */ (function (_super) {
    __extends(WorksStepItem, _super);
    function WorksStepItem(renderer, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.titleElement = null;
        _this.contentElement = null;
        return _this;
    }
    Object.defineProperty(WorksStepItem.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
            if (this.titleElement &&
                !this.titleChild) {
                this.titleElement.textContent = this.title;
            }
        },
        enumerable: true,
        configurable: true
    });
    WorksStepItem.prototype.ngOnInit = function () {
        var container = this.elementRef.nativeElement.parentNode.parentNode.querySelector('.step-container');
        if (!container) {
            var wrapperElement = this.renderer.createElement('div');
            this.renderer.appendChild(this.elementRef.nativeElement.parentNode.parentNode, wrapperElement);
            this.renderer.addClass(wrapperElement, 'step-container');
            container = wrapperElement;
        }
        this.titleElement = this.renderer.createElement('a');
        this.renderer.appendChild(this.elementRef.nativeElement.parentNode, this.titleElement);
        this.titleElement.setAttribute('href', '#');
        this.renderer.addClass(this.titleElement, 'step-item');
        this.titleElement.textContent = this.title;
        this.contentElement = this.renderer.createElement('div');
        this.renderer.appendChild(container, this.contentElement);
        this.renderer.addClass(this.contentElement, 'step-container-item');
        this.contentElement.appendChild(this.elementRef.nativeElement);
        container.parentElement.appendChild(container);
    };
    WorksStepItem.prototype.ngOnDestroy = function () {
        this.contentElement.remove();
        this.titleElement.remove();
    };
    WorksStepItem.prototype.ngAfterContentInit = function () {
        if (this.titleChild)
            this.titleElement.appendChild(this.titleChild.elementRef.nativeElement);
    };
    __decorate([
        core_1.ContentChild(core_1.forwardRef(function () { return WorksStepTitle; })),
        __metadata("design:type", WorksStepTitle)
    ], WorksStepItem.prototype, "titleChild", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WorksStepItem.prototype, "title", null);
    WorksStepItem = __decorate([
        core_1.Component({
            selector: 'works-step-item',
            template: "<ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [core_1.Renderer2,
            core_1.ElementRef])
    ], WorksStepItem);
    return WorksStepItem;
}(manager_1.HomeworksManager));
exports.WorksStepItem = WorksStepItem;
//# sourceMappingURL=component.step.js.map