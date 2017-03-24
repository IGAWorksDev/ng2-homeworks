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