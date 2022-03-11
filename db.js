const mysql = require('mysql');

function selectFun(sql) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'QWer1234',
        database: 'test1104'
    });

    connection.connect();
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }

        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        return result;
        console.log('------------------------------------------------------------\n\n');
    });

    connection.end();
}

function test() {
    console.log('test');
}

module.exports = {
    selectFun,
    test
}