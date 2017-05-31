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
var homeworks_1 = require('../../core/homeworks');
var COMPONENT = 'tab';
var WorksTab = (function (_super) {
    __extends(WorksTab, _super);
    function WorksTab(renderer, elementRef) {
        _super.call(this, renderer, COMPONENT);
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.active = null;
        this.onMove = new core_1.EventEmitter();
    }
    WorksTab.prototype.ngOnInit = function () {
        var context = this;
        context.$element = jQuery(context.elementRef.nativeElement);
    };
    ;
    WorksTab.prototype.ngAfterViewInit = function () {
        var context = this;
        context.$element.tab({
            active: context.active
        });
        context.$element.bind('tab.move', function (event, tabInfo) {
            context.onMove.emit(tabInfo);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], WorksTab.prototype, "active", void 0);
    __decorate([
        core_1.Output('move'), 
        __metadata('design:type', core_1.EventEmitter)
    ], WorksTab.prototype, "onMove", void 0);
    WorksTab = __decorate([
        core_1.Component({
            selector: 'works-tab',
            template: "<ng-content></ng-content>",
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], WorksTab);
    return WorksTab;
}(homeworks_1.Homeworks));
exports.WorksTab = WorksTab;
var WorksTabItem = (function (_super) {
    __extends(WorksTabItem, _super);
    function WorksTabItem(renderer, elementRef) {
        _super.call(this, renderer, COMPONENT);
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.titleElement = null;
        this.contentElement = null;
    }
    Object.defineProperty(WorksTabItem.prototype, "title", {
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
    WorksTabItem.prototype.ngOnInit = function () {
        var context = this;
        var container = context.elementRef.nativeElement.parentNode.parentNode.querySelector('.tab-container');
        if (container === null) {
            var containerElement = context.renderer.createElement(context.elementRef.nativeElement.parentNode.parentNode, 'div');
            context.renderer.setElementClass(containerElement, 'tab-container', true);
            container = containerElement;
        }
        context.titleElement = context.renderer.createElement(context.elementRef.nativeElement.parentNode, 'a');
        context.titleElement.setAttribute('href', '#');
        context.renderer.setElementClass(context.titleElement, 'tab-item', true);
        context.titleElement.textContent = context.title;
        context.contentElement = context.renderer.createElement(container, 'div');
        context.renderer.setElementClass(context.contentElement, 'tab-container-item', true);
        context.contentElement.appendChild(context.elementRef.nativeElement);
        container.parentElement.appendChild(container);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WorksTabItem.prototype, "title", null);
    WorksTabItem = __decorate([
        core_1.Directive({
            selector: 'works-tab-item'
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], WorksTabItem);
    return WorksTabItem;
}(homeworks_1.Homeworks));
exports.WorksTabItem = WorksTabItem;
//# sourceMappingURL=directive.tab.js.map