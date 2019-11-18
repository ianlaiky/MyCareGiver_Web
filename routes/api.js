var express = require('express');
var router = express.Router();

var emergencyDB = require("../config/emergency");

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.locals.title = "hello";
    emergencyDB.getAllData(function (err, res) {

        res.send(res);
        // console.log(res);
    });

    // res.send('respond with a resource');
    // res.render('index');
});


module.exports = router;
