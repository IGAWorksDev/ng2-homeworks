interface SpinnerOptions {
    type?: any;
    empty?: any;
}

declare interface JQuery {
    spinner(options?: SpinnerOptions): JQuery;
}