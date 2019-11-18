var express = require('express');
var router = express.Router();
var emergencyDB = require("../config/emergency");
/* GET home page. */
router.get('/', function(req, res, next) {

  emergencyDB.getAllData(function (err, result) {
    console.log("-----------");


    res.locals.resArr = result;
    res.render('index', { title: 'Express'});
    // console.log(res);
  });


  // res.render('index', { title: 'Express' });



});

module.exports = router;
