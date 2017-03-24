interface RippleStartOptions {
    x: number;
    y: number;
}

declare interface JQuery {
    ripple(options?: Object): JQuery;
    start(options?: RippleStartOptions): JQuery;
}