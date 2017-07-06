"use strict";
(function (Type) {
    Type[Type["INFO"] = 1] = "INFO";
    Type[Type["WARNING"] = 2] = "WARNING";
    Type[Type["ERROR"] = 3] = "ERROR";
    Type[Type["SECURITY"] = 4] = "SECURITY";
})(exports.Type || (exports.Type = {}));
var Type = exports.Type;
var Log = (function () {
    function Log(writer) {
        this.writer = writer;
    }
    Log.prototype.info = function (data, author) {
        this.write(Type.INFO, data, author);
    };
    Log.prototype.warning = function (data, author) {
        this.write(Type.WARNING, data, author);
    };
    Log.prototype.error = function (data, author) {
        this.write(Type.ERROR, data, author);
    };
    Log.prototype.security = function (data, author) {
        this.write(Type.SECURITY, data, author);
    };
    Log.prototype.write = function (type, data, author) {
        this.writer.write(type, data, author);
    };
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=Log.js.map