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