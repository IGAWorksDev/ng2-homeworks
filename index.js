"use strict";
/// <reference types="homeworks" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var main_1 = require("./src/components/spinner/main");
var main_2 = require("./src/components/dropdown/main");
var main_3 = require("./src/components/checkbox/main");
var main_4 = require("./src/components/toggle/main");
var main_5 = require("./src/components/tab/main");
var main_6 = require("./src/components/step/main");
var main_7 = require("./src/components/input/main");
var main_8 = require("./src/components/ripple/main");
var HomeworksModule = (function () {
    function HomeworksModule() {
    }
    return HomeworksModule;
}());
HomeworksModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule
        ],
        exports: [
            forms_1.FormsModule,
            main_1.WorksSpinner,
            main_1.WorksOption,
            main_2.WorksDropdown,
            main_3.WorksCheckbox,
            main_4.WorksToggle,
            main_5.WorksTab,
            main_5.WorksTabItem,
            main_5.WorksTabTitle,
            main_6.WorksStep,
            main_6.WorksStepItem,
            main_6.WorksStepTitle,
            main_7.WorksInput,
            main_8.WorksRipple
        ],
        providers: [],
        declarations: [
            main_1.WorksSpinner,
            main_1.WorksOption,
            main_2.WorksDropdown,
            main_3.WorksCheckbox,
            main_4.WorksToggle,
            main_5.WorksTab,
            main_5.WorksTabItem,
            main_5.WorksTabTitle,
            main_6.WorksStep,
            main_6.WorksStepItem,
            main_6.WorksStepTitle,
            main_7.WorksInput,
            main_8.WorksRipple
        ]
    })
], HomeworksModule);
exports.HomeworksModule = HomeworksModule;
//# sourceMappingURL=index.js.map