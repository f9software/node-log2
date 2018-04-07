export enum Type {
    INFO        = 1,
    WARN        = 2,
    ERROR       = 3,
    SECURITY    = 4,

    /**
     * Will be deprecated soon. Use WARN instead.
     * @type {number}
     * @deprecated
     */
    WARNING     = 2,
}

export interface IWriter {
    write(type: Type, data: any, author: string): any;
}
