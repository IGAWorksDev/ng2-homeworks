/// <reference path="typings/index.d.ts" />

import { NgModule } from '@angular/core';

import { WorksSpinner, WorksOption } from './components/spinner/main';
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
        WorksOption,
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
        WorksOption,
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
        const context = this;
        const homeworks = window['homeworks'];

        if (!homeworks) {
            throw new Error('`homeworks` library is must declared.\nType npm install homeworks --save.');
        }
        else {
            homeworks.hook = false;
        }
    }
}