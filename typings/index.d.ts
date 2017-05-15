/**
 * * [MAIN]
 * @ EVENT
 *
 */

declare interface HomeWorksEventObject {
    element: JQuery;
    value: string;
    checked?: boolean;
}

declare interface JQuery {
    bind(eventType: string, handler: (...parameters: any[]) => void): JQuery;
    knock(): JQuery;
}

/**
 * * [COMPONENT]
 * @ CHECKBOX
 *
 */
interface CheckboxOptions {
}

declare interface JQuery {
    checkbox(options?: CheckboxOptions): JQuery;
}

/**
 * * [COMPONENT]
 * @ CONVERTER
 *
 */

interface ConverterOptions {
}

declare interface JQuery {
    converter(options?: ConverterOptions): JQuery;
}

/**
 * * [COMPONENT]
 * @ DROPDOIWN
 *
 */

interface DropdownOptions {
}

declare interface JQuery {
    dropdown(options?: DropdownOptions): JQuery;
    addHandler(target: JQuery): JQuery;
}

/**
 * * [COMPONENT]
 * @ INPUT
 *
 */

interface InputOptions {
}

declare interface JQuery {
    input(options?: InputOptions): JQuery;
}

/**
 * * [COMPONENT]
 * @ MODAL
 *
 */

declare interface JQuery {
    modal(options?: any): JQuery;
    modal(method?: string, options?: any): JQuery;
}

/**
 * * [COMPONENT]
 * @ NOTIFICATION
 *
 */

declare function notification(title: string, content: string, url: string, status?: string): void;

/**
 * * [COMPONENT]
 * @ RIPPLE
 *
 */

interface RippleStartOptions {
    x: number;
    y: number;
}

declare interface JQuery {
    ripple(options?: Object): JQuery;
    start(options?: RippleStartOptions): JQuery;
}

/**
 * * [COMPONENT]
 * @ SPINNER
 *
 */

interface SpinnerOptions {
    type?: any;
    empty?: any;
}

declare interface JQuery {
    spinner(options?: SpinnerOptions): JQuery;
}

/**
 * * [COMPONENT]
 * @ STEP
 *
 */

interface StepOptions {
    active?: number;
}

declare interface JQuery {
    step(method?: string): JQuery;
    step(options?: StepOptions): JQuery;
}

declare interface HomeWorksStepEventObject {
    header: Array<JQuery>;
    index: number;
    length: number;
}

/**
 * * [COMPONENT]
 * @ TAB
 *
 */

interface TabOptions {
    active?: number;
}

declare interface JQuery {
    tab(method?: string): JQuery;
    tab(options?: TabOptions): JQuery;
}

declare interface HomeWorksTabEventObject {
    header: Array<JQuery>;
    index: number;
    length: number;
}

/**
 * * [COMPONENT]
 * @ TOAST
 *
 */

declare function toast(message: string): void;

interface ToggleOptions {
    placeholder?: string;
}

/**
 * * [COMPONENT]
 * @ TOGGLE
 *
 */

declare interface JQuery {
    toggle(options: ToggleOptions): JQuery;
}

/**
 * * [COMPONENT]
 * @ UPLOAD
 *
 */

interface UploadOptions {
    url: string;
    type?: string;
    data?: Object;
    dest?: string;
    isBtn?: boolean;
    beforeStart?: () => void;
    complete?: (data?: any) => void;
    success?: (data?: any, state?: Object, xhr?: Object) => void;
    error?: (xhr?: Object, state?: Object, error?: any) => void;
    extensions?: any;
}

declare interface JQuery {
    upload(options?: UploadOptions): JQuery;
}