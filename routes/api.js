var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.locals.title = "hello";
  // res.send('respond with a resource');
  res.render('index');
});








module.exports = router;
