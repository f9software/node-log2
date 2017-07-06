# node-log2
A simple log utility to be used in Node.js applications.

## Install

```sh
$ npm install node-log2
```

## Introduction

node-log2 can write to a MySQL database. Other writers can be added.

```sh
import * as log2 from "node-log2";
import * as mysql from "mysql";

// here we create the connection to MySQL
const mysqlConnection = mysql.createConnection({
    host: 'hostname',
    user: 'username',
    password: 'password',
    database: 'database'
});

// we initiate the writer with previously created MySQL connection and the table name
const writer = new log2.MySQLWriter(mysqlConnection, 'log');

// we initiate the logger
const log = new log2.Log(writer);

// you can pass any data as first parameter
log.info({msg: 'This logs a "info" message.', something: 'else'}, 'ii');
log.warning({msg: 'This logs a "warning" message.'}, 'ii');
log.error({msg: 'This logs a "error" message.', more: 'Data is invalid', data: {firstName: 'John'}, lastName: 'Smith'}, 'ii');
log.security({type: 'This logs a "security" message.'}, 'ii');
```
