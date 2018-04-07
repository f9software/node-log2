import {IWriter, Type} from './IWriter';

export class Log {
    private writers: IWriter[] = [];

    constructor(writer: IWriter = null) {
        if (writer) {
            this.addWriter(writer);
        }
    }

    /**
     * Add writer.
     * @param {IWriter} writer
     */
    public addWriter(writer: IWriter) {
        this.writers.push(writer);
    }

    public info(data: any, author: string) {
        this.write(Type.INFO, data, author);
    }

    public warning(data: any, author: string) {
        this.write(Type.WARNING, data, author);
    }

    public error(data: any, author: string) {
        this.write(Type.ERROR, data, author);
    }

    public security(data: any, author: string) {
        this.write(Type.SECURITY, data, author);
    }

    public write(type: Type, data: any, author: string) {
        this.writers.forEach(writer => writer.write(type, data, author));
    }
}
