const msSql = require("mssql");
// const Connection = require("tedious").Connection;

const config = {
    user: 'sayan',
    password: 'admin',
    server: 'DESKTOP-F0BUUL0\\SQLEXPRESS',
    database: 'EmployeeDB'
    // port: '1444'
}

const connection = msSql.connect(config, err => {
    if (err) {
        console.log(err);
        return err;
    } else {
        return new msSql.Request();
        // console.log("sql:", request);
        // return request;
    }
});

// const connection = new Connection(config);

// connection.on('connect', err => {
//     if (err) {
//         console.log('NOT CONNECTED');
//         console.log(err);
//         return err;
//     } else {
//         console.log('CONNECTED!!!!!!!!!!!!!!!!!');
//     }
// });

module.exports = connection;