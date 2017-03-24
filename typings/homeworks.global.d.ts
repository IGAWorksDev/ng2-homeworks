declare interface HomeWorksEventObject {
    element: JQuery;
    value: string;
    checked?: boolean;
}

declare interface JQuery {
    bind(eventType: string, handler: (...parameters: any[]) => void): JQuery;
    knock(): JQuery;
}