var express = require('express');
const { routes } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("Express");
});

module.exports = router;
