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