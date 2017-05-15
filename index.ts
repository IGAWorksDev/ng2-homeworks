/// <reference path="typings/index.d.ts" />

import { NgModule } from '@angular/core';

import { WorksSpinner } from './components/spinner/main';
import { WorksDropdown } from './components/dropdown/main';
import { WorksCheckbox } from './components/checkbox/main';
import { WorksTab, WorksTabItem } from './components/tab/main';
import { WorksToggle } from './components/toggle/main';
import { WorksStep, WorksStepItem } from './components/step/main';
import { WorksInput } from './components/input/main';
import { WorksRipple } from './components/ripple/main';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule
    ],
    exports: [  
        FormsModule,

        WorksSpinner,
        WorksDropdown,
        WorksCheckbox,
        WorksToggle,
        WorksTab,
        WorksTabItem,
        WorksStep,
        WorksStepItem,
        WorksInput,
        WorksRipple
    ],
    providers: [
    ],
    declarations: [
        WorksSpinner,
        WorksDropdown,
        WorksCheckbox,
        WorksToggle,
        WorksStep,
        WorksStepItem,
        WorksTab,
        WorksTabItem,
        WorksInput,
        WorksRipple
    ]
})
export class Homeworks {
    constructor(
    ) {
        var context = this;
        var homeworks = (window['homeworks'] || {});
        homeworks.hook = false;
    }
}