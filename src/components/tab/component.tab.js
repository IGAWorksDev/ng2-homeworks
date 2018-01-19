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
var COMPONENT = 'tab';
var WorksTab = /** @class */ (function (_super) {
    __extends(WorksTab, _super);
    function WorksTab(renderer, elementRef) {
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
    Object.defineProperty(WorksTab.prototype, "active", {
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
    Object.defineProperty(WorksTab.prototype, "class", {
        set: function (value) {
            this.setPropagateChildClass(this.elementRef.nativeElement, this.wrapperElement, value);
        },
        enumerable: true,
        configurable: true
    });
    WorksTab.prototype.ngOnInit = function () {
        this.$element = jQuery(this.elementRef.nativeElement);
    };
    ;
    WorksTab.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.$element.tab({
            active: this.active
        });
        this.$element
            .on('tab.move', function (event, tabInfo) {
            if (_this.active !== tabInfo.index) {
                _this.active = tabInfo.index;
                _this.onMove.emit(tabInfo);
            }
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], WorksTab.prototype, "activeChange", void 0);
    __decorate([
        core_1.Output('move'),
        __metadata("design:type", core_1.EventEmitter)
    ], WorksTab.prototype, "onMove", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], WorksTab.prototype, "active", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WorksTab.prototype, "class", null);
    WorksTab = __decorate([
        core_1.Component({
            selector: 'works-tab',
            template: "<ng-content></ng-content>",
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }),
        __metadata("design:paramtypes", [core_1.Renderer2,
            core_1.ElementRef])
    ], WorksTab);
    return WorksTab;
}(manager_1.HomeworksManager));
exports.WorksTab = WorksTab;
var WorksTabTitle = /** @class */ (function (_super) {
    __extends(WorksTabTitle, _super);
    function WorksTabTitle(renderer, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        return _this;
    }
    WorksTabTitle = __decorate([
        core_1.Directive({
            selector: 'works-tab-title'
        }),
        __metadata("design:paramtypes", [core_1.Renderer2,
            core_1.ElementRef])
    ], WorksTabTitle);
    return WorksTabTitle;
}(manager_1.HomeworksManager));
exports.WorksTabTitle = WorksTabTitle;
var WorksTabItem = /** @class */ (function (_super) {
    __extends(WorksTabItem, _super);
    function WorksTabItem(renderer, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.titleElement = null;
        _this.contentElement = null;
        return _this;
    }
    Object.defineProperty(WorksTabItem.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
            if (this.titleElement !== null && !this.titleChild) {
                this.titleElement.textContent = this.title;
            }
        },
        enumerable: true,
        configurable: true
    });
    WorksTabItem.prototype.ngOnInit = function () {
        var container = this.elementRef.nativeElement.parentNode.parentNode.querySelector('.tab-container');
        if (!container) {
            var containerElement = this.renderer.createElement('div');
            this.renderer.appendChild(this.elementRef.nativeElement.parentNode.parentNode, containerElement);
            this.renderer.addClass(containerElement, 'tab-container');
            container = containerElement;
        }
        this.titleElement = this.renderer.createElement('a');
        this.renderer.appendChild(this.elementRef.nativeElement.parentNode, this.titleElement);
        this.titleElement.setAttribute('href', '#');
        this.renderer.addClass(this.titleElement, 'tab-item');
        this.titleElement.textContent = this.title;
        this.contentElement = this.renderer.createElement('div');
        this.renderer.appendChild(container, this.contentElement);
        this.renderer.addClass(this.contentElement, 'tab-container-item');
        this.contentElement.appendChild(this.elementRef.nativeElement);
        container.parentElement.appendChild(container);
    };
    WorksTabItem.prototype.ngOnDestroy = function () {
        this.contentElement.remove();
        this.titleElement.remove();
    };
    WorksTabItem.prototype.ngAfterContentInit = function () {
        if (this.titleChild)
            this.titleElement.appendChild(this.titleChild.elementRef.nativeElement);
    };
    __decorate([
        core_1.ContentChild(core_1.forwardRef(function () { return WorksTabTitle; })),
        __metadata("design:type", WorksTabTitle)
    ], WorksTabItem.prototype, "titleChild", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WorksTabItem.prototype, "title", null);
    WorksTabItem = __decorate([
        core_1.Component({
            selector: 'works-tab-item',
            template: "<ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [core_1.Renderer2,
            core_1.ElementRef])
    ], WorksTabItem);
    return WorksTabItem;
}(manager_1.HomeworksManager));
exports.WorksTabItem = WorksTabItem;
//# sourceMappingURL=component.tab.js.map