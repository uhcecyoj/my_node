var express = require('express');
var db = require('./db.js');

var app = express();
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/getDate', function (req, res) {
    res.send(new Date());
})

app.get('/getServerInfo', function (req, res) {
    var serverInfo = {};
    serverInfo.address = server.address().address;
    serverInfo.port = server.address().port;
    res.send(JSON.stringify(serverInfo));
})

app.get('/getRunoobInfo', function (req, res) {
    db.test();
    const s_runoob_tbl = 'select * from runoob_tbl';
    var result = db.selectFun(s_runoob_tbl);
    res.send(result);
})

const server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})