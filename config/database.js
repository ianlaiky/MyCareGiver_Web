// File Created by: Ian Lai Kheng Yan
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'thelaifamily.ddns.net',
    user     : 'user',
    password : 'P@ss1234',
    database : 'Care'
});

module.exports = connection;
// thelaifamily.ddns.net
// 192.168.1.137