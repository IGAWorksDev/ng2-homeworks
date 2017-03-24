interface ToggleOptions {
    placeholder?: string;
}

declare interface JQuery {
    toggle(options: ToggleOptions): JQuery;
}