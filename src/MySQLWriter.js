"use strict";
var MySQLWriter = (function () {
    function MySQLWriter(connection, table) {
        this.connection = connection;
        this.table = table;
    }
    MySQLWriter.prototype.write = function (type, data, author) {
        var values = {
            _idUser: author,
            data: JSON.stringify(data),
            type: type
        };
        this.connection.query('INSERT INTO ' + this.table + ' SET ?', values, function (error, results, fields) {
            if (error) {
                throw error;
            }
        });
    };
    return MySQLWriter;
}());
exports.MySQLWriter = MySQLWriter;
//# sourceMappingURL=MySQLWriter.js.map