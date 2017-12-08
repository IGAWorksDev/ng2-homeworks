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
var COMPONENT = 'dropdown';
var WorksDropdown = (function (_super) {
    __extends(WorksDropdown, _super);
    function WorksDropdown(renderer, elementRef) {
        var _this = _super.call(this, renderer, COMPONENT) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        return _this;
    }
    Object.defineProperty(WorksDropdown.prototype, "class", {
        set: function (value) {
            this.setPropagateChildClass(this.elementRef.nativeElement, this.dropdownChild.nativeElement, value);
        },
        enumerable: true,
        configurable: true
    });
    WorksDropdown.prototype.ngOnInit = function () {
        var context = this;
        context.$element = jQuery(context.elementRef.nativeElement);
        context.$dropdown = jQuery(context.dropdownChild.nativeElement);
    };
    WorksDropdown.prototype.ngAfterViewInit = function () {
        var context = this;
        context.$dropdown.dropdown({
            target: context.pen ? $(context.pen) : null,
            direction: context.direction
        });
    };
    WorksDropdown.prototype.ngOnDestory = function () {
        var context = this;
        if (context.$element) {
            context.$element.remove();
        }
    };
    return WorksDropdown;
}(homeworks_1.Homeworks));
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksDropdown.prototype, "direction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksDropdown.prototype, "pen", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], WorksDropdown.prototype, "class", null);
__decorate([
    core_1.ViewChild('worksDropdown'),
    __metadata("design:type", core_1.ElementRef)
], WorksDropdown.prototype, "dropdownChild", void 0);
WorksDropdown = __decorate([
    core_1.Component({
        selector: 'works-dropdown',
        template: "\n        <div #worksDropdown\n            class=\"dropdown\">\n            <ng-content></ng-content>\n        </div>\n    ",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [core_1.Renderer2,
        core_1.ElementRef])
], WorksDropdown);
exports.WorksDropdown = WorksDropdown;
//# sourceMappingURL=component.dropdown.js.map