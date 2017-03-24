"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var main_1 = require("./components/spinner/main");
var main_2 = require("./components/dropdown/main");
var main_3 = require("./components/checkbox/main");
var main_4 = require("./components/tab/main");
var main_5 = require("./components/toggle/main");
var main_6 = require("./components/step/main");
var main_7 = require("./components/input/main");
var main_8 = require("./components/ripple/main");
var forms_1 = require("@angular/forms");
var Homeworks = (function () {
    function Homeworks() {
    }
    return Homeworks;
}());
Homeworks = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule
        ],
        exports: [
            forms_1.FormsModule,
            main_1.WorksSpinner,
            main_2.WorksDropdown,
            main_3.WorksCheckbox,
            main_5.WorksToggle,
            main_4.WorksTab,
            main_4.WorksTabItem,
            main_6.WorksStep,
            main_6.WorksStepItem,
            main_7.WorksInput,
            main_8.WorksRipple
        ],
        providers: [],
        declarations: [
            main_1.WorksSpinner,
            main_2.WorksDropdown,
            main_3.WorksCheckbox,
            main_5.WorksToggle,
            main_6.WorksStep,
            main_6.WorksStepItem,
            main_4.WorksTab,
            main_4.WorksTabItem,
            main_7.WorksInput,
            main_8.WorksRipple
        ]
    })
], Homeworks);
exports.Homeworks = Homeworks;
//# sourceMappingURL=core.js.map