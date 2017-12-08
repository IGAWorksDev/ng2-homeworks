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
var homeworks_1 = require("../../core/homeworks");
var COMPONENT = 'step';
var WorksStep = (function (_super) {
    __extends(WorksStep, _super);
    function WorksStep(renderer, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.wrapperElement = null;
        _this.m_active = 0;
        _this.activeChange = new core_1.EventEmitter();
        _this.onMove = new core_1.EventEmitter();
        var context = _this;
        context.wrapperElement = context.renderer.createElement(context.elementRef.nativeElement.parentNode, 'div');
        context.wrapperElement.setAttribute("class", "works-step-wrapper");
        context.wrapperElement.appendChild(context.elementRef.nativeElement);
        return _this;
    }
    Object.defineProperty(WorksStep.prototype, "active", {
        get: function () {
            return this.m_active;
        },
        set: function (value) {
            var oldValue = this.m_active;
            this.m_active = value;
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
        var context = this;
        context.$element = jQuery(context.elementRef.nativeElement);
    };
    ;
    WorksStep.prototype.ngAfterViewInit = function () {
        var context = this;
        context.$element.step({
            active: context.active
        });
        context.$element
            .on('step.move', function (event, stepInfo) {
            if (context.active !== stepInfo.index) {
                context.active = stepInfo.index;
                context.onMove.emit(stepInfo);
            }
        });
    };
    return WorksStep;
}(homeworks_1.Homeworks));
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WorksStep.prototype, "activeChange", void 0);
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
    __metadata("design:paramtypes", [core_1.Renderer2,
        core_1.ElementRef])
], WorksStep);
exports.WorksStep = WorksStep;
var WorksStepTitle = (function (_super) {
    __extends(WorksStepTitle, _super);
    function WorksStepTitle(renderer, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        return _this;
    }
    WorksStepTitle.prototype.ngOnInit = function () {
        var context = this;
    };
    return WorksStepTitle;
}(homeworks_1.Homeworks));
WorksStepTitle = __decorate([
    core_1.Directive({
        selector: 'works-step-title'
    }),
    __metadata("design:paramtypes", [core_1.Renderer2,
        core_1.ElementRef])
], WorksStepTitle);
exports.WorksStepTitle = WorksStepTitle;
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
            if (this.titleElement !== null && !this.titleChild) {
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
            var wrapperElement = context.renderer.createElement('div');
            context.renderer.appendChild(context.elementRef.nativeElement.parentNode.parentNode, wrapperElement);
            context.renderer.addClass(wrapperElement, 'step-container');
            container = wrapperElement;
        }
        context.titleElement = context.renderer.createElement(context.elementRef.nativeElement.parentNode, 'a');
        context.titleElement.setAttribute('href', '#');
        context.renderer.addClass(context.titleElement, 'step-item');
        context.titleElement.textContent = context.title;
        context.contentElement = context.renderer.createElement('div');
        context.renderer.appendChild(container, context.contentElement);
        context.renderer.addClass(context.contentElement, 'step-container-item');
        context.contentElement.appendChild(context.elementRef.nativeElement);
        container.parentElement.appendChild(container);
    };
    WorksStepItem.prototype.ngAfterContentInit = function () {
        var context = this;
        if (context.titleChild) {
            context.titleElement.appendChild(context.titleChild.elementRef.nativeElement);
        }
    };
    return WorksStepItem;
}(homeworks_1.Homeworks));
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
        template: "\n        <ng-content></ng-content>\n    "
    }),
    __metadata("design:paramtypes", [core_1.Renderer2,
        core_1.ElementRef])
], WorksStepItem);
exports.WorksStepItem = WorksStepItem;
//# sourceMappingURL=component.step.js.map