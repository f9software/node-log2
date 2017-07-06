export enum Type {
    INFO = 1,
    WARNING = 2,
    ERROR = 3,
    SECURITY = 4
}

export interface IWriter {
    write(type: Type, data: Object, author: string);
}

export class Log {
    private writer: IWriter;

    public constructor(writer: IWriter) {
        this.writer = writer;
    }

    public info(data, author) {
        this.write(Type.INFO, data, author);
    }

    public warning(data, author) {
        this.write(Type.WARNING, data, author);
    }

    public error(data, author) {
        this.write(Type.ERROR, data, author);
    }

    public security(data, author) {
        this.write(Type.SECURITY, data, author);
    }

    public write(type: Type, data: Object, author: string) {
        this.writer.write(type, data, author);
    }
}
