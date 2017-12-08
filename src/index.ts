/// <reference types="homeworks" />

import { NgModule } from '@angular/core';

import { WorksSpinner, WorksOption } from './components/spinner/main';
import { WorksDropdown } from './components/dropdown/main';
import { WorksCheckbox } from './components/checkbox/main';
import { WorksToggle } from './components/toggle/main';
import { WorksTab, WorksTabItem, WorksTabTitle } from './components/tab/main';
import { WorksStep, WorksStepItem, WorksStepTitle } from './components/step/main';
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
        WorksTabTitle,
        WorksStep,
        WorksStepItem,
        WorksStepTitle,
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
        WorksTab,
        WorksTabItem,
        WorksTabTitle,
        WorksStep,
        WorksStepItem,
        WorksStepTitle,
        WorksInput,
        WorksRipple
    ]
})
export class Homeworks {
    constructor(
    ) {
        if (!homeworks) {
            throw new Error('`homeworks` library is must declared.\nType npm install homeworks --save.');
        }
        homeworks.disableHook();
    }
}
