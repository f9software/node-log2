import {IWriter, Type} from "./IWriter";

export class Console implements IWriter {
    private console(type: Type) {
        switch(type) {
            case Type.INFO:
                return console.info;

            case Type.WARN:
                return console.warn;

            case Type.SECURITY:
            case Type.ERROR:
                return console.error;

            default:
                return console.log;
        }
    }

    public write(type: Type, data: any, author: string) {
        this.console(type)(data, author);
    }
}
