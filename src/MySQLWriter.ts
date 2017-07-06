import {Type, IWriter} from "./Log";
import * as mysql from "mysql";

export class MySQLWriter implements IWriter {
    private connection: mysql.IConnection;

    private table: string;

    public constructor(connection: mysql.IConnection, table: string) {
        this.connection = connection;
        this.table = table;
    }

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
