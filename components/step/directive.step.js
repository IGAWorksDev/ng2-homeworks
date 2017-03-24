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
var homeworks_1 = require("../../core/homeworks");
var COMPONENT = 'step';
var WorksStep = (function (_super) {
    __extends(WorksStep, _super);
    function WorksStep(renderer, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.onMove = new core_1.EventEmitter();
        return _this;
    }
    WorksStep.prototype.ngOnInit = function () {
        var context = this;
        context.$element = jQuery(context.elementRef.nativeElement);
    };
    ;
    WorksStep.prototype.ngAfterViewInit = function () {
        var context = this;
        context.$element.step({
            active: context.active
        });
        context.$element.bind('step.move', function (event, stepInfo) {
            context.onMove.emit(stepInfo);
        });
    };
    return WorksStep;
}(homeworks_1.Homeworks));
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksStep.prototype, "active", void 0);
__decorate([
    core_1.Output('move'),
    __metadata("design:type", core_1.EventEmitter)
], WorksStep.prototype, "onMove", void 0);
WorksStep = __decorate([
    core_1.Component({
        selector: 'works-step',
        template: "<ng-content></ng-content>",
        changeDetection: core_1.ChangeDetectionStrategy.Default
    }),
    __metadata("design:paramtypes", [core_1.Renderer,
        core_1.ElementRef])
], WorksStep);
exports.WorksStep = WorksStep;
var WorksStepItem = (function (_super) {
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
            return this.m_title;
        },
        set: function (value) {
            this.m_title = value;
            if (this.titleElement !== null) {
                this.titleElement.textContent = this.title;
            }
        },
        enumerable: true,
        configurable: true
    });
    WorksStepItem.prototype.ngOnInit = function () {
        var context = this;
        var container = context.elementRef.nativeElement.parentNode.parentNode.querySelector('.step-container');
        if (container === null) {
            var containerElement = context.renderer.createElement(context.elementRef.nativeElement.parentNode.parentNode, 'div');
            context.renderer.setElementClass(containerElement, 'step-container', true);
            container = containerElement;
        }
        context.titleElement = context.renderer.createElement(context.elementRef.nativeElement.parentNode, 'a');
        context.titleElement.setAttribute('href', '#');
        context.renderer.setElementClass(context.titleElement, 'step-item', true);
        context.titleElement.textContent = context.title;
        context.contentElement = context.renderer.createElement(container, 'div');
        context.renderer.setElementClass(context.contentElement, 'step-container-item', true);
        context.contentElement.appendChild(context.elementRef.nativeElement);
        container.parentElement.appendChild(container);
    };
    return WorksStepItem;
}(homeworks_1.Homeworks));
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], WorksStepItem.prototype, "title", null);
WorksStepItem = __decorate([
    core_1.Directive({
        selector: 'works-step-item'
    }),
    __metadata("design:paramtypes", [core_1.Renderer,
        core_1.ElementRef])
], WorksStepItem);
exports.WorksStepItem = WorksStepItem;
//# sourceMappingURL=directive.step.js.map