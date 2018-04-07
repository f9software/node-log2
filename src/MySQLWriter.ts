import {Type, IWriter} from "./IWriter";
import * as mysql from "mysql";

export class MySQLWriter implements IWriter {
    constructor(private connection: mysql.Connection, private table: string) {}

    write(type: Type, data: Object, author: string) {
        const values = {
            _idUser: author,
            data: JSON.stringify(data),
            type: type
        };

        this.connection.query(
            'INSERT INTO ' + this.table + ' SET ?',
            values,
            (error, results, fields) => {
                if (error) {
                    throw error;
                }
            }
        );
    }
}
