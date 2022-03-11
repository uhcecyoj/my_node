import {fun} from './fun.js'

let url = 'http://localhost:8080/'

var getDate_url = url + 'getDate'
$.ajax({
    url: getDate_url, success: function (result) {
        $("#date").html(result);
    }
});


var getServerInfo_url = url + 'getServerInfo'
$.ajax({
    url: getServerInfo_url, success: function (result) {
        var obj = JSON.parse(result);
        $("#serverInfo").html('address:' + obj.address + '|| port:' + obj.port);
    }
});

fun.dealPrefix(prefix => {
    console.log(prefix + "hello world");
});