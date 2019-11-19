var express = require('express');
var router = express.Router();

var emergencyDB = require("../config/emergency");

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.locals.title = "hello";
    emergencyDB.getAllData(function (err, result) {

        res.send(result);
        // console.log(res);
    });

    // res.send('respond with a resource');
    // res.render('index');
});

router.get('/new', function (req, res, next) {


    emergencyDB.insertDataIntoemergency(req.query.name.toString(),
        req.query.name.toString(),
        req.query.time.toString(),
        req.query.location.toString(),
        function (err, result) {
            console.log(result);
            res.send(result);
        })


});

router.get('/delete',function (req,res,next)     {
emergencyDB.deletebyId(req.query.id.toString(),function (err, result) {
   console.log(result);
});
    emergencyDB.getAllData(function (err, result) {
        console.log("-----------");


        res.locals.resArr = result;
        res.redirect("/")
        // console.log(res);
    });

});


module.exports = router;
