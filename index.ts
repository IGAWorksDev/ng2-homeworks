/// <reference types="homeworks" />

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeworksManager } from './src/core/manager';
import { WorksSpinner, WorksOption } from './src/components/spinner/main';
import { WorksDropdown } from './src/components/dropdown/main';
import { WorksCheckbox } from './src/components/checkbox/main';
import { WorksToggle } from './src/components/toggle/main';
import { WorksTab, WorksTabItem, WorksTabTitle } from './src/components/tab/main';
import { WorksStep, WorksStepItem, WorksStepTitle } from './src/components/step/main';
import { WorksInput } from './src/components/input/main';
import { WorksRipple } from './src/components/ripple/main';

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
export class HomeworksModule {
    constructor() {
        HomeworksManager.disableHook();
    }
}
